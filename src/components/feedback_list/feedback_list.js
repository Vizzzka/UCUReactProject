import React from "react";
import Test from "../test/test";


export default class FeedbackList extends React.Component {
    render() {
        return (
            <div className='feedback-container'>
                {
                    this.props.feedbacks.map((feedback) => (
                        <div className="feedback">{feedback}</div>
                        )
                    )
                }
            </div>
        );
    }
}
