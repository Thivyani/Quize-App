import React from "react";
import { useStateValue } from "../ContextAPI/globalState";
import Card from "./Card";

export default function QuestionsAddPage() {
  const [question, setQuestion] = React.useState("");
  const { questions, setGlobalArray } = useStateValue();
  const [formFields, setFormFields] = React.useState([
    { answerText: "", correctAnswer: false },
    { answerText: "", correctAnswer: false },
    { answerText: "", correctAnswer: false },
    { answerText: "", correctAnswer: false }
  ]);

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };

  const handleCheckedChange = (event, index) => {
    let data = [...formFields];
    for (let i = 0; i < formFields.length; i++) {
      data[i][event.target.name] = false;
      setFormFields(data);
    }

    data[index][event.target.name] = true;
    setFormFields(data);
  };

  const submit = (e) => {
    e.preventDefault();
    if (question != "") {
      let Array = [];
      Array.push({ questionText: question, answers: formFields });
      console.warn("array", Array);

      // set global array
      setGlobalArray(Array);
      alert('Question Added Successfully')
    } else {
      alert("please input question");
    }
  };

  return (
    <Card>
      <h2>QuestionsAddPage</h2>
      <input
        name="questionText"
        placeholder="questionText"
        onChange={(event) => setQuestion(event.target.value)}
        value={question}
      />

      {formFields.map((form, index) => {
        return (
          <div key={index}>
            <input
              name="answerText"
              placeholder="answerText"
              onChange={(event) => handleFormChange(event, index)}
              value={form.answerText}
            />

            <input
              type="radio"
              name="correctAnswer"
              value={form.correctAnswer}
              checked={form.correctAnswer}
              onChange={(event) => handleCheckedChange(event, index)}
            />
          </div>
        );
      })}

      <button className="start_btn" onClick={submit}>
        Submit
      </button>
    </Card>
  );
}
