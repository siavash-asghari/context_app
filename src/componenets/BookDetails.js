import React,{useContext} from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetails = (props) => {

    const {removeBook} = useContext(BookContext)

    return (
        <li onClick={() => removeBook(props.book.id)}>
            <div>{props.book.title}</div>
            <div>{props.book.author}</div>
        </li>
    )
}

export default BookDetails;


