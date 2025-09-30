import React from "react";
import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <div className="card h-100">
      <img
        src={book.image}
        className="card-img-top"
        alt={book.title}
        style={{ height: "250px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text">
          {book.author} — {book.year}
        </p>
        <p className="card-text text-truncate">{book.description}</p>
        <Link to={`/books/${book.id}`} className="btn btn-primary mt-auto">
          Detail
        </Link>
      </div>
    </div>
  );
}
