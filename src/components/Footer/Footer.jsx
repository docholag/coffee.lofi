import React, { useState, useEffect } from "react";
import { chill, jazzy, sleep } from "../../data/songData";
import { useSelector } from "react-redux";
import "./Footer.scss";
import Player from "../Player/Player";
import { useStateValue } from "../../Context/StateProvider";

import { getAllChill, getAllJazzy, getAllSleep } from "../../../src/api";

const Footer = ({ allChill, allJazzy, allSleep }, dispatch) => {
  // const [{ allChill, allJazzy, allSleep }, dispatch] = useStateValue();
  useEffect(() => {
    if (allChill) {
      getAllChill().then((data) => {
        dispatch({
          allChill: data.data,
        });
      });
    }

    if (allJazzy) {
      getAllJazzy().then((data) => {
        dispatch({
          allJazzy: data.data,
        });
      });
    }

    if (allSleep) {
      getAllSleep().then((data) => {
        dispatch({
          allSleep: data.data,
        });
      });
    }
  }, []);

  const data = useSelector((state) => state.moodState);

  const { moodMode } = data;

  const [currentSongIndex, setCurrentSongIndex] = useState("0");

  return (
    <div className="footer">
      <div className="author">
        {allChill.name}
        {/* {allChill?.name === "chill" ? (
          <span>Song name: {allChill.name}</span>
        ) : allJazzy?.name === "jazzy" ? (
          <span>Song name: {allJazzy.name}</span>
        ) : allSleep?.name === "sleep" ? (
          <span>Song name: {allSleep.name}</span>
        ) : null} */}
      </div>
      {/* // <div className="author">
      //   {allC.name === "chill" ? (
      //     <span>Song name: {allChill.name}</span>
      //   ) : allJazzy.name === "jazzy" ? (
      //     <span>Song name: {allJazzy.name}</span>
      //   ) : (
      //     <span>Song name: {allSleep.name}</span>
      //   )}
      </div> */}
      <div className="controller">
        {moodMode === "chill" ? (
          <Player
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            songs={chill}
          />
        ) : moodMode === "jazzy" ? (
          <Player
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            songs={jazzy}
          />
        ) : (
          <Player
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            songs={sleep}
          />
        )}
      </div>
    </div>
  );
};

export default Footer;
