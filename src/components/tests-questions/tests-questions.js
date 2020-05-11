import React from "react";
import NavBar from "../navbar/navbar";
import Footer from "../footer/footer";
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
    }

    next_question(id) {
        console.log(this.state.active_question)
        if (this.state.active_question != this.get_test(this.state.active_test_id).questions.length - 1) {
            var someProperty = {...this.state}
            someProperty.active_question += 1;
            this.setState(someProperty);
        }
    }

    get_test(id) {
        for (var t of this.state.tests) {
            if (t.id == id) {
                console.log(t)
                return t;
            }
        }
    }

    render() {
        this.state.active_test_id = this.props.match.params.id;
        return (
            <main className='main-page'>
                <NavBar/>
                <div className='container'>
                    <div className='process'>{this.state.active_question + 1} of
                        {this.get_test(this.state.active_test_id).questions.length}</div>
                    <h3 className='description-question'>
                        {this.get_test(this.state.active_test_id).description}
                    </h3>
                    <div className='question-text'>
                        {this.get_test(this.state.active_test_id).questions[this.state.active_question]}
                    </div>
                    <form className='answers'> {
                        this.get_test(this.state.active_test_id).answers.map((answer) => (
                            <div>
                                <label htmlFor={answer}>{answer}
                                <input type="radio" name="question" value={answer}/>
                                </label>
                            </div>
                        ))
                    }
                    </form>
                    <button onClick={this.next_question}> Next question </button>
                </div>
                <Footer/>
            </main>
        )
    }
}