import React, { Fragment } from "react";
import './table.css';

const TextBox = (props) => {

    function deleteRow(e,index){
        props.delete(index);
    }

    function editRow(e,index){
        props.edit(index);
    }

    function createBody(){
        let form;
        if(props.data === null){
        form = "";
    }
    else{
        form = props.data.map((keys,index)=>{
            const arr = Object.keys(keys).map(i => keys[i])
              return(
                <Fragment>
                  <tr>
                    {arr.map((value,index)=>{
                    return(
                      <td key={index}> {value} </td>
                    );
                })}
                    <td>
                      <button onClick={e=>{deleteRow(e,index)}} type="button">Del</button> 
                      <button onClick={e=>{editRow(e,index)}} type="button">Edit</button> 
                    </td>
                    
                  </tr>
                </Fragment>
            )
        })
    }
          return form;
    }

    function createHead(){
        if(props.data.length === 0 ){}
        else{
            const key = Object.keys(props.data[0]);
    const form = key.map((value,index) => {
        return <th key={index}> {value} </th>
      })
      form[4] = <th>Action</th>
      return form
        }
        
}

    return (
      <div>
        <table>
          <thead>
            <tr>
              {createHead()}
            </tr>
          </thead>
          <tbody>
            {createBody()}
          </tbody>
        </table>
      </div>
    );
}

export default TextBox;
