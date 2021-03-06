import React, { useState } from "react";
import TextBox from "../common/components/textBox";


function textBoxContainer() {

    const btnStyle = {
        "padding": "5px 10px",
        "marginTop": "10px"
    }

    const [textBox, setTextBox] = useState([{ value: null }]);

    function removeTextBox(id) {
        const val = [...textBox];
        val.splice(id, 1);
        setTextBox(val);
    }

    function addTextBox() {
        const values = [...textBox];
        values.push({ value: null });
        setTextBox(values);
    }

    function onTextBoxChange(i, event) {
        const values = [...textBox];
        values[i].value = event.target.value;
        setTextBox(values);
    }

    return (
      <div>
        <button
          onClick={addTextBox}
          className="btn"
          style={btnStyle}
          type='button'>
          <i
            className="fa fa-plus-square"
          />
          Add
        </button>

        {textBox.map((text_box, index) => {
          return (
            <TextBox
              ind={index}
              value={text_box.value}
              onTextChange={onTextBoxChange}
              onRemove={removeTextBox}
            />
          );
         })
        }

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </div>
    );
};

export default textBoxContainer;