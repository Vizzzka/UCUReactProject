import React from "react";


export default class FeedbackForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            feedback: ''
        }

        this.feedbackRef = React.createRef();
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.onAdd(this.state.feedback);

        this.setState({ feedback: '' });
        this.feedbackRef.current.focus();
    }

    handleChange(e) {
        this.setState({
            feedback: e.target.value
        });
    }

    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <input ref={this.feedbackRef} placeholder="Add feedback" value={this.state.feedback} onChange={(e) => this.handleChange(e)}/>
                <input type="submit" value="+"/>
            </form>
        );
    }

}