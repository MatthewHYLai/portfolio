import React, { Component, useRef, useState } from "react";

import Cover from '../components/Cover';
import { motion, useMotionValue, useTransform } from "framer-motion";

var scrolledPast = false;

// var scrollpos = $(window).scrollTop();
// var introTop = $('#intro').offset().top;
// if (scrollpos > introTop) {
//     scrolledPast = true;
// }

const pageVariants = {
    initial: {
      opacity: 0,
      y: "-10vh"
    },
    in: {
      opacity: 1,
      y: 0,
      transition:{
          duration: 0.5
      }
    },
    out: {
      opacity: 0,
      y: "-10vh"
    },
}
export const CoverContent = () => {
    const constraintsRef = useRef(null);
  
    return (
      <>
        {/* <motion.div className="cover" ref={constraintsRef}>
            <motion.div className="coverContent" drag dragConstraints={constraintsRef}>

                <h2>FRONTEND DEVELOPER</h2>
                <h1><span>M</span><span>A</span><span>T</span><span>T</span><span>H</span><span>E</span><span>W</span><span> </span><span>H</span><span> </span><span>Y</span><span> </span><span>L</span><span>A</span><span>I</span></h1>
        
            </motion.div>
        </motion.div> */}

        {/* <div className="cover">
            <div className="coverContent">

                <h2>FRONTEND DEVELOPER</h2>
                <h1><span>M</span><span>A</span><span>T</span><span>T</span><span>H</span><span>E</span><span>W</span><span> </span><span>H</span><span> </span><span>Y</span><span> </span><span>L</span><span>A</span><span>I</span></h1>
                            
            </div>
        </div> */}

        <motion.div className="indexLogoDragArea" ref={constraintsRef}>
            <motion.img className="indexLogoDrag" drag dragConstraints={constraintsRef} src="/img/logo.png" alt=""  />

        </motion.div>


      </>
    );
};

class Home extends Component { 

    render() {
        // const constraintsRef = useRef(null);

        const title = this.props.title;
        return (
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                className="indexContentWrap"
            >
                <div>
                    
                    <div className="cover">
                        <div className="coverContent">

                            <h2>FRONTEND DEVELOPER</h2>
                            <h1><span>M</span><span>A</span><span>T</span><span>T</span><span>H</span><span>E</span><span>W</span><span> </span><span>H</span><span> </span><span>Y</span><span> </span><span>L</span><span>A</span><span>I</span></h1>
                                        
                        </div>
                    </div>
                    <CoverContent/> 
                    {/* <img src="/img/logo.png" alt="" className="homeLogoImg" /> */}
                </div>
            </motion.div>
        );
    }
}
 
export default Home;