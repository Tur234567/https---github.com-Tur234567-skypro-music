import { useEffect, useState } from "react";
import React from "react";
import { audioRef } from "./bar.jsx";
import * as S from "./ProgressBar.js";

export default function ProgressBar() {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (event) => {
    audioRef.current.currentTime = event.target.value;
    setCurrentTime(event.target.value);
  };

  function formatDuration(durationSeconds) {
    const minutes = Math.floor(durationSeconds / 60);
    const seconds = Math.floor(durationSeconds % 60);
    const formattedSeconds = seconds.toString().padStart(2, "0");
    return `${minutes}:${formattedSeconds}`;
  }

  useEffect(() => {
    audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);
  
  return (
    <S.mainDiv>
      <S.miniDiv>
        <p>{formatDuration(currentTime)}</p>
        <p>/</p>
        <p>{formatDuration(duration)}</p>
      </S.miniDiv>
      <br />
      <input
        type="range"
        min={0}
        max={duration}
        value={currentTime}
        step={0.01}
        onChange={handleSeek}
      />
    </S.mainDiv>
  );
}
