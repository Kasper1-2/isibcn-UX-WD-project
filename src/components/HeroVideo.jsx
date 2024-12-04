import video from "../assets/Video.mp4"
import "./HeroVideo.css";
import arrowSvg from "../assets/ARROW.svg"

function HeroVideo() {
    const handleScroll = () => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
      // nice job on the scroll button! 
    };
  
    return (
      <div className="hero-container">

        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
          {/* The video is a nice touch! We have never used it before, nice job by reading the documentation and implementing it!*/}
        </video>

        <button className="scroll-button" onClick={handleScroll}>
          <img src={arrowSvg} alt="Scroll down" />
        </button>
      </div>
    );
  };
  
  export default HeroVideo;