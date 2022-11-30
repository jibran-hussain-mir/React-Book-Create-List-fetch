import React from "react";
import {useState} from 'react';
import useBooksContext from "./use-custom-hooks";

function BookEdit({book,onSubmit}){
    const [title,setTitle]=useState(book.title);
    const {editBookById}=useBooksContext();
    function handleChange(event){
        setTitle(event.target.value);
    }
    function handleSubmit(event){
        event.preventDefault();
        onSubmit();
        editBookById(book.id,title);
    }
    return (
        <form className="book-edit" onSubmit={handleSubmit}>
            <label>Title</label>
            <input className="input" value={title} onChange={handleChange} />
            <button className="button is-primary">Save</button>
    </form>
    )
}
export default BookEdit;