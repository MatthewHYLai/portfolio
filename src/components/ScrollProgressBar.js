import React, { Component } from "react";
import $ from "jquery";

class ScrollProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: 0
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollProgress);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollProgress);
  }

  scrollProgress = () => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = `${scrollPx / winHeightPx * 100}%`;


    this.setState({
      scrolled: scrolled
    });
  };

  render() {
    const progressContainerStyle = {
    //   background: "#f8bbd0",
    //   boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
      height: "2px",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      zIndex: 10
    };

    const progressBarStyle = {
      height: "2px",
      background: "black",
      width: this.state.scrolled
    }; 
    

    return (
        <div className="progress-container" style={progressContainerStyle}>
            <div className="progress-bar" style={progressBarStyle} />
        </div>
    );
  }
}

export default ScrollProgressBar;
