import React, { useState } from "react";
import { RiMenuAddFill, RiArrowDropDownLine } from "react-icons/ri";
import { AiFillHeart, AiOutlinePause } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import { FaRandom } from "react-icons/fa";
import { MdSkipPrevious, MdSkipNext, MdLoop } from "react-icons/md";
import { VscDebugStart } from "react-icons/vsc";
import data from "../../data";

const Dashboard = () => {
  const [isPlaying, setPlaying] = useState(false);

  return (
    <div className="dashboard">
      <div className="header">
        <div className="back">
          <RiArrowDropDownLine />
        </div>
        <h3 className="title">Now playing</h3>
        <div></div>
      </div>
      <div className="main">
        <div className="image">
          <img
            src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/covers/4/c/4cf16a3bf73107120d44c3bcfc914e27_1475810469.jpg"
            alt="preview"
          />
        </div>

        <div className="song">
          <h3 className="name">Take Me To Your Heart</h3>
          <p className="singer">Mick Gordon</p>
        </div>

        <div className="playing-tool">
          <div className="tool">
            <div className="songs-list item">
              <RiMenuAddFill className="icon" />
            </div>
            <div className="like item active">
              <AiFillHeart className="icon" />
            </div>
            <div className="edit item">
              <MdModeEdit className="icon" />
            </div>
          </div>

          <div className="progress">
            <input
              type="range"
              name="progress"
              id="progress"
              min="0"
              max="100"
              step="1"
            />

            <div className="time">
              <p className="start">00:00</p>
              <p className="end">01:42</p>
            </div>
          </div>

          <div className="controll">
            <div className="controll-item random">
              <FaRandom fontSize={20} />
            </div>
            <div className="controll-item prev">
              <MdSkipPrevious />
            </div>
            <div className="controll-item start">
              {isPlaying ? <AiOutlinePause /> : <VscDebugStart />}
            </div>
            <div className="controll-item next">
              <MdSkipNext />
            </div>
            <div className="controll-item loop">
              <MdLoop fontSize={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
