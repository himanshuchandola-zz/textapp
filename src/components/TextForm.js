import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase", "success");
    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase", "success");
    }

    const handleClearClick = ()=>{
        let newText = '';
        setText(newText)
        props.showAlert("Text Has been Cleared", "success");
    }

    const capitalize = () => {
        
        let firstchar = text.charAt(0); 
        let newText= firstchar.toUpperCase(); 
        setText(newText+text.slice(1)); 
        props.showAlert("First letter of Text is Changed to Capital Letter", "success");

    }

    const handleTextToSpeech = () => {
        var msg = new SpeechSynthesisUtterance();
        msg.text = text;     //  text what you written
        window.speechSynthesis.speak(msg);
        props.showAlert("Text Converted to Audio", "success");
      };
    
    const handleCopy =() =>{
      console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard", "success");
      }

    const handleRwClick = () => {
    let newtext = text.toLowerCase();
    newtext = newtext.replaceAll(".","");
    newtext = newtext.trim().split(" ");
    let input = prompt("Enter the word you want to remove : ");
    if (input != null) {
      input = input.toLowerCase();
      while (newtext.includes(input)) {
        let index = newtext.indexOf(input);
        newtext.splice(index, 1);
      }
      newtext = newtext.join(" ");
      newtext = newtext.replace(newtext.charAt(0),newtext.charAt(0).toUpperCase());
      setText(newtext);
    } else {
      alert("You entered nothing 😑");
    }
  };

  const handleReverseClick = () =>{
    let newText = text.split(" ").reverse( ).join(" ");
    setText(newText)
    props.showAlert("Text is Reversed", "success");
}

    const handleOnChange = (event)=>{
       // console.log("on Change");
        setText(event.target.value);
    }
    const[text, setText] = useState('');
    return (
        <>
        <div ClassName="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'black':'white',
          color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
                </div> 
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={capitalize}>Capitalize First Text</button>
                <button className="btn btn-primary mx-1" onClick={handleTextToSpeech}>Text to Audio</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text to Clipboard</button>
                <button className="btn btn-primary mx-1" onClick={handleRwClick}>Remove Word from Text</button>
                <button className="btn btn-primary gy-1" onClick={handleReverseClick}>Reverse Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to Read the above Text</p>
            <h2>Preview Text</h2>
            <p>{text.length>0?text:"Enter something in textbox above to Preview here"}</p>
        </div>
        </>
    )
}
