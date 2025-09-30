import { Routes, Route, Link } from "react-router-dom";
import Contacts from "/src/pages/contacts.jsx";
import Team from "/src/pages/team.jsx";
import Books from "/src/pages/books.jsx";
import books from "/src/utils/books.js";
import BookDetails from "/src/pages/bookdetails.jsx";
import AddBook from "/src/pages/addbook.jsx";
import { useState, useEffect } from "react";

function App() {
  const [bookList, setBookList] = useState(() => {
    const saved = localStorage.getItem("bookList");
    return saved ? JSON.parse(saved) : books;
  });

  useEffect(() => {
    localStorage.setItem("bookList", JSON.stringify(bookList));
  }, [bookList]);

  const handleAddBook = (newBook) => {
    setBookList([...bookList, newBook]);
  };

  return (
    <div className="container">
      {/* Navbar */}
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0">
          <Link
            to="/"
            className="d-inline-flex link-body-emphasis text-decoration-none"
          >
            <h1>BookStore</h1>
          </Link>
        </div>
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link to="/" className="nav-link px-2">
              Home
            </Link>
          </li>
          <li>
            <Link to="/books" className="nav-link px-2">
              Book
            </Link>
          </li>
          <li>
            <Link to="/team" className="nav-link px-2">
              Team
            </Link>
          </li>
          <li>
            <Link to="/contacts" className="nav-link px-2">
              Contacts
            </Link>
          </li>
        </ul>
        <div className="col-md-3 text-end">
          <button type="button" className="btn btn-outline-primary me-2">
            Login
          </button>
          <button type="button" className="btn btn-primary">
            Register
          </button>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books books={bookList} />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/books/:id" element={<BookDetails books={bookList} />} />
        <Route
          path="/books/add"
          element={<AddBook onAddBook={handleAddBook} />}
        />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <>
      <div className="container">
        {" "}
        <div className="container my-5">
          {" "}
          <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            {" "}
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
              {" "}
              <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
                They Both Die at The End
              </h1>{" "}
              <p className="lead">
                On September 5, a little after midnight, Death-Cast calls Mateo
                Torrez and Rufus Emeterio to give them some bad news: They’re
                going to die today. Mateo and Rufus are total strangers, but,
                for different reasons, they’re both looking to make a new friend
                on their End Day. The good news: There’s an app for that. It’s
                called the Last Friend, and through it, Rufus and Mateo are
                about to meet up for one last great adventure—to live a lifetime
                in a single day. In the tradition of Before I Fall and If I
                Stay, They Both Die at the End is a tour de force from acclaimed
                author Adam Silvera, whose debut, More Happy Than Not, the New
                York Times called “profound.”
              </p>{" "}
              <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                {" "}
                <button
                  type="button"
                  className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
                >
                  View
                </button>{" "}
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-lg px-4"
                >
                  Other Books
                </button>{" "}
              </div>{" "}
            </div>{" "}
            <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
              {" "}
              <img
                className="rounded-lg-3"
                src="https://images.squarespace-cdn.com/content/v1/52bd29c9e4b013dbd6fc9a1c/1538363327567-K59UBCLIG5LTACAKL8OG/they+both+die+at+the+end+UK.jpg?format=750w"
                alt=""
                height="360"
              />{" "}
            </div>{" "}
          </div>{" "}
          <div></div>
        </div>
        <section className="py-5 text-center container">
          {" "}
          <div className="row py-lg-5">
            {" "}
            <div className="col-lg-6 col-md-8 mx-auto">
              {" "}
              <h1 className="fw-light">Best Selling Books</h1>{" "}
              <p className="lead text-body-secondary">
                Check out our newest best selling collection of books here.
              </p>{" "}
              <p>
                {" "}
                <a href="#" className="btn btn-primary my-2">
                  View
                </a>{" "}
                <a href="#" className="btn btn-secondary my-2">
                  Other Books
                </a>{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </section>
        <div className="album py-5 bg-body-tertiary">
          {" "}
          <div className="container">
            {" "}
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {" "}
              <div className="col">
                {" "}
                <div className="card shadow-sm">
                  {" "}
                  <svg
                    aria-label="Placeholder: Book Name"
                    className="bd-placeholder-img card-img-top"
                    height="225"
                    preserveAspectRatio="xMidYMid slice"
                    role="img"
                    width="100%"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Book Name
                    </text>
                  </svg>{" "}
                  <div className="card-body">
                    {" "}
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>{" "}
                    <div className="d-flex justify-content-between align-items-center">
                      {" "}
                      <div className="btn-group">
                        {" "}
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>{" "}
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>{" "}
                      </div>{" "}
                      <small className="text-body-secondary">9 mins</small>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col">
                {" "}
                <div className="card shadow-sm">
                  {" "}
                  <svg
                    aria-label="Placeholder: Book Name"
                    className="bd-placeholder-img card-img-top"
                    height="225"
                    preserveAspectRatio="xMidYMid slice"
                    role="img"
                    width="100%"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Book Name
                    </text>
                  </svg>{" "}
                  <div className="card-body">
                    {" "}
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>{" "}
                    <div className="d-flex justify-content-between align-items-center">
                      {" "}
                      <div className="btn-group">
                        {" "}
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>{" "}
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>{" "}
                      </div>{" "}
                      <small className="text-body-secondary">9 mins</small>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col">
                {" "}
                <div className="card shadow-sm">
                  {" "}
                  <svg
                    aria-label="Placeholder: Book Name"
                    className="bd-placeholder-img card-img-top"
                    height="225"
                    preserveAspectRatio="xMidYMid slice"
                    role="img"
                    width="100%"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Book Name
                    </text>
                  </svg>{" "}
                  <div className="card-body">
                    {" "}
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>{" "}
                    <div className="d-flex justify-content-between align-items-center">
                      {" "}
                      <div className="btn-group">
                        {" "}
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>{" "}
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>{" "}
                      </div>{" "}
                      <small className="text-body-secondary">9 mins</small>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col">
                {" "}
                <div className="card shadow-sm">
                  {" "}
                  <svg
                    aria-label="Placeholder: Book Name"
                    className="bd-placeholder-img card-img-top"
                    height="225"
                    preserveAspectRatio="xMidYMid slice"
                    role="img"
                    width="100%"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Book Name
                    </text>
                  </svg>{" "}
                  <div className="card-body">
                    {" "}
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>{" "}
                    <div className="d-flex justify-content-between align-items-center">
                      {" "}
                      <div className="btn-group">
                        {" "}
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>{" "}
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>{" "}
                      </div>{" "}
                      <small className="text-body-secondary">9 mins</small>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col">
                {" "}
                <div className="card shadow-sm">
                  {" "}
                  <svg
                    aria-label="Placeholder: Book Name"
                    className="bd-placeholder-img card-img-top"
                    height="225"
                    preserveAspectRatio="xMidYMid slice"
                    role="img"
                    width="100%"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Book Name
                    </text>
                  </svg>{" "}
                  <div className="card-body">
                    {" "}
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>{" "}
                    <div className="d-flex justify-content-between align-items-center">
                      {" "}
                      <div className="btn-group">
                        {" "}
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>{" "}
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>{" "}
                      </div>{" "}
                      <small className="text-body-secondary">9 mins</small>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col">
                {" "}
                <div className="card shadow-sm">
                  {" "}
                  <svg
                    aria-label="Placeholder: Book Name"
                    className="bd-placeholder-img card-img-top"
                    height="225"
                    preserveAspectRatio="xMidYMid slice"
                    role="img"
                    width="100%"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Book Name
                    </text>
                  </svg>{" "}
                  <div className="card-body">
                    {" "}
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>{" "}
                    <div className="d-flex justify-content-between align-items-center">
                      {" "}
                      <div className="btn-group">
                        {" "}
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>{" "}
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>{" "}
                      </div>{" "}
                      <small className="text-body-secondary">9 mins</small>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col">
                {" "}
                <div className="card shadow-sm">
                  {" "}
                  <svg
                    aria-label="Placeholder: Book Name"
                    className="bd-placeholder-img card-img-top"
                    height="225"
                    preserveAspectRatio="xMidYMid slice"
                    role="img"
                    width="100%"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Book Name
                    </text>
                  </svg>{" "}
                  <div className="card-body">
                    {" "}
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>{" "}
                    <div className="d-flex justify-content-between align-items-center">
                      {" "}
                      <div className="btn-group">
                        {" "}
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>{" "}
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>{" "}
                      </div>{" "}
                      <small className="text-body-secondary">9 mins</small>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col">
                {" "}
                <div className="card shadow-sm">
                  {" "}
                  <svg
                    aria-label="Placeholder: Book Name"
                    className="bd-placeholder-img card-img-top"
                    height="225"
                    preserveAspectRatio="xMidYMid slice"
                    role="img"
                    width="100%"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Book Name
                    </text>
                  </svg>{" "}
                  <div className="card-body">
                    {" "}
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>{" "}
                    <div className="d-flex justify-content-between align-items-center">
                      {" "}
                      <div className="btn-group">
                        {" "}
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>{" "}
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>{" "}
                      </div>{" "}
                      <small className="text-body-secondary">9 mins</small>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col">
                {" "}
                <div className="card shadow-sm">
                  {" "}
                  <svg
                    aria-label="Placeholder: Book Name"
                    className="bd-placeholder-img card-img-top"
                    height="225"
                    preserveAspectRatio="xMidYMid slice"
                    role="img"
                    width="100%"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Book Name
                    </text>
                  </svg>{" "}
                  <div className="card-body">
                    {" "}
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>{" "}
                    <div className="d-flex justify-content-between align-items-center">
                      {" "}
                      <div className="btn-group">
                        {" "}
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>{" "}
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>{" "}
                      </div>{" "}
                      <small className="text-body-secondary">9 mins</small>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      </div>
    </>
  );
}

export default App;
