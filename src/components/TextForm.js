import React, {useState} from 'react';


export default function TextForm(props) {
    const handleUpClick = ()=>{
      // console.log("Uppercase was clicked" + text);
      let newText = text.toUpperCase();
      setText(newText)
      props.showAlert(" Converted to UpperCase!","success")
    }
    const handleLoClick = ()=>{
      // console.log("Uppercase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert(" Converted to LowerCase!","success")
    }
    const handleClearClick = ()=>{
      let newText = ('');
      setText(newText)
      props.showAlert(" Text Cleared!","success")
    }
    
    // const handleUndoClick = ()=>{
    //   // console.log("Uppercase was clicked" + text);
    //   if(text > 0){
    //     text = text - 1;
    //     setText(text)
    //   }
    // }
    const handleOnChange = (event)=>{
      // console.log("On Change");
      setText(event.target.value);
    }

    //----Copy Text-----

    const handleCopy=()=>{
      // var text = document.getElementById("myBox");
      // text.select();
      navigator.clipboard.writeText(text);
      // document.getSelection().removeAllRanges();
      props.showAlert(" Copied to Clipboard!","success")
    }
    
    //----Remove Extra Spaces
    const handleExtraSpaces=()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert(" Extra Spaces removed!","success")
    }

    const [text, setText] = useState('');
    // text ="new text";  ///wrong way to change the state
    // setText("new text");  //Correct way to change the state
  return (
    <>
     {/* double curly braces is one for enablejavascript and second one is for object */}
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}> 
      <h2 className='mb-2'>{props.heading }</h2>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
      </div>  
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>                                   
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>                                   
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>                                   
      {/* <button className="btn btn-primary mx-1" onClick={handleUndoClick}>Undo Text</button>                                    */}
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>                                   
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>                                   
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} <b>words</b> and {text.length} <b>characters</b></p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Nothing to preview'}</p>
    </div>
    </>
  )
}
