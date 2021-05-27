import React, { Component } from "react";
import { motion } from "framer-motion"; 
import Slider from "react-slick";
 
const pageVariants = {
    initial: {
      opacity: 0,
      x: "-10vw"
    },
    in: {
      opacity: 1,
      x: 0,
      transition:{
          duration: 0.5
      }
    },
    out: {
      opacity: 0,
      x: "-10vw"
    },
}

const ratingBarVariants = {
    initial: {  width: "0" },
    animate: {  
        width: "100%", 
        transition: { duration: 0.5, delay: 1 }
    }
}

class IccSlider extends Component {
    render() {
      var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <Slider {...settings}>
            <div>
                <img src="/img/projects/icc/index.jpg" />
            </div>
            <div>
                <img src="/img/projects/icc/news.jpg" />

            </div>
            <div>
                <img src="/img/projects/icc/visitor_form.jpg" />
            </div>
        </Slider>
      );
    }
}

class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 300,
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 1,
            adaptiveHeight: true
        };
        return (
            <div className="projectsWrap">
                <div className="projectWrap">
                    <a href="https://mfp.mpfa.org.hk/mobile/eng/mpp_index.jsp" target="_blank" className="project clickItem" style={{ backgroundImage: "url(/img/projects/mpfa/cover.jpg)"}}>
                        <div className="projectTextWrap">

                            <div>
                                <span>WCAG</span>
                            </div>
                            <h3>MPF Fund Platform (Mobile)</h3>

                        </div>
                    </a>
                </div>
                <div className="projectWrap">
                    <a href="http://www.claptech.hk/" target="_blank" className="project clickItem" style={{ backgroundImage: "url(/img/projects/claptech/cover.jpg)"}}>
                        <div className="projectTextWrap">
                            <div>
                                <span>Responsive</span>
                                <span>Wordpress</span>
                            </div>
                            <h3>CLAP-TECH</h3>

                        </div>

                    </a>
                </div>
                <div className="projectWrap">
                    <a className="project projectFancyLink iccFancyLink clickItem"  href="https://shkp-icc.com/eng/main/index.html" style={{ backgroundImage: "url(/img/projects/icc/cover.jpg)"}}>
                    {/* <a className="project projectFancyLink iccFancyLink"  href="javascript:void(0)" data-fancybox data-src="#iccFancy" style={{ backgroundImage: "url(/img/projects/icc/cover.jpg)"}}> */}
                        <div className="projectTextWrap">
                            <div>
                                <span>WCAG</span>
                                <span>Responsive</span>
                                <span>Ajax</span>
                            </div>
                            <h3>ICC</h3>

                        </div>
                    </a>
                </div>
                <div className="projectWrap">
                    <a href="https://www.chuhai.edu.hk/eng/index.html" target="_blank" className="project clickItem" style={{ backgroundImage: "url(/img/projects/chuhai/cover.jpg)"}}>
                        <div className="projectTextWrap">
                            <div>
                                <span>Responsive</span>
                                <span>Wordpress</span>
                            </div>
                            <h3>Chu Hai College</h3>

                        </div>

                    </a>
                </div>
                <div className="projectWrap">
                    <a className="project projectFancyLink vwalkFancyLink clickItem"  href="javascript:void(0)" style={{ backgroundImage: "url(/img/projects/vwalk/cover.jpg)"}}>
                        <div className="projectTextWrap">
                            <div>
                                <span>Ajax</span>
                            </div>
                            <h3>V Walk Outdoor Display</h3>

                        </div>

                    </a>
                </div>
                <div className="projectWrap">
                    <a href="https://ccsg.hku.hk/" target="_blank" className="project clickItem" style={{ backgroundImage: "url(/img/projects/ccsg/cover.jpg)"}}>
                        <div className="projectTextWrap">
                            <div>
                                <span>Responsive</span>
                                <span>Wordpress</span>
                            </div>
                            <h3>CCSG HkU</h3>

                        </div>

                    </a>
                </div>

                <div className="projectFancy" id="iccFancy">
                    <IccSlider />
                </div>
                {/* <div className="projectWrap">
                    <div className="project" style={{ backgroundImage: "url(/img/projects/hcode/cover.jpg)"}}>
                        <div>
                            <span>Responsive</span>
                        </div>
                        <h3>H Code</h3>

                    </div>
                </div> */}
            </div>
        );
    }
}

class Projects extends Component {
    render() {

        const title = this.props.title;

        return (
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                className="projectContentWrap contentOuterWrap"
            >
                <div className="contentWrap">
                    {/* <div id="particles" className="particles"></div> */}
                    <h2>{title}</h2>

                    <div className="content">
                        <SimpleSlider/>

                    </div>

                </div>


            </motion.div>
        );
    }
}
 
export default Projects;