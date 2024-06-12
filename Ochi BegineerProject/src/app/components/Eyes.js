"user client";

import React, { useEffect, useState } from "react";

function Eyes() {
    const[rotate, setrotate] = useState(0);
    
    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            let mousex = e.clientX;
            let mousey = e.clientY;
            let delx = mousex - window.innerWidth/2;
            let dely = mousey - window.innerHeight/2;

            var angle = Math.atan2(dely,delx)*(180/Math.PI);
            setrotate(angle-180);
        })
    });
  return (
    <div className="w-full h-screen eyes overflow-hidden">
      <div className='reletive w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
        <div className="absolute pt-[50%] left-1/2 flex gap-10 -translate-x-[50%] -translate-y-[50%]">
          <div className="w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex items-center justify-center">
            <div className="relative w-2/3 h-2/3 rounded-full bg-black">
              <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className="absolute line w-full h-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                <div className="w-10 h-10 rounded-full bg-zinc-100 "></div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex items-center justify-center">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
              <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className="absolute line w-full h-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                <div className="w-10 h-10 rounded-full bg-zinc-100 "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
