import { useParams } from "react-router-dom";


const BookDetail = () => {
    const {bookId} = useParams();
    console.log(bookId);
    return (
        <div>
            <h2>book detail</h2>
        </div>
    );
};

export default BookDetail;