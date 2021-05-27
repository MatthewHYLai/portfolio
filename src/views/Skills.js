import React, { Component } from "react";
import { motion, Frame } from "framer-motion"

const pageVariants = {
    initial: {
      opacity: 0,
      x: "100vw"
    },
    in: {
      opacity: 1,
      x: 0
    },
    out: {
      opacity: 0,
      x: "100vw"
    },
}

class Skills extends Component {
    render() {

        const title = this.props.title;

        const logoAnimation = {
            // scale: [1, 2, 2, 1, 1],
            // rotate: [0, 0, 270, 270, 0],
            // borderRadius: ["20%", "20%", "50%", "50%", "20%"]
            opacity: [0, 1, 0, 1, 0]
        }

        return (
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
            >
                <div className="contentOuterWrap">
                    <div className="contentWrap">
                        {/* <div id="particles" className="particles"></div> */}
                        <div className="content">
                            <h2>{title}</h2>
                            {/* <div class="skills1 skillsMarquee">
                                <span>HTML</span>&#183;
                                <span>CSS</span>&#183;
                                <span>JavaScript</span>&#183;
                                <span>Jquery</span>&#183;
                                <span>Git</span>&#183;
                                <img src="/img/logo_xd.png" />
                            </div>
                            <div class="skills2 skillsMarquee">
                                <span>React</span>
                                <span>SASS</span>
                                <span>JSON</span>
                                <span>Wordpress</span>
                                <span>npm</span>

                            </div>
                            <div class="skills3 skillsMarquee">
                                <span>Photoshop</span>
                                <span>Lightroom</span>
                                <span>Premiere Pro</span>
                                <span>XD</span>
                            </div> */}

                            <div>


                            </div>


                        </div>
                    </div>

                </div>
            </motion.div>
        );
    }
}
 
export default Skills;