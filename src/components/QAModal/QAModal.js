import React, { useState } from "react";
import { QAData } from "../../data";
import "./QAModal.css";

const QAModal = () => {
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answerStatus, setAnswerStatus] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [canSelect, setCanSelect] = useState(true)
  var elements = QAData.length-2;

  // function to handle option submit
  const onSubmitHandler = () => {
    setShowCommentModal(true);
    setSubmitted(true);
    setCanSelect(false)
    if(selectedOption === QAData[questionIndex]?.question?.answer)
      setAnswerStatus("CORRECT ANSWER")
    else
      setAnswerStatus("INCORRECT ANSWER")
  };

  // function to load next question
  const onNextHandler = () => {
    setShowCommentModal(false);
    setSubmitted(false);
    setQuestionIndex(prevIndex=>prevIndex+1)
    setCanSelect(true)
    setSelectedOption("")
  };

  // function to get selected option
  const optionSelectHandler = (val) => {
    if(!canSelect)
      return;
    else {
      setSelectedOption(val)
    }
  }

  return (
    <div className="qa_panel_wrapper">
      <div className="qa_panel">
        <p className="question_title">{QAData[questionIndex]?.question?.title}</p>
        <div className="qa_panel_options_wrapper">
          <div className="qa_panel_options two-col-layout">
            <div className={selectedOption === "a"?"option1 selected":"option 1"} onClick={()=>optionSelectHandler("a")}>{QAData[questionIndex]?.a}</div>
            <div className={selectedOption === "b"?"option2 selected":"option 2"} onClick={()=>optionSelectHandler("b")}>{QAData[questionIndex]?.b}</div>
          </div>
          <div className="qa_panel_options two-col-layout">
            <div className={selectedOption === "c"?"option3 selected":"option 3"} onClick={()=>optionSelectHandler("c")}>{QAData[questionIndex]?.c}</div>
            <div className={selectedOption === "d"?"option4 selected":"option 4"} onClick={()=>optionSelectHandler("d")}>{QAData[questionIndex]?.d}</div>
          </div>
        </div>
      </div>
      {showCommentModal && (
        <div className="comment_modal_wrapper">
          <div className="comment_modal">
            <h2 className="comment_modal_heading">{answerStatus}</h2>
            <p className="comment_modal_comment">
              {QAData[questionIndex]?.question?.comment}
            </p>
          </div>
        </div>
      )}
      {!submitted && (
        <button className="submitBtn" onClick={onSubmitHandler}>
          Submit
        </button>
      )}
      {submitted && questionIndex <= elements && (
        <button className="nextBtn" onClick={onNextHandler}>
          Next
        </button>
      )}
    </div>
  );
};

export default QAModal;
