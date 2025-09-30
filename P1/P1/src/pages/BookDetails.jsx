// src/pages/BookDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

export default function BookDetail({ books }) {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return (
      <div className="container">
        <h2>Buku tidak ditemukan</h2>
        <Link to="/books" className="btn btn-secondary mt-3">
          Kembali
        </Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>{book.title}</h2>
      <img
        src={book.image}
        alt={book.title}
        className="img-fluid mb-3"
        style={{ maxHeight: "400px", objectFit: "cover" }}
      />
      <p>
        <strong>Author:</strong> {book.author}
      </p>
      <p>
        <strong>Tahun:</strong> {book.year}
      </p>
      <p>{book.description}</p>
      <Link to="/books" className="btn btn-secondary mt-3">
        Kembali
      </Link>
    </div>
  );
}
