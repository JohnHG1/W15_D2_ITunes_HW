import React from "react";

const Song = (props) => {
  return (
    <div className="song">
     
      <p>Position: {props.position + 1}</p>
     {/* got to +1 or else will start at 0 */}
     
      <p>{props.song["im:name"].label}</p>
          
      <p>{props.song["im:artist"].label}</p>
     
      <audio controls="play" src={props.song.link[1].attributes.href}></audio>

      <img src={props.song["im:image"][2].label} alt="" />

    
    </div>
  )
}

export default Song