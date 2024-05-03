import React from 'react'
import  { useEffect } from 'react';

export default function Front(){
    useEffect(() => {
        const crsr = document.querySelector("#cursor");
        const blur = document.querySelector("#cursor-blur");

        const moveCursor = (event) => {
            crsr.style.left = event.clientX + "px";
            crsr.style.top = event.clientY + "px";
            blur.style.left = event.clientX - 80 + "px";
            blur.style.top = event.clientY - 80 + "px";
        };

        document.addEventListener("mousemove", moveCursor);

        return () => {
            document.removeEventListener("mousemove", moveCursor);
        };
    }, []);
    return(
        <div>
            <div id="cursor"></div>
            <div id="cursor-blur"></div>

            <div id="main">
                <div id="black">
            </div>

            <img id="vipsimg" src="https://imgs.search.brave.com/nqwh3nMOHOyLi-sZfc0qQPIvqR6qExG3L2DVgKKnCys/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYmxhY2stY29s/b3ItYmFja2dyb3Vu/ZC11dWVnczN0c21y/djA4amVuLmpwZw
" alt=""/>
            
            
            <div id="maintext">
                <h1 id="title"><b>WELCOME TO VIPS STUDENT ERP</b></h1>
            </div>
            </div>

                <div id="page2">
                    <div id="timg">
                        <img className="himg" src="https://timess3spore.s3.amazonaws.com/ndata/media/Counsellor/CollegeImage/2023/05/16/1684217674.jpg" alt=""/>
                        <h1 id="timgh1">WELCOME TO THE ERP,WHERE YOUR STUDENT LIFE GETS <b>COLORED</b> ! </h1>
                        <img className="himg" src="https://engineering.vips.edu/wp-content/uploads/2023/04/library-1.png" alt=""/>
                </div>
            </div>
        </div>
    )
}






