import React from "react";
import TestsList from "../tests_list/tests_list";

const Test = ({ test, upScore, downScore}) => (
    <div>
        <h3>{test.name}</h3>
        <div>{test.description}</div>
        <div>
            <button id='like-button' onClick={() => upScore(test.id)}>Like {test.score}</button>
            <form action={test.href}>
                <button type="submit">Go</button>
            </form>
        </div>
    </div>
)
export default Test;