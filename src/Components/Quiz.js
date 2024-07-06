import React, {useContext} from "react";
import { QuizContext } from "../contexts/quiz";
import Question from "./Question";

const Quiz =() => {
    const [quizState,dispatch] = useContext(QuizContext);
    console.log("quizState",quizState)

    return (
        // <div>Hello World</div>
        <div className="quiz">


            <div>
                <div className="score">Question {quizState.currentQuestionIndex +1}/{quizState.questions.length}</div>
            <Question />

            
            </div>

        </div>
    );


};

export default Quiz;