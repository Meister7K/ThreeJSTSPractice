/* eslint-disable prefer-const */
import { useEffect } from 'react';
import './Home.scss'

const Home = () => {

useEffect(()=>{

    const svgEl = document.getElementById('animated-lines');

    const randomRange = function(min: number, max: number) {
      return(Math.random() * (max - min + 1)) + min
    };
    
    const numberOfLines = 500,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      lineDataArr: any[] = [];
    
    const createPathString = function() {
    
      let completedPath = '',
        comma = ',',
        ampl = 10; 
    
      for (let i = 0; i < numberOfLines; i++) {
    
        const path = lineDataArr[i];

        
    
        const current = {
          x: ampl * Math.sin(path.counter / path.sin),
          y: ampl * Math.cos(path.counter / path.cos)
        };

        const fix = 4
    
        const newPathSection = 'M' +
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
    
      }
    
      return completedPath;
    
    };

    const randColor =()=>{
    const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgba(${r},${g},${b}, 0.5)`;
   }
    
    const createLines = function() {
    
      const newPathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path'),
 
        minSpeed = 100,
        maxSpeed = 10;
        newPathEl.setAttribute('stroke', randColor()); 
   

      for (let i = 0; i < numberOfLines; i++) {
    
        const lineDataObj = {
          counter: randomRange(1, 500), 
          startX: randomRange(0,10),
          startY: randomRange(0,10),
          endX: window.innerWidth, 
          endY: window.innerHeight, 
          sin: randomRange(minSpeed, maxSpeed),
          cos: randomRange(minSpeed, maxSpeed),
          pointX: randomRange(0, 5),
          centerX: randomRange(0, window.innerWidth),
          centerY: randomRange(0, window.innerHeight),
        //   stroke: randColor(),
        }
    
        lineDataArr.push(lineDataObj)
    console.log(lineDataArr)
      }
    
      const animLoop = function() {
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
        <svg id="animated-lines" version="1.1" xmlns="http://www.w3.org/2000/svg" ></svg>
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

export default Home