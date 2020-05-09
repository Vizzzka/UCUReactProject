import React from "react";
import './tests_list.css';
import Test from '../test/test';


export default class TestsList extends React.Component {
    render() {
        return (
            <div className='tеst-list-container'>
                {
                    this.props.tests.map((test) => (
                        <Test test={test} upScore={(id) => this.props.upScore(id)}
                              downScore={(id) => this.props.downScore(id)}/>
                              )
                    )
                }
            </div>
        );
    }
}
