import React, { useState } from "react";
import "./ShortRead.css";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { ShortReadData } from "../../data";

const ShortRead = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [currentRead, setCurrentRead] = useState("");

  // function to load previous day reads
  const handlePrev = () => {
    if (pageIndex === 0) return;
    else {
      setPageIndex((prevIndex) => prevIndex - 1);
      setCurrentRead("");
    }
  };

  /// function to load next day reads
  const handleNext = () => {
    if (pageIndex === 1) return;
    else {
      setPageIndex((prevIndex) => prevIndex + 1);
      setCurrentRead("");
    }
  };

  return (
    <div className="short_read_wrapper">
      <div className="short_read_header">
        <FaCaretLeft onClick={handlePrev} />
        <h2>Day {pageIndex + 1} of Productivity</h2>
        <FaCaretRight onClick={handleNext} />
      </div>
      <div className="black_div">Learn</div>
      <div className="short_read_options">
        {ShortReadData[pageIndex]?.map((element) => {
          return (
            <div
              className="short_read_option"
              onClick={() => {
                setCurrentRead(element);
              }}
            >
              <h2>{element}</h2>
            </div>
          );
        })}
      </div>
      <div className="black_div">Do</div>
      {currentRead !== "" && <div className="short_read_desc">
        <h2>{currentRead}</h2>
      </div>}
    </div>
  );
};

export default ShortRead;
