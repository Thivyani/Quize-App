import { useEffect, useState } from "react";
import "./App.css";
import FinalPage from "./Components/FinalPage";
import QuestionsAddPage from "./Components/QuestionsAddPage";
import StartingPage from "./Components/AdminStartingPage";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");



  const [showStartingPage, setShowStartingPage] = useState(true);
  const [showQuestionsAddPage, setShowQuestionsAddPage] = useState(false);


  return (
    <>
      {showStartingPage && (
        <StartingPage
          setShowQuestionAddPage={setShowQuestionsAddPage}
          setShowStartingPage={setShowStartingPage}

          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
        />
      )}
      {showQuestionsAddPage && (
        <QuestionsAddPage
        
        />
      )}

    </>
  );
}

export default App;
