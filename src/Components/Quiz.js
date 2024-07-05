import React, {useContext} from "react";
import { QuizContext } from "../contexts/quiz";

const Quiz =() => {
    const [quizState,dispatch] = useContext(QuizContext);
    console.log("quizState",quizState)

    return (
        <div>Hello World</div>
    );


};

export default Quiz;