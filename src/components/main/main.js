import React from 'react';
import './main.css';
import NavBar from '../navbar/navbar';
import TestList from '../tests_list/tests_list';
import TopList from "../toplist/toplist";
import Footer from "../footer/footer";
import Jung from "./Jung.jpg";
import Freud from "./Freud.jpg";
import Luscher from "./Luscher.jpg";
import FeedbackForm from "../feedback_form/feedback_form";
import Bubbles from '../bubbles/bubbles';
import FeedbackList from '../feedback_list/feedback_list';
import SearchPlugin from "../search_plugin/search_plugin";

export default class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            header: 'Personality tests list',
            tests: [],
            feedbacks: []
        }
        this.upScore = this.upScore.bind(this);
        this.filterList = this.filterList.bind(this);
        this.addFeedback = this.addFeedback.bind(this);
    }

    componentDidMount() {
        fetch('/tests').then(resp => {
            return resp.json();
        }).then(body => {

            this.setState({
                tests: body
            })
        });

        fetch('/feedbacks').then(resp => {
            return resp.json();
        }).then(body => {
            this.setState({
                feedbacks: body
            })
        });
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
        var newTests = this.state.tests.map((test) => (test.id === testId ? {
            id: test.id, name: test.name, image: test.image, description: test.description,
            score: test.score + 1
        } : test));
        var newTest = newTests.find(test => test.id === testId);

        fetch(`/tests/${testId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTest),
        }).then((e) => {
            return e.json()
            }).then(SavedTest => {
                this.setState((state) => ({
                    tests: state.tests.map((test) => (SavedTest.id === test.id ? newTest : test) )
                }))
        })
    }

    addFeedback(text) {
        var feedbacks = this.state.feedbacks;
        feedbacks.push(text);
        var newFeedbacks = feedbacks;
        console.log(newFeedbacks)
        fetch('/feedbacks', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedbacks),
        }).then((e) => {
            return e.json()
        }).then(SavedFeedbacks => {
            //console.log(SavedFeedbacks)
            this.setState({
                feedbacks: newFeedbacks
            })
        })

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
                    <FeedbackForm onAdd={(e) => this.addFeedback(e)}/>
                    <FeedbackList feedbacks={this.state.feedbacks}/>
                </div>
                <Footer/>
            </main>
        )
    }

}
