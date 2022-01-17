import React, { useState, useEffect, useCallback, useMemo } from "react";
import { ImageLoaderProps } from "components/image-loader/image-loader.props";
import { ImageLoaderContainer, SkelettonContainer } from "./styles";
import { useSpring } from "react-spring";

export const ImageLoader = ({ src, alt, id, erroImage }: ImageLoaderProps) => {
  const [loading, setLoading] = useState(true);
  const [imageSRC, setImage] = useState(src);

  const [styles, loadAnimation] = useSpring(() => ({
    from: { backgroundPosition: "0% 50%" },
    to: { backgroundPosition: "100% 50%" },
    config: { duration: 1000 },
    loop: { reverse: true },
  }));

  const handleError = useCallback(() => {
    if (erroImage) setImage(erroImage);
  }, [erroImage]);

  useEffect(() => {
    if (loading) loadAnimation.start();
    else loadAnimation.pause();
  }, [loadAnimation, loading]);

  useEffect(() => {
    setImage(src);
    setLoading(true);
  }, [src]);

  return useMemo(
    () => (
      <ImageLoaderContainer id={id}>
        {loading && <SkelettonContainer style={{ ...styles }} />}
        <img
          src={imageSRC}
          onError={handleError}
          onLoad={() => setLoading(false)}
          alt={alt}
        />
      </ImageLoaderContainer>
    ),
    [alt, handleError, id, imageSRC, loading, styles]
  );
};
