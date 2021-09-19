import React, {useContext} from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {

    const {books} = useContext(BookContext)

    return (
        <div className="navbar">
            <h1>لیست کتاب های من</h1>
            <p>اکنون شما {books.length} مطالعه رای مطالعه دارید. </p>
        </div>
    )
}

export default Navbar;


