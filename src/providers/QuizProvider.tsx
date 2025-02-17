import { PropsWithChildren, useContext, useState } from "react";
import { createContext } from "react";
import questions from "../questions";

type QuizContext 

export const QuizContext = createContext({});

export default function QuizProvider({ children }: PropsWithChildren) {
  const [questionIndex, setQuestionIndex] = useState(1);
  const question = questions[questionIndex];

  return (
    <QuizContext.Provider value={{ question, questionIndex }}>
      {children}
    </QuizContext.Provider>
  );
}


// Custom Hook
export const useQuizContext = () => {
  return useContext(QuizContext);
};
