import React from "react";

import { Replay } from "@material-ui/icons";
import { Close, StarRate } from "@material-ui/icons";
import { Favorite } from "@material-ui/icons";
import { FlashOn } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import "../components/SwipeButtons.css";

function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons_repeat">
        <Replay fontSize="large"></Replay>
      </IconButton>

      <IconButton className="swipeButtons_left">
        <Close fontSize="large"></Close>
      </IconButton>

      <IconButton className="swipeButtons_star">
        <StarRate fontSize="large"></StarRate>
      </IconButton>

      <IconButton className="swipeButtons_right">
        <Favorite fontSize="large"></Favorite>
      </IconButton>


      <IconButton className="swipeButtons_lightening">
        <FlashOn fontSize="large"></FlashOn>
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
