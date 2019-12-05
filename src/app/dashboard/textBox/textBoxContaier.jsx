import React from "react";
import '../styles/textBox.css';

const TextBox=(props)=> {

    const divStyle = {
        "marginTop": "10px"
    }

    const inputStyle = {
        "marginRight": "10px"
    }

    function deleteTextBox(){
        props.onRemove(props.ind);
    }

    const { value,ind } = props;

    return (
      <div style={divStyle} key={`${ind}`}>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" 
        />
        
        <input 
          style={inputStyle} 
          type="text" 
          value={value} 
          onChange={e=>props.onTextChange(props.ind,e)} 
          placeholder="Enter Text Here" 
        />
        
        <button onClick={deleteTextBox} className="btn" type='button'>
          <i className="fa fa-trash" /> 
          Trash 
        </button>
      </div>
    );
}

export default TextBox;
