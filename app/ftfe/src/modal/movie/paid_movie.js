import React from 'react';
import { Player,BigPlayButton,ControlBar,VolumeMenuButton,LoadingSpinner } from "video-react";
import { Button } from "antd";
import "video-react/dist/video-react.css";

const img1 =
  "https://pic.36krcnd.com/201804/21023539/7g8t9syx7cwv6lrm.png!1200";



export default () => (
  
  <div >
    <Player poster={img1} preload='metadata'>
      <BigPlayButton position="center" />
      <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
      <LoadingSpinner />
      <ControlBar autoHide={true} >
      <VolumeMenuButton vertical />
      </ControlBar>
    </Player>
  </div>
  )




