import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";

import { useAppDispatch } from "app/hooks";
import { Brand } from "components/brand";
import { open } from "slices/loader";

import { WellcomeContainer, BrandContainer, StartButton } from "./styles";

export const Wellcome = () => {
  const dispatch = useAppDispatch();

  const navigation = useNavigate();

  const [styles, brandAnimation] = useSpring(() => ({
    opacity: 0,
    config: { duration: 3000 },
  }));

  const [styles2] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
    loop: true,
    delay: 400,
    config: { duration: 300 },
  }));

  const handleStart = useCallback(() => {
    dispatch(open());
    navigation("/battle");
  }, [dispatch, navigation]);

  useEffect(() => {
    brandAnimation.start({ opacity: 1 });
  }, [brandAnimation]);

  return (
    <WellcomeContainer>
      <animated.div style={styles}>
        <BrandContainer>
          <Brand />
        </BrandContainer>
      </animated.div>
      <animated.div style={styles2}>
        <StartButton>
          <span onClick={handleStart}>start</span>
        </StartButton>
      </animated.div>
    </WellcomeContainer>
  );
};
