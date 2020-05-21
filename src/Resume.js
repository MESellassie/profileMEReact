import React from "react";
import Navbar from "./Navbar";
import Container from "./Container";
import Jumbotron from "./Jumbotron";
import Row from "./Row";
import Sidebar from "./Sidebar";
import Footer from "./Footer";


function Resume(props) {
    return (
        <div>
            <Navbar />
            <Container>
                <Jumbotron>
                    <Row>
                        <Sidebar />
                        <div className="contentContainer3 col-sm-10" id="resume">
                            <h1 className="display-4">Resume</h1>
                            <p id="tagline">EXPERIENCE | YOU CAN TRUST</p>
                            <hr className="my-4" />
                            <p><a href="assets/ME-Web Developer Resume.pdf" target="_blank" id="pdfLink">Download the PDF file.</a></p>
                            <img class="" src="https://github.com/MESellassie/profileMEReact/blob/master/public/assets/resume-cover.jpg?raw=true" alt="resume" width="90%" height="90%" />
                            {props.children}
                        </div>
                    </Row>
                </Jumbotron>
            </Container>
            <Footer/>
            {props.children}
            </div>
    );

}

export default Resume;
