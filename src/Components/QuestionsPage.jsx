import React, { useEffect } from "react";
import { useState } from "react";
import Question from "./Question";

import { useStateValue } from "../ContextAPI/globalState";

const QuestionsPage = ({
  score,
  setScore,
  setShowQuestionsPage,
  setShowFinalPage
}) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const { questions } = useStateValue();

  useEffect(() => {
    if (questions[0] == undefined) {
      console.log("array log false", questions[0]);
      setLoading(true);
    } else {
      console.log("array log true", questions[0][0]);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>Not Questions</div>;
  }

  if (!loading) {
    return (
      <>
        <Question
          questionIndex={questionIndex}
          questions={questions}
          setQuestionIndex={setQuestionIndex}
          setShowQuestionsPage={setShowQuestionsPage}
          setShowFinalPage={setShowFinalPage}
          score={score}
          setScore={setScore}
        />
      </>
    );
  }
};

export default QuestionsPage;
