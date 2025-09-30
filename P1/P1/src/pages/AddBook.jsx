import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddBook({ onAddBook }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    author: "",
    year: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // bikin id random sederhana
    const newBook = { ...form, id: Date.now() };
    onAddBook(newBook);
    navigate("/books"); // balik ke daftar buku
  };

  return (
    <div className="container">
      <h2 className="mb-4">Tambah Buku Baru</h2>
      <form onSubmit={handleSubmit} className="col-md-6">
        <div className="mb-3">
          <label className="form-label">Judul</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Penulis</label>
          <input
            type="text"
            className="form-control"
            name="author"
            value={form.author}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Tahun</label>
          <input
            type="number"
            className="form-control"
            name="year"
            value={form.year}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Deskripsi</label>
          <textarea
            className="form-control"
            name="description"
            value={form.description}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">URL Gambar</label>
          <input
            type="text"
            className="form-control"
            name="image"
            value={form.image}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Simpan
        </button>
      </form>
    </div>
  );
}
