import React from "react";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import "../App.css";

function Footer() {
    return (
        <footer className="footer">
            <p className="footerLogos">
                <a href="https://github.com/lydiakim10"><img class="logos" src={github} alt="github" title="github"></img></a>
                <a href="www.linkedin.com/in/lydia-kim-9606a91b3"><img class="logos" src={linkedin} alt="linkedin" title="linkedin"></img></a>
                <a href="www.instagram.com"><img class="logos" src={instagram} alt="instagram" title="instagram"></img></a>
            </p>
        </footer>
    )
};

export default Footer;