import interReg from "./Inter-Bold.otf";
import metroExtraBold from "./Metropolis-ExtraBold.otf";
import openSansSemiBold from "./OpenSans-SemiBold.ttf";

export default function sketch(s) {
  s.state = {};
  s.dispatch = () => {};

  let size = 0;
  let metro_font, inter_font, open_font;
  let parentsLifeColor,
    yourLifeColor,
    nextGenLifeColor,
    treesLifeColor,
    forestLifeColor;
  let blueGradientColor,
    greenGradientColor,
    darkGreenGradientColor,
    white,
    black;
  let brandRectangle, brandButton, btnColor;
  const parentsRadius = 100;
  const yourRadius = 200;
  const nextGenRadius = 300;
  const treesRadius = 600;
  const forestRadius = 900;

  function drawTimeline(s) {
    s.stroke(black);
    s.fill(black);
    s.circle(size / 2, s.height / 2, 5);

    s.drawingContext.setLineDash([5, 10]);
    s.line(0, s.height / 2, size / 2, s.height / 2);
    s.drawingContext.setLineDash([]);
  }

  function setGradient(s, x, y, w, h, c1, c2, axis) {
    s.noFill();
    if (axis === s.Y_AXIS) {
      for (let i = y; i <= y + h; i++) {
        let inter = s.map(i, y, y + h, 0, 1);
        let c = s.lerpColor(c1, c2, inter);
        s.stroke(c);
        s.line(x, i, x + w, i);
      }
    } else if (axis === s.X_AXIS) {
      for (let i = x; i <= x + w; i++) {
        let inter = s.map(i, x, x + w, 0, 1);
        let c = s.lerpColor(c1, c2, inter);
        s.stroke(c);
        s.line(i, y, i, y + h);
      }
    }
  }

  function drawRadialGradient(s, to, from, unit) {
    const radius = s.width + unit * 10 + size;
    for (let x = radius; x > 0; x -= unit) {
      let inter = s.map(x, 0, radius, 0, 1.0);
      let colorHue = s.lerpColor(from, to, inter);
      s.fill(colorHue);
      s.arc(0, s.height / 2, x, x, -s.HALF_PI, s.HALF_PI, s.OPEN);
    }
  }

  s.preload = () => {
    inter_font = s.loadFont(interReg);
    metro_font = s.loadFont(metroExtraBold);
    open_font = s.loadFont(openSansSemiBold);
  };

  s.setup = () => {
    s.disableFriendlyErrors = true;
    s.frameRate(30);
    s.createCanvas(1000, 600); //👀 edit here to change size of the canvas

    parentsLifeColor = s.color(255, 255, 255, 200);
    yourLifeColor = s.color(255, 255, 255, 150);
    nextGenLifeColor = s.color(255, 255, 255, 100);
    treesLifeColor = s.color(164, 214, 222, 200);
    forestLifeColor = s.color(165, 196, 195, 200);
    blueGradientColor = s.color(92, 158, 255);
    greenGradientColor = s.color(165, 196, 195);
    darkGreenGradientColor = s.color(164, 214, 222);
    brandRectangle = s.color(181, 243, 216);
    brandButton = s.color(44, 128, 252);
    white = s.color(255);
    black = s.color(0);
    //btnHover = s.color(60, 106, 197);

    btnColor = brandButton;

    s.noLoop();
  };

  s.draw = () => {
    if (s.state.endAnimationState === 0) {
      setGradient(
        s,
        0,
        0,
        s.width,
        s.height,
        white,
        blueGradientColor,
        s.Y_AXIS
      );
      drawRadialGradient(s, blueGradientColor, white, 40);

      s.fill(brandRectangle);
      s.noStroke();
      s.rect(s.width / 2 - 172, s.height / 2 - 12, 412, 20);
      s.fill(black);
      s.textFont(metro_font);
      s.textSize(30);
      s.text(
        "Your pledges are complete",
        s.width / 2 - 170,
        s.height / 2
      );
      s.fill(white);
      s.textFont(open_font);
      s.textSize(20);
      s.text(
        "You can now commit your pledges",
        s.width / 2 - 140,
        s.height / 2 + 40
      );
      s.text(
        "to generations",
        s.width / 2 - 42,
        s.height / 2 + 60
      );
      s.noStroke();
      s.fill(btnColor);
      s.rect(s.width / 2 - 40, s.height / 2 + 80, 134, 52, 100);
      s.textFont(inter_font);
      s.textSize(18);
      s.noStroke();
      s.fill(white);
      s.text("Commit", s.width / 2 - 10, s.height / 2 + 113);
  
      // this is the code for button hover
      // if((s.width / 2 - 40 < s.mouseX) && (s.width / 2 - 40 + 109 > s.mouseX) && (s.height / 2 + 80 < s.mouseY) && (s.height / 2 + 80 + 52>s.mouseY)){
      //   btnColor = btnHover}
      // else{
      //   btnColor = brandButton }
    } else if (s.state.endAnimationState === 1) {
      s.clear();
      if (size < parentsRadius) {
        size += 5;
      } else {
        s.state.endAnimationState++;
      }

      drawRadialGradient(s, white, blueGradientColor, 40);

      s.fill(parentsLifeColor);
      s.arc(0, s.height / 2, size, size, -s.HALF_PI, s.HALF_PI, s.OPEN);

      drawTimeline(s);

      s.fill(brandRectangle);
      s.noStroke();
      s.rect(s.width / 2 + 15, s.height / 2 - 12, 120, 20);
      s.rect(s.width / 2 - 70, s.height / 2 + 23, 190, 20);
      s.fill(black);
      s.textFont(metro_font);
      s.textSize(30);
      s.text("This is the lifetime of", s.width / 2 - 140, s.height / 2);
      s.text("your parents.", s.width / 2 - 70, s.height / 2 + 35);
    } else if (s.state.endAnimationState === 2) {
      if (size < yourRadius) {
        size += 5;
      } else {
        s.state.endAnimationState++;
      }
      s.noStroke();

      drawRadialGradient(s, white, blueGradientColor, 40);

      s.fill(yourLifeColor);
      s.arc(0, s.height / 2, size, size, -s.HALF_PI, s.HALF_PI, s.OPEN);
      s.fill(parentsLifeColor);
      s.arc(
        0,
        s.height / 2,
        parentsRadius,
        parentsRadius,
        -s.HALF_PI,
        s.HALF_PI,
        s.OPEN
      );

      drawTimeline(s);

      s.fill(brandRectangle);
      s.noStroke();
      s.rect(s.width / 2 - 40, s.height / 2 - 12, 190, 20);
      s.fill(black);
      s.textFont(metro_font);
      s.textSize(30);
      s.text("This is your lifetime.", s.width / 2 - 140, s.height / 2);
    } else if (s.state.endAnimationState === 3) {
      if (size < nextGenRadius) {
        size += 5;
      } else {
        s.state.endAnimationState++;
      }
      s.noStroke();

      drawRadialGradient(s, white, blueGradientColor, 40);

      s.fill(nextGenLifeColor);
      s.arc(0, s.height / 2, size, size, -s.HALF_PI, s.HALF_PI, s.OPEN);
      s.fill(yourLifeColor);
      s.arc(
        0,
        s.height / 2,
        yourRadius,
        yourRadius,
        -s.HALF_PI,
        s.HALF_PI,
        s.OPEN
      );
      s.fill(parentsLifeColor);
      s.arc(
        0,
        s.height / 2,
        parentsRadius,
        parentsRadius,
        -s.HALF_PI,
        s.HALF_PI,
        s.OPEN
      );

      drawTimeline(s);

      s.fill(brandRectangle);
      s.noStroke();
      s.rect(s.width / 2 - 70, s.height / 2 - 12, 270, 20);
      s.rect(s.width / 2 - 40, s.height / 2 + 23, 245, 20);
      s.fill(black);
      s.textFont(metro_font);
      s.textSize(30);
      s.text("This will be the lifetime", s.width / 2 - 140, s.height / 2);
      s.text("of the next generation.", s.width / 2 - 130, s.height / 2 + 35);
    } else if (s.state.endAnimationState === 4) {
      if (size < treesRadius) {
        size += 5;
      } else {
        s.state.endAnimationState++;
      }
      s.noStroke();
      drawRadialGradient(s, white, greenGradientColor, 40);

      s.fill(treesLifeColor);
      s.arc(0, s.height / 2, size, size, -s.HALF_PI, s.HALF_PI, s.OPEN);
      s.fill(nextGenLifeColor);
      s.arc(
        0,
        s.height / 2,
        nextGenRadius,
        nextGenRadius,
        -s.HALF_PI,
        s.HALF_PI,
        s.OPEN
      );
      s.fill(yourLifeColor);
      s.arc(
        0,
        s.height / 2,
        yourRadius,
        yourRadius,
        -s.HALF_PI,
        s.HALF_PI,
        s.OPEN
      );
      s.fill(parentsLifeColor);
      s.arc(
        0,
        s.height / 2,
        parentsRadius,
        parentsRadius,
        -s.HALF_PI,
        s.HALF_PI,
        s.OPEN
      );

      drawTimeline(s);

      s.noStroke();
      s.fill(brandRectangle);
      s.rect(s.width / 2 - 40, s.height / 2 - 12, 170, 20);
      s.rect(s.width / 2 - 60, s.height / 2 + 23, 130, 20);
      s.fill(black);
      s.textFont(metro_font);
      s.textSize(30);
      s.text("This is the lifetime", s.width / 2 - 140, s.height / 2);
      s.text("of a tree.", s.width / 2 - 60, s.height / 2 + 35);
    } else if (s.state.endAnimationState === 5) {
      if (size < forestRadius) {
        size += 5;
      } else {
        s.state.endAnimationState++;
      }
      s.noStroke();
      drawRadialGradient(s, white, greenGradientColor, 40);

      s.fill(forestLifeColor);
      s.arc(0, s.height / 2, size, size, -s.HALF_PI, s.HALF_PI, s.OPEN);
      s.fill(treesLifeColor);
      s.arc(
        0,
        s.height / 2,
        treesRadius,
        treesRadius,
        -s.HALF_PI,
        s.HALF_PI,
        s.OPEN
      );
      s.fill(nextGenLifeColor);
      s.arc(
        0,
        s.height / 2,
        nextGenRadius,
        nextGenRadius,
        -s.HALF_PI,
        s.HALF_PI,
        s.OPEN
      );
      s.fill(yourLifeColor);
      s.arc(
        0,
        s.height / 2,
        yourRadius,
        yourRadius,
        -s.HALF_PI,
        s.HALF_PI,
        s.OPEN
      );
      s.fill(parentsLifeColor);
      s.arc(
        0,
        s.height / 2,
        parentsRadius,
        parentsRadius,
        -s.HALF_PI,
        s.HALF_PI,
        s.OPEN
      );

      drawTimeline(s);
      s.strokeWeight(0.5);
      s.textSize(16);
      s.textFont(inter_font);

      s.noStroke();
      s.fill(brandRectangle);
      s.rect(s.width / 2 + 20, s.height / 2 - 12, 180, 20);
      s.rect(s.width / 2 - 55, s.height / 2 + 23, 245, 20);
      s.fill(black);
      s.textFont(metro_font);
      s.textSize(30);
      s.text("And this is the lifetime", s.width / 2 - 140, s.height / 2);
      s.text(
        "of the forest it belongs to.",
        s.width / 2 - 150,
        s.height / 2 + 35
      );
    } else if (s.state.endAnimationState === 6) {
      if (size > 1200) {
        s.noLoop();
      }
      s.noStroke();

      s.fill(forestLifeColor);
      s.arc(
        0,
        s.height / 2,
        forestRadius,
        forestRadius,
        -s.HALF_PI,
        s.HALF_PI,
        s.OPEN
      );
      s.fill(treesLifeColor);
      s.arc(
        0,
        s.height / 2,
        treesRadius,
        treesRadius,
        -s.HALF_PI,
        s.HALF_PI,
        s.OPEN
      );
      setGradient(
        s,
        0,
        0,
        s.width,
        s.height,
        blueGradientColor,
        darkGreenGradientColor,
        s.X_AXIS
      );
      drawRadialGradient(s, white, darkGreenGradientColor, 100);
      s.fill(nextGenLifeColor);
      s.arc(
        0,
        s.height / 2,
        nextGenRadius,
        nextGenRadius,
        -s.HALF_PI,
        s.HALF_PI,
        s.OPEN
      );
      s.fill(yourLifeColor);
      s.arc(
        0,
        s.height / 2,
        yourRadius,
        yourRadius,
        -s.HALF_PI,
        s.HALF_PI,
        s.OPEN
      );
      s.fill(parentsLifeColor);
      s.arc(
        0,
        s.height / 2,
        parentsRadius,
        parentsRadius,
        -s.HALF_PI,
        s.HALF_PI,
        s.OPEN
      );

      s.noStroke();
      s.fill(black);
      s.textFont(metro_font);
      s.textSize(30);
      s.text(
        "Persistent Selv will help you take care",
        s.width / 2 - 240,
        s.height / 2 - 20
      );
      s.text("of future generations", s.width / 2 - 110, s.height / 2 + 10);
      s.text(
        "by protecting their environment.",
        s.width / 2 - 200,
        s.height / 2 + 40
      );

      s.textFont(inter_font);
      s.textSize(18);

      size += 2;
    }
  };

  s.mouseClicked = () => {
    if (s.state.endAnimationState < 2) {
      s.state.endAnimationState++;
      s.dispatch({
        type: "SET_ANIMATION_STATE",
        payload: s.state.endAnimationState,
      });
      s.loop();
    } else {
      s.state.endAnimationState = 0;
      s.dispatch({
        type: "SET_ANIMATION_STATE",
        payload: 0,
      });
      size = 0;
      s.noLoop();
      s.clear();
    }
  };
}
