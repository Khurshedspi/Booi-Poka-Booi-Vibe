import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    // LDS 1: 
    const [books, setBooks] = useState([]);
    // LDS 2:
    useEffect(()=>{
fetch('./booksData.json')
.then(res => res.json())
.then(data => setBooks(data))
    }, [])
    return (
        <div>
            <h2 className="text-4xl font-bold text-center">Books</h2>
{/* LDS 3:  */}
            <div className="grid justify-items-center gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                {
                    books.map(book => <Book
                    key={book.bookId}
                    book={book}
                    ></Book>)
                }
            </div>
           
        </div>
    );
};

export default Books;

/***
 * For load data steps:
 * 1. state to store books
 * 2. useEffect
 * 3.fetch to load data
 * 4. set the data to the books state
 */