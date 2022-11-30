import React from 'react';
import axios from 'axios';
import { createContext,useState } from "react";

const BookContext=createContext();

function Provider({children}){
    const [books,setBooks]=useState([]);

    const fetchBooks=async ()=>{
        const response=await axios.get('http://localhost:3001/books');
        setBooks(response.data);
        
    }
   

    function deleteById(id){
        const newBooks=books.filter((book)=>{
            return book.id!==id;
        })
        setBooks(newBooks);
    }

    function onCreate(title){
        const updatedBooks=[...books,{id:Math.round(Math.random()*9999),title}];
        console.log('book created')
        setBooks(updatedBooks);
    }

    const editBookById= (id,newTitle)=>
        {
            // const response=await axios.put()
            const newBooks=books.map((book)=>{
                if(book.id === id)
                    {
                        return {...book,title:newTitle}
                    }
            })
            setBooks(newBooks);
        }
    
    const valueToShare={
        books,
        fetchBooks,
        deleteById,
        onCreate,
        editBookById
    }
   
    return (
        <BookContext.Provider value={valueToShare}>
            {children}
        </BookContext.Provider>
    )
}

export {Provider}
export default BookContext;