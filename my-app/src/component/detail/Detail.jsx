import React from "react";
import "./detail.css";

const Detail = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Johny Sin</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nihil
          odio, quia facere ab labore laborum tenetur. Non iusto, vel similique
          quasi commodi quisquam numquam? Temporibus minima exercitationem
          ducimus enim.
        </p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & Help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photo</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/09/Daemon.jpg"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
                <img src="./download.png" alt="" className="icon"/>
            </div>
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/09/Daemon.jpg"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
                <img src="./download.png" alt="" className="icon"/>
            </div>
          </div>
          
        </div>
        <div className="option">
          <div className="title">
            <span>Share Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
        <button className="logout">Block User</button>
      </div>
    </div>
  );
};

export default Detail;
