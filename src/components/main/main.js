import React from 'react';
import './main.css';
import NavBar from '../navbar/navbar';
import TestList from '../tests_list/tests_list';
import TopList from "../toplist/toplist";
import Footer from "../footer/footer";
import Jung from "./Jung.jpg";
import Freud from "./Freud.jpg";
import Luscher from "./Luscher.jpg";
import Bubbles from '../bubbles/bubbles';
import SearchPlugin from "../search_plugin/search_plugin";

export default class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            header: 'Personality tests list',
            tests: [
                {
                    id: 1,
                    name: 'Jung test',
                    href: 'test/1',
                    image: Jung,
                    description: 'The Jung personality test measures your preferences for dealing with and relating to people, processing information, making decisions and organizing your life. Its results give you a good overview of your personality and behavior. You can then see how your Jung types match up with a potential employer\'s requirements.',
                    score: 5
                },
                {
                    id: 2,
                    name: 'Freud test',
                    href: 'test/2',
                    image: Freud,
                    description: 'The Freudian Personality Style Test is intended for educational and recreational purposes only. ... According to Freud, our libido (sexual energy) goes through several stages of development: oral, anal, phallic, latency and genital stages. Each of the stages is important for proper individual psychosexual development.',
                    score: 69
                },
                {
                    id: 3,
                    name: 'Luscher test',
                    href: 'test/3',
                    image: Luscher,
                    description: 'The Luscher Color Test, despite the remarkable ease and speed with which it can be administered, is a "deep" psychological test, developed for the use of psychiatrists, psychologists, physicians and those who are professionally involved with the conscious and unconscious characteristics and motivations of others',
                    score: 3
                }
            ]
        }
        this.upScore = this.upScore.bind(this);
        this.downScore = this.downScore.bind(this);
        this.filterList = this.filterList.bind(this);
    }

    filterList(text){
        var filteredList = this.state.tests.filter(function(item){
            return item.name.toLowerCase().search(text.toLowerCase())!== -1;
        });
        // should fix it because it will take away a few items and it is not possible to restore them
        // it can be easily fixed
        // this.setState({tests: filteredList});
    }

    upScore(testId) {
        this.setState({
            tests: this.state.tests.map((test) => (test.id === testId ? {
                id: test.id, name: test.name, image: test.image, description: test.description,
                score: test.score + 1
            } : test)),
        });
        // console.log(this.state.tests[0].score)
    }

    downScore(testId) {
        this.setState({
            tests: this.state.tests.map((test) => (test.id === testId ? {
                id: test.id, name: test.name, image: test.image, description: test.description,
                score: test.score - 1
            } : test)),
        });
        // console.log(this.state.tests[0].score)
    }

    render() {
        return (
            <main className='main-page'>
                <NavBar/>
                <div className='container'>
                    <h1 className='test-list-header'>{this.state.header}</h1>
                    <SearchPlugin filter={this.filterList} />
                    <TopList tests={this.state.tests}/>
                    <TestList tests={this.state.tests}
                              upScore={this.upScore} downScore={this.downScore}/>
                </div>
                <Footer/>
            </main>
        )
    }

}
