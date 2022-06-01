import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');
    const  handleUpClick = () =>{
        console.log('UpperCase was clicked' + text);
        setText('you have clicked on uppercase button')
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Converted to UpperCase','success');
    }
    const  handleOnChange = (event) =>{
        console.log('UpperCase was Changed' );
        setText(event.target.value);
    }
    const  handleLoClick = () =>{
      console.log('UpperCase was clicked' + text);
      setText('you have clicked on uppercase button')
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert('Converted to LowerCase','success');
  }
  const  handleClearClick = () =>{
    
    
    let newText = '';
    setText(newText)
}
const handleCopy = ()=>{
  var text = document.getElementById("myBox");
  text.select();
  text.setSelectionRange(0,9999);
  navigator.clipboard.writeText(text.value);
}
const handleExtraSpace = () =>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))

}

    

    // text='this is text';//this is a wrong way to change the state
    // setText('this is the text');// this is the correct to change the state
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'#f2e5e59e':'#f2e5e59e'}}>
    <div>
      <h2> {props.heading}  </h2>    
<div className="mb-3">

<textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'white':'white',color:props.mode==='dark'?'grey':'dark'}} onChange = {handleOnChange} value={text} id="myBox" rows="5" ></textarea>
</div>
<button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to UpperCase</button>

<button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to LoweCase</button>
<button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear The text</button>
<button className='btn btn-primary mx-2' onClick={handleCopy}>Copy The text</button>
<button className='btn btn-primary mx-2' onClick={handleExtraSpace}>Remove WhiteSpace</button>
</div>
</div>
<div className='container my-3' style={{color:props.mode==='dark'?'#f2e5e59e':'#f2e5e59e'}}>
  <h1>Your text summary</h1>
  <p>{text.split(" ").length} words and  {text.length} Charaters</p>
  <p>{0.008*text.split(" ").length} minutes to read </p>
  <b> <h3><u>Preview</u></h3></b>
  <p>{text.length>0?text:'Enter something in the text box to  preview it here'}</p>
</div>
</>
  )
}
