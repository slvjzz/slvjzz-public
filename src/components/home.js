import { useState, useEffect, useRef } from "react";
import { containerstyle, name, enterStyle} from "./getclass";
import About from "./about";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css"


export default function Home() {

    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (isClicked) {        
            setTimeout(() => {
            window.location.href = "/about";
        }, 500);
        }
    }, [isClicked, navigate]);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    const handleClick = () => {
        setIsHovered(false);
        setIsClicked(true);
    };

    return (
        <div className={name}>
            <a to="#" onClick={handleClick} style={{ cursor: "pointer" }}>
                <img
                    src="basskey.png"
                    alt="Bass Key"
                    title="Let's go"
                    className={`image ${isClicked ? "rotate" : ""} ${isHovered ? "enlarged" : ""}`}
                    style={enterStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
            </a>
        </div>
      );
}