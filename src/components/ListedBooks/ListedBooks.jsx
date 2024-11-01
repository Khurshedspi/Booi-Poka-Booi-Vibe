import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList, getStoredWishList } from "../../utility/addToDb";
import Book from "../Book/Book";

const ListedBooks = () => {
  // data rakhar jonno
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);

  //ideally we will directly get the read book list from the database

  const allBooks = useLoaderData();

  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));
    //worst way
    // console.log(storedReadList,storedReadListInt, allBooks);
    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );
    setReadList(readBookList);
  }, []);

  useEffect(() => {
    const storedWishList = getStoredWishList();
    const storedWishListInt = storedWishList.map((id) => parseInt(id));
    const wishBookList = allBooks.filter((book) =>
      storedWishListInt.includes(book.bookId)
    );
    setWishList(wishBookList);
  }, []);
  return (
    <div>
      <h3 className="text-3xl my-8">Listed Books</h3>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1">
          Click
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>

      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl">Books I Read: {readList.length}</h2>
          {readList.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl">My Wish List: {wishList.length}</h2>
          {wishList.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
