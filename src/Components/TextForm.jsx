import React, { useState } from "react";

function TextForm(props) {
  const handleUpClick = () => {
    let newtext = Text.toUpperCase();
    setText(newtext);
  };

  const HandleOnChange = () => {
    setText(event.target.value);
  };

  const handlelowcase = () => {
    let tolow = Text.toLocaleLowerCase();
    setText(tolow);
  };

  const handleClear = ()=>{
    
    let newtext = ''
    setText(newtext)
  }





  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.Text = Text;
    window.speechSynthesis.speak(msg);
  }
  
  
  <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>

















  const [Text, setText] = useState(" ");

  return (
    <>
    <div className="container">
    <h1>{props.heading} </h1>

<div className="mb-3">
  <textarea
    class="form-control"
    value={Text}
    onChange={HandleOnChange}
    id="myBox"
    rows="12"
  ></textarea>
</div>

<button onClick={handleUpClick} className="btn btn-primary">
  Convert to uppercase
</button>
<br />
<br />
<button onClick={handlelowcase} className="btn btn-primary m-2" value={Text}>
  Change to lowercase
</button>
<button onClick={handleClear} className="btn btn-primary" value={Text}>
  Clear
</button>



    </div>
      
      <div className="container">
        <h1>your summary</h1>

    <p>{Text.split(" ").length} Words And {Text.length} Character</p>
    <p>{0.008 *Text.split(" ").length } minute for read </p>

    <h4>previvew  <br />
       <p> {Text}</p>
        </h4>
      </div>    
    </>
  );
}

export default TextForm;
