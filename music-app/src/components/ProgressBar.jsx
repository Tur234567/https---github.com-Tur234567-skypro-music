import { useEffect, useState } from "react";
import React from "react";
import { audioRef } from "./bar.jsx";

export default function ProgressBar() {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  
  useEffect(() => {
    setDuration(audioRef.current.duration);
  })

  const click = () => {
    audioRef.current.currentTime = currentTime;
  }

  return (
    <input
      type="range"
      min={0}
      max={duration}
      value={currentTime}
      step={0.01}
      onChange={(event) => setCurrentTime(event.target.value)}
      onClick={click}
    />
  );
}