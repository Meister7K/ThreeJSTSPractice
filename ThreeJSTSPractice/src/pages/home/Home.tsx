import { useEffect } from 'react';
import './Home.scss'

export const Home = () => {

useEffect(()=>{

    var svgEl = document.getElementById('animated-lines');

    var randomRange = function(min: number, max: number) {
      return(Math.random() * (max - min + 1)) + min
    };
    
    var numberOfLines = 500,
      lineDataArr: any[] = [];
    
    var createPathString = function() {
    
      var completedPath = '',
        comma = ',',
        ampl = 10; 
    
      for (var i = 0; i < numberOfLines; i++) {
    
        var path = lineDataArr[i];
    
        var current = {
          x: ampl * Math.sin(path.counter / path.sin),
          y: ampl * Math.cos(path.counter / path.cos)
        };

        const fix = 4
    
        var newPathSection = 'M' +
          path.startX +
          comma +
          path.startY +
          ' Q' +
          path.pointX +
          comma +
          (current.y * 1.5).toFixed(fix) + 
          ' ' +
          ((current.x) / 10 + path.centerX).toFixed(fix) +
          comma +
          ((current.y) / 5 + path.centerY).toFixed(fix) +
          ' T' +
          path.endX +
          comma +
          path.endY;
        path.counter++;
    
        completedPath += newPathSection;
    
      };
    
      return completedPath;
    
    };
    
    var createLines = function() {
    
      var newPathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path'),
 
        minSpeed = 100,
        maxSpeed = 10;
    
   
      for (var i = 0; i < numberOfLines; i++) {
    
        var lineDataObj = {
          counter: randomRange(1, 500), 
          startX: randomRange(0,10),
          startY: randomRange(0,10),
          endX: window.innerWidth, 
          endY: window.innerHeight, 
          sin: randomRange(minSpeed, maxSpeed),
          cos: randomRange(minSpeed, maxSpeed),
          pointX: randomRange(0, 5),
          centerX: randomRange(0, window.innerWidth),
          centerY: randomRange(0, window.innerHeight)
        }
    
        lineDataArr.push(lineDataObj)
    
      }
    
      var animLoop = function() {
        newPathEl.setAttribute('d', createPathString());
        requestAnimationFrame(animLoop);
      }

      if(svgEl){
        svgEl.appendChild(newPathEl);
      animLoop();
      }
      
    
    };
    createLines();
},[])


    return (<>
        <div className='background'>
        <svg id="animated-lines" version="1.1" xmlns="http://www.w3.org/2000/svg"></svg>
         </div>    
            <h1>
                Home
            </h1>
            <div>
                <h3>Welcome to my react three fiber practice app</h3>
                <p>
                    Please feel free to explor the links in the nav to see what I've been working on
                </p>
            </div>
            <div className='glass footer'>
                <p><a href="https://github.com/Meister7K" target='_blank'>Github</a></p>
            </div>

    </>)
}