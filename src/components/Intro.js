import React, { Component } from 'react';
import $ from "jquery";
import Typed from 'typed.js';

class TypeWriter extends React.Component {
    componentDidMount() {
        const options = {
            // strings: ['Loading... ^1000 ', 'Matthew H Y Lai&#39;s Portfolio [Version 1.0.0] <br/> (c) 2019 MHYL. All rights reserved. ^1000 <br/> System(32) launch-sequence initiated. ^1000 <br/> /data.setup: <span style="color: red">mhyl.com</span> ^1000 <br/> System will launch shortly. ^500 <br/> .^500 <br/> .^500 <br/> .^500 <br/> Welcome and hello ^500 <br/> My name is Matthew Lai ^500 <br/> And this is my portfolio. ^500 '],
            strings: ['Loading... ^1000 ', 'Matthew H Y Lai&#39;s Portfolio [Version 1.0.0] <br/> (c) 2020 MHYL. All rights reserved. ^1000 <br/> System(32) launch-sequence initiated. ^1000 <br/> /data.setup: <span style="color: red">mhyl.com</span> ^1000 <br/> System will launch shortly. ^500 <br/> .^500 <br/> .^500 <br/> .^500 '],
            typeSpeed: 30,
            backSpeed: 20,
            backDelay: 1000,
            startDelay: 400,
            showCursor: true,
            cursorChar: '|',
            // smartBackspace: true,
            preStringTyped: function() {
                // if (firstRun == false) {
                //     $('body').removeClass(schemes[currentStyle - 1]);
                //     $('body').addClass(schemes[currentStyle]);
                // }
                // currentStyle++;
                // if (currentStyle == 7) {
                //     currentStyle = 0;
                // }
                // firstRun = false;
            },
            onComplete: function() {
                $("#typeWriter").addClass("slideOutUp animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){  
                    setTimeout(() => {
                        // $("#typeWriter").addClass("slideOutUp animated").hide();
                    }, 500);
                    sessionStorage.setItem("visited", "true");

                });
            }
        };

        this.typed = new Typed(this.el, options);
    }
  
    render() {

        return(
            <div id="typeWriter">
                <div className="text">
                    <span className="typeWriterContent" ref={(el) => { this.el = el; }}></span>
                </div>
                <div className="skipBtn">
                    <a href="" onClick={(e) => {e.preventDefault()}}>Skip &gt;</a>
                </div>
            </div>
        )
    }
}
class Test extends React.Component {
    render() {

        return(
            <div id=""></div>
        )
    }
}

class Intro extends Component {
    render() {
        // const { characterData, removeCharacter } = this.props
        var intro;
        if (sessionStorage.getItem("visited")) {
            intro = <Test />
            
        }else{
            intro = <TypeWriter />
        }

        return (
            intro
        )
    }
}

export default Intro