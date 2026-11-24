import React from "react";
import { useCart } from "../context/CartContext";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cartItems, cartTotal, cartCount, removeFromCart, clearCart } = useCart();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.offerMrp * item.quantity,
    0
  );
  const shipping = subtotal >= 499 ? 0 : 49;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <nav className="bg-[#232f3e] text-white px-5 py-3">
        <div className="max-w-[1500px] mx-auto flex gap-6 text-sm overflow-x-auto whitespace-nowrap">
          <span className="font-bold">☰ All</span>
          <span>Best Sellers</span>
          <span>New Releases</span>
          <span>Academics</span>
          <span>Fiction</span>
          <span>Children</span>
        </div>
      </nav>

      <main className="max-w-[1500px] mx-auto p-4">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Cart Items */}
          <section className="flex-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-4">
              <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-lg font-bold text-gray-900">
                  Shopping Cart ({cartCount} items)
                </h2>
                {cartItems.length > 0 && (
                  <button
                    onClick={clearCart}
                    className="text-sm text-red-600 hover:text-red-800 underline"
                  >
                    Clear Cart
                  </button>
                )}
              </div>

              {cartItems.length === 0 ? (
                <div className="bg-white p-12 text-center rounded-lg">
                  <div className="text-gray-400 text-4xl mb-4">🛒</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Your cart is empty
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Add books to your cart to get started.
                  </p>
                  <button
                    onClick={() => {}}
                    className="bg-[#131921] text-white px-6 py-2 rounded hover:bg-black"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="divide-y divide-gray-200">
                  {cartItems.map((book) => (
                    <CartItem key={book.id} book={book} />
                  ))}
                </div>
              )}
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">
                Save for later
              </h3>
              <p className="text-sm text-gray-600">
                No saved items yet.
              </p>
            </div>
          </section>

          {/* Order Summary */}
          <aside className="lg:w-80 bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Order Summary
            </h3>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal ({cartCount} items)</span>
                <span className="font-medium text-gray-900">
                  ₹{subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium text-gray-900">
                  {shipping === 0 ? "FREE" : "₹" + shipping.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between text-lg font-bold text-gray-900 mb-6">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>

              <button
                disabled={cartItems.length === 0}
                onClick={() => {}}
                className={`w-full py-3 rounded font-semibold text-white ${
                  cartItems.length === 0
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-orange-500 hover:bg-orange-600"
                }`}
              >
                Proceed to Checkout
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                By continuing, you agree to our{" "}
                <a href="#" className="text-orange-600 hover:underline">
                  Terms of Use
                </a>
                and{" "}
                <a href="#" className="text-orange-600 hover:underline">
                  Privacy Notice
                </a>
              </p>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
