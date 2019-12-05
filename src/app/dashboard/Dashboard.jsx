import React, { useState } from "react";
import { Header, Footer } from "./common";
import DashboardRoutes from "./DashboardRoutes";
import TextBox from "./textBox/textBoxContaier";

import "./styles/dashboard.scss";

const DashboardContainer = () => {

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
    <div className={DashboardContainer.styles.root}>
      <Header />

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
      })}

      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" 
      />

      <div className={DashboardContainer.styles.content}>
        <DashboardRoutes />
      </div>
      <Footer />
    </div>
  );
};

DashboardContainer.styles = {
  root: "nos-ds__dashboard-root",
  content: "nos-ds__dashboard-content"
};

export default DashboardContainer;