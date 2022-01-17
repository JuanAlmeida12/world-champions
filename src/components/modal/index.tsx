import React, { useEffect, useRef } from "react";
import { useOnClickOutside } from "helpers/useOutsideClick";
import { useSpring } from "react-spring";

import { ModalProps } from "./modal.props";

import { ModalContainer, ModalContent } from "./styles";

export const Modal = ({ children, open, onClose }: ModalProps) => {
  const [stylesBg, bgAnimation] = useSpring(() => ({
    opacity: 0,
    config: { duration: 300 },
  }));

  const refContent = useRef<HTMLDivElement>(null);

  useOnClickOutside(refContent, () => onClose());

  const [stylesContent, contentAnimation] = useSpring(() => ({
    scale: 0,
    config: { duration: 200 },
  }));

  useEffect(() => {
    bgAnimation.start({ opacity: open ? 1 : 0 });
    contentAnimation.start({ scale: open ? 1 : 0 });
  }, [bgAnimation, contentAnimation, open]);

  if (!open) return null;
  return (
    <ModalContainer style={stylesBg}>
      <ModalContent ref={refContent} style={stylesContent}>
        {children}
      </ModalContent>
    </ModalContainer>
  );
};
