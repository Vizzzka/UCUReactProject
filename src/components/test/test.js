import React from "react";
import TestsList from "../tests_list/tests_list";

const Test = ({ test, upScore, downScore}) => (
    <div>
        <h3>{test.name}</h3>
        <div>{test.description}</div>
        <div>
            <button id='like-button' onClick={() => upScore(test.id)}>Like</button>
            <button id='dislike-button' onClick={() => downScore(test.id)}>Dislike</button>
        </div>
    </div>
)
export default Test;