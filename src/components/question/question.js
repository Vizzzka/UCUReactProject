import React from "react";
import './question.css';

export default class Question extends React.Component {
    render() {
        return (
            <div>
                <div className='process'>{this.props.active_question + 1} of {this.props.number_of_questions}</div>
                <h3 className='description-question'> {this.props.test.description} </h3>
                <div className='question-text'> {this.props.test.questions[this.props.active_question]} </div>
                <form className='answers'> {
                    this.props.test.answers.map((answer) => (
                        <div>
                            <label htmlFor={answer}>{answer}
                                <input type="radio" name="question" value={answer}/>
                            </label>
                        </div>
                    ))}
                </form>
                <button onClick={this.props.next_question}> Next question </button>
            </div>
        );
    }
}