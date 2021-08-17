import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClearClick = ()=>{
        let newText = '';
        setText(newText)
    }

    const capitalize = () => {
        
        let firstchar = text.charAt(0); 
        let newText= firstchar.toUpperCase(); 
        setText(newText+text.slice(1)); 

    }

    const handleTextToSpeech = () => {
        var msg = new SpeechSynthesisUtterance();
        msg.text = text;     //  text what you written
        window.speechSynthesis.speak(msg);
      };
    
    const handleOnChange = (event)=>{
       // console.log("on Change");
        setText(event.target.value);
    }
    const[text, setText] = useState('');
    return (
        <>
        <div ClassName="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div> 
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={capitalize}>Capitalize First Text</button>
                <button className="btn btn-primary mx-2" onClick={handleTextToSpeech}>Text to Audio</button>
        </div>
        <div className="container my-3">
            <h2>Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to Read the above Text</p>
            <h2>Preview Text</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
