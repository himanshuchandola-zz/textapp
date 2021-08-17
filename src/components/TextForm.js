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


    const handleOnChange = (event)=>{
       // console.log("on Change");
        setText(event.target.value);
    }
    const[text, setText] = useState('Enter Text Here');
    return (
        <>
        <div ClassName="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div> 
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>

        </div>
        <div className="container my-3">
            <h1>Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to Read the above Text</p>
            <h2>Preview Text</h2>
            <p>{text}</p>
        </div>
        </>
    )
}