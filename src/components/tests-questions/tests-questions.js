import React from "react";
import NavBar from "../navbar/navbar";
import Footer from "../footer/footer";
import Question from "../question/question";
import './tests-questions.css';

export default class TestsQuestions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active_test_id: 1,
            active_question: 0,
            tests: [
                {
                    id: 1,
                    description: 'How can you say about these questions',
                    questions: ['I like flowers', 'I like my mom', 'I like dogs'],
                    answers: ['Totally agree', 'Agree', 'Disagree', 'Totally disagree']
                },
                {
                    id: 2,
                    description: 'How can you say about these questions',
                    questions: ['I like cats', 'I like math', 'I like to do nothing'],
                    answers: ['Totally agree', 'Agree', 'Disagree', 'Totally disagree']
                },
                {
                    id: 3,
                    description: 'How can you say about these questions',
                    questions: ['I am confident', 'I have a complex', 'I am afraid'],
                    answers: ['Totally agree', 'Agree', 'Disagree', 'Totally disagree']
                }
            ]
        }
        this.next_question = this.next_question.bind(this);
        this.get_test = this.get_test.bind(this);
        this.get_num_of_questions = this.get_num_of_questions.bind(this);
    }

    next_question() {
        if (this.state.active_question != this.get_num_of_questions() - 1) {
            var someProperty = {...this.state}
            someProperty.active_question += 1;
            this.setState(someProperty);
        }
    }

    get_num_of_questions() {
        return this.get_test(this.state.active_test_id).questions.length;
    }
    get_test() {
        for (var t of this.state.tests)
            if (t.id == this.state.active_test_id)
                return t;
    }

    render() {
        this.state.active_test_id = this.props.match.params.id;
        return (
            <main className='main-page'>
                <NavBar/>
                <div className='container'>
                    <Question active_question={this.state.active_question}
                              number_of_questions={this.get_num_of_questions()}
                              test={this.get_test()} next_question={this.next_question}/>
                </div>
                <Footer/>
            </main>
        )
    }
}