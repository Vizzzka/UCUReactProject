import React from "react";
import NavBar from "../navbar/navbar";
import Footer from "../footer/footer";
import './contacts.css';

export default class Contacts extends React.Component {
    render() {
        return (
            <main className='main-page'>
                <NavBar/>
                <div className='container'> Contact me in Telegram Vizzka and in Steam исламский чёрт</div>
                <Footer/>
            </main>
        );
    }
}