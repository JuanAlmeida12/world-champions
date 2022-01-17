import React from "react";
import {
  useSpring,
  animated,
  useSpringRef,
  config,
  useChain,
  useTransition,
} from "react-spring";
import { selectStatus } from "slices/loader";

import { useAppSelector } from "../../app/hooks";

import { RunSprite } from "./fragment/runSprite";

import { LoaderContainer, LoaderContent } from "./styles";

export const ScreenLoader = () => {
  const open = useAppSelector(selectStatus) === "loading";

  const springApi = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: { ...config.stiff, duration: 300 },
    from: { size: "0%", background: "black", borderRadius: "100%" },
    to: {
      size: open ? "100%" : "0%",
      borderRadius: open ? "0%" : "100%",
    },
  });

  const transApi = useSpringRef();
  const transition = useTransition(open ? [<RunSprite />, "Loading..."] : [], {
    ref: transApi,
    trail: 500,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });

  useChain(open ? [springApi, transApi] : [transApi, springApi], [0, 1]);

  return (
    <LoaderContainer active={open}>
      <animated.div style={{ ...rest, width: size, height: size }}>
        <LoaderContent>
          {transition((style, item) => (
            <animated.div style={{ ...style }}>{item}</animated.div>
          ))}
        </LoaderContent>
      </animated.div>
    </LoaderContainer>
  );
};
