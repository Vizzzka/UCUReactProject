import React from "react";
import TestsList from '../tests_list/tests_list';
import './toplist.css';

export default class TopList extends React.Component {

    render() {
        var items = this.props.tests;
        items.sort((a, b) => (b.score - a.score));
        items = items.slice(0, 3);
        console.log(this.props.tests)
        return (
            <div className='top-list-container'>{
                    items.map((test) => (
                        <div className='image-test'>
                            <img src={test.image} alt='image-test'/>
                            <div className="image-description">
                                <p>{test.name}</p>
                            </div>
                        </div>))
            }
            </div>
        )
    }
}