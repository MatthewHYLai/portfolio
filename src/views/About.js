import React, { Component, useState } from "react";
import { motion } from "framer-motion";

const pageVariants = {
    initial: {
      opacity: 0,
      x: "10vw"
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
      x: "10vw"
    },
}

const ratingBarVariants = {
    initial: {  width: "0" },
    animate: {  
        width: "100%", 
        transition: { duration: 0.5, delay: 1 }
    }
}

const imgVariants = {
    initial: { opacity: 0 },
    animate: {  
        opacity: 1, 
        transition: { duration: 0.5, delay: 1 }
    }
}

const SkillWrap1 = () => {

    return (
        <div className="skillWrap">
            <img src="/img/logo_html.png" alt="" />
            <div className="skillRating">
                <div className="ratingBar">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={ratingBarVariants}

                    ></motion.div>
                </div>
                <span>90%</span>
            </div>
        </div>
    )
}
const SkillWrap2 = () => {

    return (
        <div className="skillWrap">
            <img src="/img/logo_css.png" alt="" />
            <div className="skillRating">
                <div className="ratingBar">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={ratingBarVariants}

                    ></motion.div>
                </div>
                <span>90%</span>
            </div>
        </div>
    )
}
const SkillWrap3 = () => {

    return (
        <div className="skillWrap">
            <img src="/img/logo_sass.png" alt="" />
            <div className="skillRating">
                <div className="ratingBar">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={ratingBarVariants}

                    ></motion.div>
                </div>
                <span>80%</span>
            </div>
        </div>
    )
}
const SkillWrap4 = () => {

    return (
        <div className="skillWrap">
            <img src="/img/logo_js.png" alt="" />
            <div className="skillRating">
                <div className="ratingBar">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={ratingBarVariants}

                    ></motion.div>
                </div>
                <span>80%</span>
            </div>
        </div>
    )
}
const SkillWrap5 = () => {

    return (
        <div className="skillWrap">
            <img src="/img/logo_jquery.png" alt="" />
            <div className="skillRating">
                <div className="ratingBar">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={ratingBarVariants}

                    ></motion.div>
                </div>
                <span>80%</span>
            </div>
        </div>
    )
}
const SkillWrap6 = () => {

    return (
        <div className="skillWrap">
            <img src="/img/logo_react.png" alt="" />
            <div className="skillRating">
                <div className="ratingBar">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={ratingBarVariants}

                    ></motion.div>
                </div>
                <span>50%</span>
            </div>
        </div>
    )
}
const SkillWrap7 = () => {

    return (
        <div className="skillWrap">
            <img src="/img/logo_wp.png" alt="" />
            <div className="skillRating">
                <div className="ratingBar">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={ratingBarVariants}

                    ></motion.div>
                </div>
                <span>70%</span>
            </div>
        </div>
    )
}

const Skills = () => {
    const [count, setCount] = useState(0);
    return (
        <div className="skillsWrap">
            <SkillWrap1 key={count} />
            <SkillWrap2 key={count} />
            <SkillWrap3 key={count} />
            <SkillWrap4 key={count} />
            <SkillWrap5 key={count} />
            <SkillWrap6 key={count} />
            <SkillWrap7 key={count} />

        </div>
      );
}

class About extends Component {

    render() {

        const title = this.props.title;

        return (
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                className="aboutContentWrap contentOuterWrap"
            >
                <div className="contentWrap">
                    {/* <div id="particles" className="particles"></div> */}
                    <h2>{title}</h2>

                    <div className="content">
                        <div className="textWrap">

                            <p>
                                A self-motivated and creative person, enjoys problem solving with my skills and experience as a web developer.
                            </p>
                            <p>
                                I graduated in Information Technology in Organisations from the University of Southampton in 2018, where I acquired the fundamentals skills as a web developer. After my graduation, I came back to Hong Kong and I am currently working as a Front-end web developer at Media Exploror, a digital agency, gaining experience and further develop my skills as a developer.
                            </p>
                            <p>
                                I am keen to learn and explore new technology, with the aim of contributing productively to a team in an exciting and innovative company. 
                            </p>
                            <motion.img 
                                initial="initial"
                                animate="animate"
                                variants={imgVariants}
                                src="/img/graphic_about.png" alt="" />
                        </div>
                        <Skills />



                    </div>

                </div>


            </motion.div>
        );
    }
}
 
export default About;