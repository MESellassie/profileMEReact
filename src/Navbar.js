import React from "react";


function Navbar(props) {

    return (

        <div className="navbar navbar-light bg-dark">
            <a className="navbar-brand text-white" id="meLogo" href="/">
                <img src="https://github.com/MESellassie/profilemereact/blob/master/public/assets/meProfile-logo.png?raw=true" width="50" height="50" className="d-inline-block align-top" alt=""/>
                Profile
            </a>
            {props.children}
        </div>

    );
}

export default Navbar;