import { useState } from 'react';
import { BsPlusSquare } from 'react-icons/bs'
import { CgRemoveR } from 'react-icons/cg'

import logo from './logo.svg';
import './App.css';

const App = () => {
  const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);

    // handle input change
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };
    
    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };
    
    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, { firstName: "", lastName: "" }]);
    };

  return (
    <div className='add-remove-input-field-container'>
        {   inputList.map((x, i) => {
                return (
                    <div className="box">
                        <input name="firstName" value={x.firstName} onChange={e => handleInputChange(e, i)} />
                        
                        <input className="ml10" name="lastName" value={x.lastName} onChange={e => handleInputChange(e, i)} />

                        <div className="btn-box" >
                            { inputList.length !== 1 &&  
                                <CgRemoveR onClick={() => handleRemoveClick(i)} className="btn btn-error" /> }
                            { inputList.length - 1 === i &&  
                                <BsPlusSquare onClick={handleAddClick} className='btn btn-info' /> }
                        </div>
                    </div>
                );
            })}

        <div style={{ marginTop: 20 }}> {JSON.stringify(inputList)} </div>
    </div>
    
  );
}

export default App;
