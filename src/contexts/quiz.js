import {useReducer} from 'react';
import { createContext } from 'react';

const initialState = {
    currentQuestionIndex: 0
};



const reducer = (state, action) => {
  if (action.type === "NEXT_QUESTION"){
        const showResults = state.currentQuestionIndex === state.questions.length-1;
        const currentQuestionIndex = showResults 
        ? state.currentQuestionIndex 
        : state.currentQuestionIndex +1;
        return {...state, currentQuestionIndex};
    }
};

export const QuizContext = createContext();

export const QuizProvider = () => {
    const value = useReducer(reducer, initialState);
    console.log("state",value);
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>

};