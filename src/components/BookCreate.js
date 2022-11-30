import React from "react";
import {useState} from 'react';
import useBooksContext from "./use-custom-hooks";
function BookCreate(){
    const [title,setTitle]=useState('');
    const {onCreate}=useBooksContext();
    function onInputChange(event){
        setTitle(event.target.value);
    }
    function handleFormSubmit(event){
        event.preventDefault();
        onCreate(title);
        setTitle('');
    }
    return (
        <div className="book-create">
            <h3>Add a Book</h3>
            <form onSubmit={handleFormSubmit}>
                <label>Title</label>
                <input value={title} className="input" onChange={onInputChange} />
                <button className="button">Create</button>
            </form>
        </div>
    )
}
export default BookCreate;