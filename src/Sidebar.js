import React from "react";

function Sidebar(props) {

    return (
        <div className="col-sm-2 shadow sidebar">
            <ul className="nav flex-column">
                <li className="nav-item text-center">
                    <a className="nav-link aboutMe" href="/">ABOUT ME</a>
                </li>
                <li className="nav-item text-center">
                    <a className="nav-link portfolio" href="/portfolio">PORTFOLIO</a>
                </li>
                <li className="nav-item text-center">
                    <a className="nav-link portfolio" href="/resume">RESUME</a>
                </li>
                <br />

                <li className="text-center" id="socialIcon">
                    <a href="https://www.linkedin.com/in/micah-evans-79076335/" target="_blank">
                        <img src="https://github.com/MESellassie/profilemereact/blob/master/public/assets/icons8-linkedin-50-white.png?raw=true" width="40" height="40" alt="LinkedIn Icon"></img>
                    </a>
                </li>
                <li className="text-center" id="socialIcon">
                    <a href="https://github.com/MESellassie" target="_blank">
                        <img src="https://github.com/MESellassie/profilemereact/blob/master/public/assets/icons8-github-48-white.png?raw=true" width="40" height="40" alt="GitHub Icon"></img>
                    </a>
                </li>
            </ul>
            <br/>
            <br/>
            {props.children}
        </div>
    );
}

export default Sidebar;