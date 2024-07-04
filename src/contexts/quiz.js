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