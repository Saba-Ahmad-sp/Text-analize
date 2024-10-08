import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleFiCaText = () => {
    const word = text.split(" ");

   let newText = word.map((word) => { 
        return word[0].toUpperCase() + word.substring(1); 
    }).join(" ");
    setText(newText);
  };

  const handleClearText = () => {
    let newText = "";
    setText(newText);
  }


  const handleOnChange = (event) => {
    // console.log('handle');
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  // text = "new text"; //wrong way to change state or change text in react
  //setText("Changed"); //correct way to change state.

  return (
    <>
      <div className="container">
        <div>
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              onChange={handleOnChange}
              id="exampleFormControlTextarea1"
              rows="8"
            ></textarea>
            
              <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>
                Convert to Uppercase
              </button>
              <button
                className="btn btn-primary my-3 mx-2"
                onClick={handleLoClick}
              >
                Convert to Lowercase
              </button>
              <button
                className="btn btn-primary my-3 mx-2"
                onClick={handleFiCaText}
              >
                First Letter Capital
              </button>
              <button
                className="btn btn-primary my-3 mx-2"
                onClick={handleClearText}
              >
                Clear All Text
              </button>
          
            <div className="container my-3">
              <h2>Your Text summary</h2>
              <p>
                <b>{text.split(" ").length-1} words and {text.length}  characters </b>
              </p>
              <p> <b> <i> {0.008 * text.split(" ").length} Minutes read </i> </b></p> 
              <h2>Preview</h2>
              <p>{text}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
