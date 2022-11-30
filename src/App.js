import './index.css';
import React from 'react';
import {useEffect} from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import useBooksContext from './components/use-custom-hooks';
function App(){
 
    const {fetchBooks}=useBooksContext(); 
    useEffect(()=>{
        fetchBooks();      
      },[])
    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList />
            <BookCreate />
        </div>
    )
}
export default App;