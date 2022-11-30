import React, { useContext } from "react";
import {useState} from 'react'
import useBooksContext from "./use-custom-hooks";
import BookEdit from "./BookEdit";

function BookShow({book}){
    const [showEdit,setShowEdit]=useState(false);
    const {deleteById}=useBooksContext();
    function handleDeleteClick(){
        deleteById(book.id);
    }
    function handleEditClick(){
        setShowEdit(!showEdit);
    }
    function handleSubmit(){
        setShowEdit(false);
    }
    let content=<h2>{book.title}</h2>
    if(showEdit)
        {
            content=<BookEdit onSubmit={handleSubmit} book={book}/>
        }
    return (
        <div className="book-show">
            <img src={`https://picsum.photos/seed/${book.id}300/200`}/>
            {content}
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>Edit</button>
                <button className="delete" onClick={handleDeleteClick}>Delete</button>
            </div>
        </div>
    )
}
export default BookShow;