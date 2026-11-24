import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

const BookDetail = () => {
  const { addToCart, cartCount } = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  const book = location.state?.book;
  if (!book) { navigate("/"); return null; }
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <nav className="bg-[#232f3e] text-white px-5 py-3">
        <div className="max-w-[1500px] mx-auto flex gap-6 text-sm overflow-x-auto whitespace-nowrap">
          <Link to="/" className="font-bold">☰ All</Link><span>Best Sellers</span><span>New Releases</span><span>Academics</span><span>Fiction</span><span>Children</span>
        </div>
      </nav>
      <main className="max-w-[1500px] mx-auto p-4">
        <Link to="/" className="text-sm text-orange-600 hover:underline mb-4 inline-block">← Back to all books</Link>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2 flex flex-col items-center">
              <div className="w-64 h-96 bg-gray-100 rounded flex items-center justify-center mb-4">
                <img src={book.imageUrl} alt={book.title} className="h-full max-w-full object-contain" onError={(e)=>{e.currentTarget.src="https://placehold.co/300x400?text=Book"}} />
              </div>
              <p className="text-xs text-gray-500 text-center">{book.edition} · {book.language}</p>
            </div>
            <div className="w-full md:w-1/2 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <h1 className="text-xl md:text-2xl font-bold text-gray-900 line-clamp-2">{book.title}</h1>
                <button onClick={()=>navigate("/cart")} className="text-xs text-gray-500 hover:text-orange-600 underline flex items-center gap-1">🛒 View Cart ({cartCount})</button>
              </div>
              <p className="text-sm text-gray-600 mb-4">{book.publisher} · {book.categories}</p>
              <div className="flex items-center gap-2 mb-4"><span className="text-yellow-500 text-lg">★★★★★</span><span className="text-sm font-semibold text-gray-900">{book.userRating}</span><span className="text-xs text-gray-500">({book.pageCount} pages)</span></div>
              <div className="mb-6"><div className="flex items-center gap-2 mb-1"><span className="text-2xl font-bold text-gray-900">₹{book.offerMrp.toFixed(2)}</span><span className="text-lg text-gray-400 line-through">₹{book.mrp.toFixed(2)}</span><span className="text-sm font-semibold text-green-700">{book.offerPercentage}% off</span></div><p className="text-xs text-gray-500">Inclusive of all taxes</p></div>
              <button onClick={()=>addToCart(book)} className="w-full bg-[#FF9900] hover:bg-[#e68a00] text-black font-semibold py-4 rounded-lg text-lg transition-shadow hover:shadow-md">Add to Cart</button>
              <button onClick={()=>{}} className="w-full mt-3 border border-gray-300 text-gray-700 font-medium py-3 rounded-lg hover:bg-gray-50">Buy Now</button>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Product Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div><p className="text-gray-500 mb-1">Publisher</p><p className="text-gray-900">{book.publisher}</p></div>
              <div><p className="text-gray-500 mb-1">Category</p><p className="text-gray-900">{book.categories}</p></div>
              <div><p className="text-gray-500 mb-1">Language</p><p className="text-gray-900">{book.language}</p></div>
              <div><p className="text-gray-500 mb-1">ISBN</p><p className="text-gray-900">{book.isbn}</p></div>
              <div><p className="text-gray-500 mb-1">Edition</p><p className="text-gray-900">{book.edition}</p></div>
              <div><p className="text-gray-500 mb-1">Pages</p><p className="text-gray-900">{book.pageCount}</p></div>
              <div><p className="text-gray-500 mb-1">Publication Date</p><p className="text-gray-900">{book.publicationDate}</p></div>
              <div><p className="text-gray-500 mb-1">Dimensions</p><p className="text-gray-900">{book.dimensions}</p></div>
              <div><p className="text-gray-500 mb-1">Weight</p><p className="text-gray-900">{book.weightGrams} g</p></div>
            </div>
            <div className="mt-6"><h3 className="font-bold text-gray-900 mb-2">Description</h3><p className="text-gray-700 leading-relaxed">{book.description}</p></div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookDetail;