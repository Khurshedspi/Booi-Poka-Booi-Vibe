import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToStoredWishList } from "../../utility/addToDb";


const BookDetail = () => {
    const {bookId} = useParams();
    const id = parseInt(bookId)
    const data = useLoaderData();
    const book = data.find(book => book.bookId === id)
    const {bookId: currentBookId, image} = book;

    // mrS1
    const handleMarkAsRead = (id) =>{
        /**
         * 1. understand what to store or save => bookId
         * 2. where to store: database
         * 3. array, list, collection:
         * 4. Check: if the book is already in the readList
         * 5. If not, then add the book to the list
         * 6. if yes, do not  add the book
         */

        addToStoredReadList(id);

    }

    const handleAddToWishList = (id) => {
        addToStoredWishList(id)
    }
    return (
        <div className="my-12">
            <h2>Book Details: {bookId}</h2>
            <img className="w-36 " src={image} alt="" />
            <br />
            <button onClick={() =>handleMarkAsRead(bookId)} className="btn btn-outline mr-4 btn-accent">Mark As Read</button>
            <button onClick={()=> handleAddToWishList(bookId)} className="btn btn-accent">Add To Wishlist</button>
        </div>
    );
};

export default BookDetail;