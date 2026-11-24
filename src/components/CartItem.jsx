import React from "react";
import { useCart } from "../context/CartContext";

const CartItem = ({ book }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4 flex flex-col md:flex-row gap-4 items-start">
      {/* Image */}
      <div className="w-24 h-32 flex-shrink-0 bg-gray-100 rounded flex items-center justify-center">
        <img
          src={book.imageUrl}
          alt={book.title}
          className="h-full max-w-full object-contain"
          onError={(e) => {
            e.currentTarget.src =
              "https://placehold.co/300x400?text=Book";
          }}
        />
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-semibold text-gray-900 line-clamp-2 text-sm leading-tight">
            {book.title}
          </h3>
          <button
            onClick={() => removeFromCart(book.id)}
            className="text-xs text-gray-500 hover:text-red-600 underline"
          >
            Delete
          </button>
        </div>

        <p className="text-xs text-gray-500 mb-1">
          {book.publisher} · {book.edition}
        </p>

        <div className="flex items-center gap-2 mb-2">
          <span className="text-gray-500 text-xs line-through mr-1">
            ₹{book.mrp.toFixed(2)}
          </span>
          <span className="text-lg font-bold text-gray-900">
            ₹{book.offerMrp.toFixed(2)}
          </span>
          <span className="text-xs text-green-700 font-semibold">
            {book.offerPercentage}% off
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center border border-gray-300 rounded">
            <button
              onClick={() =>
                updateQuantity(book.id, Math.max(1, book.quantity - 1))
              }
              className="w-8 h-8 flex items-center justify-center hover:bg-gray-100"
            >
              −
            </button>
            <span className="px-2 text-sm font-medium">{book.quantity}</span>
            <button
              onClick={() => updateQuantity(book.id, book.quantity + 1)}
              className="w-8 h-8 flex items-center justify-center hover:bg-gray-100"
            >
              +
            </button>
          </div>

          <span className="text-sm font-semibold text-gray-900">
            ₹{(book.offerMrp * book.quantity).toFixed(2)}
          </span>
        </div>

        <button
          onClick={() => removeFromCart(book.id)}
          className="text-xs text-gray-500 hover:text-red-600 underline mt-1"
        >
          Delete item
        </button>
      </div>
    </div>
  );
};

export default CartItem;
