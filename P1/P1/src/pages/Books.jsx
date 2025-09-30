import React from "react";
import { Link } from "react-router-dom";
import BookCard from "../components/bookcard";

export default function Books({ books }) {
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Daftar Buku</h2>
        <Link to="/books/add" className="btn btn-success">
          + Tambah Buku Baru
        </Link>
      </div>
      <div className="row">
        {books.map((book) => (
          <div className="col-md-4 mb-4" key={book.id}>
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </div>
  );
}
