import React from "react";
import NavBar from "../navbar/navbar";
import Footer from "../footer/footer";
import './about.css';

export default class About extends React.Component {
    render() {
        return (
            <main className='main-page'>
                <NavBar/>
                <div className='container'> This site is about personality tests bla-bla</div>
                <Footer/>
            </main>
        );
    }
}