import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was Clicked");
        setText("You Have clicked on handleUpClick")
    }

    const handleOnChange = ()=>{
        console.log("on Change");
    }
    const[text, setText] = useState('Enter Text Here');
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div> 
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
        </div>
    )
}