import React from 'react';
import Sketch from 'react-p5';
import interReg from './Inter-SemiBold.otf'
import metroExtraBold from './Metropolis-ExtraBold.otf'

class App extends React.Component {
  render() {
    let size = 0;
    let state = 0;
    let metro_font, inter_font;
    function drawTimeline(p5){
      p5.stroke('#000');
      p5.fill('#000');
      p5.circle(size/2, p5.height/2, 5);

      p5.drawingContext.setLineDash([5, 10]);
      p5.line(0, p5.height/2, size/2, p5.height/2);
      p5.drawingContext.setLineDash([]);
    }
    function setGradient(p5, x, y, w, h, c1, c2, axis) {
      p5.noFill();
      if (axis === p5.Y_AXIS) {
        // Top to bottom gradient
        for (let i = y; i <= y + h; i++) {
          let inter = p5.map(i, y, y + h, 0, 1);
          let c = p5.lerpColor(c1, c2, inter);
          p5.stroke(c);
          p5.line(x, i, x + w, i);
        }
      } else if (axis === p5.X_AXIS) {
        // Left to right gradient
        for (let i = x; i <= x + w; i++) {
          let inter = p5.map(i, x, x + w, 0, 1);
          let c = p5.lerpColor(c1, c2, inter);
          p5.stroke(c);
          p5.line(i, y, i, y + h);
        }
      }
    }
    function drawRadialGradient(p5,to,from,unit) {
      const radius = p5.width + (unit * 10)+ size;
      
      for (let x = radius; x > 0; x -= unit) {
        let inter = p5.map(x, 0, radius, 0, 1.0);
        let colorHue = p5.lerpColor(from, to, inter);
        p5.fill(colorHue);
        p5.arc(0, p5.height/2, x,x,-p5.HALF_PI, p5.HALF_PI, p5.OPEN);
      }
    }
		return (
			<div className="App">
				<Sketch
          preload={(p5) => {
            inter_font = p5.loadFont(interReg);
            metro_font = p5.loadFont(metroExtraBold);
          }}
					setup={(p5, parentRef) => {
            p5.frameRate(20);
            p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(parentRef); //👀 edit here to change size of the canvas
          }}
          windowResized={p5 => {
            p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
					}}
					draw={p5 => {
            p5.clear();
            p5.strokeWeight(0.5);
            if(state === 0){
              setGradient(p5,0,0,p5.width,p5.height,p5.color(255),p5.color(92,158,255),p5.Y_AXIS);

              drawRadialGradient(p5, p5.color(92, 158, 255),p5.color(255),40);
              
              p5.fill('#000');
              p5.textFont(metro_font);
              p5.textSize(30);
              p5.text('We are a gift from the past,', p5.width/2-160, p5.height/2);
              p5.text('and we will gift the future. ', p5.width/2-150, p5.height/2+30);
            }
            else if(state === 1){
              if(size < 200){
                size+=5;
              }

              drawRadialGradient(p5, p5.color(92, 158, 255),p5.color(255),40);

              p5.fill('#5C9EFF');
              p5.arc(0, p5.height/2, size, size,-p5.HALF_PI, p5.HALF_PI, p5.OPEN);

              drawTimeline(p5);
              
              p5.textFont(metro_font);
              p5.textSize(30);
              p5.text('This is the lifetime of', p5.width/2-120, p5.height/2);
              p5.text('your parents.', p5.width/2-60, p5.height/2+30);
              

            } else if(state === 2){
              if(size < 300){
                size+=5;
              }
              p5.noStroke();

              drawRadialGradient(p5, p5.color(92, 158, 255),p5.color(255),40);
              
              p5.fill('#8FB5F5');
              p5.arc(0, p5.height/2, size,size,-p5.HALF_PI, p5.HALF_PI, p5.OPEN);
              p5.fill('#5C9EFF');
              p5.arc(0, p5.height/2, 200, 200,-p5.HALF_PI, p5.HALF_PI, p5.OPEN);

              drawTimeline(p5);

              p5.textFont(metro_font);
              p5.textSize(30);
              p5.text('This is your lifetime.', p5.width/2-120, p5.height/2);
            } else if(state === 3){
              if(size < 400){
                size+=5;
              }
              p5.noStroke();

              drawRadialGradient(p5, p5.color(92, 158, 255),p5.color(255),40);
              
              p5.fill('#C2D6F7');
              p5.arc(0, p5.height/2, size, size,-p5.HALF_PI, p5.HALF_PI, p5.OPEN);
              p5.fill('#8FB5F5');
              p5.arc(0, p5.height/2, 300, 300,-p5.HALF_PI, p5.HALF_PI, p5.OPEN);
              p5.fill('#5C9EFF');
              p5.arc(0, p5.height/2, 200, 200,-p5.HALF_PI, p5.HALF_PI, p5.OPEN);

              drawTimeline(p5);

              p5.textFont(metro_font);
              p5.textSize(30);
              p5.text('This will be the lifetime', p5.width/2-120, p5.height/2);
              p5.text('of the next generation.', p5.width/2-110, p5.height/2+30);
            } else if(state === 4){
              if(size < 800){
                size+=5;
              }
              p5.noStroke();
              drawRadialGradient(p5, p5.color(164, 214, 255),p5.color(255),40);
              
              p5.fill('#A4D6DE');
              p5.arc(0, p5.height/2, size, size,-p5.HALF_PI, p5.HALF_PI, p5.OPEN);
              p5.fill('#C2D6F7');
              p5.arc(0, p5.height/2, 400, 400,-p5.HALF_PI, p5.HALF_PI, p5.OPEN);
              p5.fill('#8FB5F5');
              p5.arc(0, p5.height/2, 300, 300,-p5.HALF_PI, p5.HALF_PI, p5.OPEN);
              p5.fill('#5C9EFF');
              p5.arc(0, p5.height/2, 200, 200,-p5.HALF_PI, p5.HALF_PI, p5.OPEN);

              drawTimeline(p5);

              p5.textFont(metro_font);
              p5.textSize(30);
              p5.text('This is the lifetime', p5.width/2-120, p5.height/2);
              p5.text('of a tree.', p5.width/2-60, p5.height/2+30);
            } else if(state === 5){
              if(size < 1600){
                size+=5;
              }
              p5.noStroke();
              drawRadialGradient(p5, p5.color(164, 214, 255),p5.color(255),40);
              
              p5.fill('#A5C4C3');
              p5.arc(0, p5.height/2, size, size,-p5.HALF_PI, p5.HALF_PI, p5.OPEN);
              p5.fill('#A4D6DE');
              p5.arc(0, p5.height/2, 800, 800,-p5.HALF_PI, p5.HALF_PI, p5.OPEN);
              p5.fill('#C2D6F7');
              p5.arc(0, p5.height/2, 400, 400,-p5.HALF_PI, p5.HALF_PI, p5.OPEN);
              p5.fill('#8FB5F5');
              p5.arc(0, p5.height/2, 300, 300,-p5.HALF_PI, p5.HALF_PI, p5.OPEN);
              p5.fill('#5C9EFF');
              p5.arc(0, p5.height/2, 200, 200,-p5.HALF_PI, p5.HALF_PI, p5.OPEN);

              drawTimeline(p5);

              p5.strokeWeight(0.5);
              p5.textSize(16);
              p5.textFont(inter_font);

              p5.textFont(metro_font);
              p5.textSize(30);
              p5.text('And this is the lifetime', p5.width/2-120, p5.height/2);
              p5.text('of the forest it belongs to.', p5.width/2-150, p5.height/2+30);
            } else if(state === 6){
              p5.noStroke();

              p5.fill('#A5C4C3');
              p5.arc(0, p5.height/2, 1800, 1800,-p5.HALF_PI, p5.HALF_PI, p5.OPEN);
              p5.fill('#A4D6DE');
              p5.arc(0, p5.height/2, 800, 800,-p5.HALF_PI, p5.HALF_PI, p5.OPEN);
              setGradient(p5,0,0,p5.width,p5.height,p5.color(165,196,195),p5.color(255),p5.Y_AXIS);
              drawRadialGradient(p5, p5.color(165,196,195),p5.color(194,214,247),80);
              p5.fill('#C2D6F7');
              p5.arc(0, p5.height/2, 400, 400,-p5.HALF_PI, p5.HALF_PI, p5.OPEN);
              p5.fill('#8FB5F5');
              p5.arc(0, p5.height/2, 300, 300,-p5.HALF_PI, p5.HALF_PI, p5.OPEN);
              p5.fill('#5C9EFF');
              p5.arc(0, p5.height/2, 200, 200,-p5.HALF_PI, p5.HALF_PI, p5.OPEN);

              p5.fill('#000');
              p5.textFont(metro_font);
              p5.textSize(30);
              p5.text('Persistent Selv will help you take care', p5.width/2-200, p5.height/2-20);
              p5.text('of future generations', p5.width/2-70, p5.height/2+10);
              p5.text('by protecting their environment.', p5.width/2-160, p5.height/2+40);

              p5.textFont(inter_font);
              p5.textSize(18);

              size+=5;
            }

            if(state !== 6){
              p5.textFont(inter_font);
              p5.textSize(18);
              p5.fill('#2C80FC');
              p5.noStroke();
              p5.fill('#000');
              p5.text('Click anywhere to continue', p5.width/2-90, p5.height/2+92);
            }
          }}
          mouseClicked={p5 => {
            if(state < 6){
              state++;
            } else {
              state = 0;
              size= 0;
            }
          }}
				/>
			</div>
		);
	}
}

export default App;
