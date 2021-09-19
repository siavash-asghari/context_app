import React, { useState, useContext } from 'react'
import { BookContext } from '../contexts/BookContext'

const BookForm = () => {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const { addBook } = useContext(BookContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(title, author)
        setTitle('')
        setAuthor('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                required
                placeholder="نام کتاب"
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                value={author}
                required
                placeholder="نام نویسنده"
                onChange={(e) => setAuthor(e.target.value)}
            />
            <input
                type="submit"
                value="ثبت کتاب"

            />
        </form>
    )
}

export default BookForm


