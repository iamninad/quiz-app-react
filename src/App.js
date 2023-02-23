import "./App.css";
import React, {useState} from 'react'
import QAModal from "./components/QAModal/QAModal";
import ShortRead from "./components/ShortRead/ShortRead";

function App() {

  const [currentPage, setCurrentPage] = useState("sr");

  return (
    <div className="App">
    <header className="common_header">
      <p onClick={()=>setCurrentPage("sr")}>ShortRead</p>
      <p onClick={()=>setCurrentPage("qa")}>Question & Answers</p>
    </header>
      {currentPage === "sr" && <ShortRead />}
      {currentPage === "qa" && <QAModal />}
    </div>
  );
}

export default App;
