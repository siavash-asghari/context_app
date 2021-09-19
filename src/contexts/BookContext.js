import React, {createContext, useState} from 'react'
import {v4 as uuid} from 'uuid';



export const BookContext = createContext()


const BookContextProvider = (props) => {


    const [books, setBooks] = useState([
        

    ])

    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    }


    const addBook = (title, author) => {
        setBooks([...books, {title: title, author: author, id: uuid()}])
    }


    return (
       <BookContext.Provider value={{books, removeBook, addBook}}>
           {props.children}
       </BookContext.Provider>
    )
}

export default BookContextProvider;





