import React, { Component, useState } from "react";
import { motion } from "framer-motion";
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(far, faEnvelope, faPhoneAlt)

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


class Contacts extends Component {

    render() {

        const title = this.props.title;

        return (
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                className="contactContentWrap contentOuterWrap"
            >
                <div className="contentWrap">
                    {/* <div id="particles" className="particles"></div> */}
                    <h2>{title}</h2>

                    <div className="content">
                        <div className="contactWrap">
                            <FontAwesomeIcon icon="envelope" />
                            <p><a href="mailto:matthewlai26714889@gmail.com" className="clickItem">matthewlai26714889@gmail.com</a></p>
                        </div>
                        <div className="contactWrap">
                            <FontAwesomeIcon icon="phone-alt" />
                            <p>9609 3720</p>
                        </div>

                        <img src="/img/graphic_contact.png" alt="" />



                    </div>

                </div>


            </motion.div>
        );
    }
}
 
export default Contacts;