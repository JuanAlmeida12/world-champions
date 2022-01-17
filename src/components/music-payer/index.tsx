import React, { useCallback, useEffect, useRef, useState } from "react";
import { PlayerContainer, PlayControll } from "./styled";

import PlaySVG from "assets/play.svg";
import PauseSVG from "assets/pause.svg";

import M1 from "assets/audio/music_1.mp3";
import M2 from "assets/audio/music_2.mp3";
import M3 from "assets/audio/music_3.mp3";

export const Player = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [music, setMusic] = useState();

  const updateMusic = () => {
    setMusic(randomMusic());

    if (!audioRef || !audioRef.current) return;

    audioRef.current.load();
    audioRef.current.play();
  };

  const startMusic = useCallback(() => {
    if (!audioRef || !audioRef.current) return;
    audioRef.current.play();
  }, []);

  const stopMusic = useCallback(() => {
    if (!audioRef || !audioRef.current) return;
    audioRef.current.pause();
  }, []);

  useEffect(() => {
    startMusic();
  }, [startMusic]);

  return (
    <PlayerContainer>
      <audio
        ref={audioRef}
        autoPlay
        onError={updateMusic}
        onEnded={updateMusic}
      >
        <source src={music} type="audio/mp3" />
      </audio>
      <PlayControll src={PlaySVG} onClick={startMusic} />
      <PlayControll src={PauseSVG} onClick={stopMusic} />
    </PlayerContainer>
  );
};

const randomMusic = () => {
  const musics = [M1, M2, M3];
  return musics[Math.floor(Math.random() * (musics.length + 1))];
};
