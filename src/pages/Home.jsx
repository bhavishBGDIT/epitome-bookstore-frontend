import React, { useMemo, useState } from "react";
import useBooks from "../hooks/useBooks";
import { useCart } from "../context/CartContext";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const Home = () => {
    const { addToCart } = useCart();
    const [page, setPage] = useState(0);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    const size = 10;

    const {
        data,
        isLoading,
        isError,
        error,
        isFetching,
        refetch,
    } = useBooks(page, size);

    const books = data?.content || [];

    const categories = [
        // "All",
        // "Academics",
        // "Fiction",
        // "Non Fiction",
        // "Children",
        // "Young Adults",
        // "Comics & Graphic Novels",
        // "Languages",
        // "History",
        // "Education",
        // "Philosophy",
        // "Fantasy",
    ];

    const filteredBooks = useMemo(() => {
        return books.filter((book) => {
            const matchesSearch =
                book.title.toLowerCase().includes(search.toLowerCase()) ||
                book.publisher.toLowerCase().includes(search.toLowerCase());

            const matchesCategory =
                category === "All" || book.categories === category;

            return matchesSearch && matchesCategory;
        });
    }, [books, search, category]);

    const handlePageChange = (newPage) => {
        setPage(newPage);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Header search={search} setSearch={setSearch} />

            {/* Navigation */}
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
                {/* Breadcrumb */}
                <p className="text-sm text-gray-500 mb-4">
                    Home / Books / All Books
                </p>

                <div className="flex flex-col md:flex-row gap-5">
                    {/* Sidebar */}
                    {/* <Sidebar
                        categories={categories}
                        category={category}
                        setCategory={setCategory}
                    /> */}

                    {/* Book Content */}
                    <section className="flex-1 min-w-0">
                        <div className="bg-white rounded-lg p-4 mb-4 flex flex-wrap justify-between items-center gap-2">
                            <div>
                                <h2 className="text-xl font-bold">Books</h2>
                                <p className="text-sm text-gray-500">
                                    {data?.totalElements || 0} books available
                                </p>
                            </div>
                            <span className="text-sm text-gray-500">
                                Page {page + 1} of {data?.totalPages || 1}
                            </span>
                        </div>

                        {isFetching && !isLoading && (
                            <p className="text-sm text-orange-600 mb-3">
                                Updating books...
                            </p>
                        )}

                        {/* Loading */}
                        {isLoading && (
                            <div className="bg-white p-10 text-center rounded-lg">
                                Loading books...
                            </div>
                        )}

                        {/* Error */}
                        {isError && (
                            <div className="bg-white p-10 text-center rounded-lg">
                                <p className="text-red-600 mb-4">
                                    {error.message}
                                </p>
                                <button
                                    onClick={() => refetch()}
                                    className="bg-orange-500 text-white px-5 py-2 rounded"
                                >
                                    Retry
                                </button>
                            </div>
                        )}

                        {!isLoading && !isError && (
                            <>
                                {filteredBooks.length === 0 ? (
                                    <div className="bg-white p-10 text-center rounded-lg">
                                        No books found.
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                                        {filteredBooks.map((book) => (
                                            <div
                                                key={book.id}
                                                className="bg-white rounded-lg p-3 shadow-sm hover:shadow-lg transition-shadow group"
                                            >
                                                {/* Image */}
                                                <div className="h-52 flex justify-center items-center bg-gray-50 mb-3 rounded">
                                                    <img
                                                        src={book.imageUrl}
                                                        alt={book.title}
                                                        className="h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                                                        onError={(e) => {
                                                            e.currentTarget.src =
                                                                "https://placehold.co/300x400?text=Book";
                                                        }}
                                                    />
                                                </div>

                                                {/* Title */}
                                                <h3 className="font-semibold text-sm line-clamp-2 min-h-10">
                                                    {book.title}
                                                </h3>

                                                <p className="text-xs text-gray-500 mt-1 line-clamp-1">
                                                    {book.publisher}
                                                </p>

                                                {/* Rating */}
                                                <div className="flex items-center gap-1 mt-2">
                                                    <span className="text-yellow-500 text-sm">
                                                        ★★★★★
                                                    </span>
                                                    <span className="text-xs text-gray-500">
                                                        {book.userRating}
                                                    </span>
                                                </div>

                                                {/* Price */}
                                                <div className="mt-3">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-lg font-bold text-gray-900">
                                                            {Number(book.offerMrp).toFixed(2)}
                                                        </span>
                                                        <span className="text-xs text-gray-400 line-through">
                                                            {Number(book.mrp).toFixed(2)}
                                                        </span>
                                                    </div>
                                                    <span className="text-xs font-semibold text-green-700">
                                                        {book.offerPercentage}% off
                                                    </span>
                                                </div>

                                                <button onClick={() => addToCart(book)} className="w-full mt-3 bg-yellow-400 hover:bg-yellow-500 text-sm font-semibold py-2 rounded-full cursor-pointer">
                                                    Add to Cart
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Pagination */}
                                <div className="flex flex-wrap justify-center items-center gap-2 mt-8 bg-white p-4 rounded-lg">
                                    <button
                                        disabled={data?.first}
                                        onClick={() => handlePageChange(page - 1)}
                                        className="px-4 py-2 border rounded disabled:opacity-40 hover:bg-gray-100"
                                    >
                                        Previous
                                    </button>
                                    {Array.from(
                                        { length: data?.totalPages || 0 },
                                        (_, index) => index
                                    ).map((number) => (
                                        <button
                                            key={number}
                                            onClick={() => handlePageChange(number)}
                                            className={`w-10 h-10 rounded border ${
                                                page === number
                                                    ? "bg-[#232f3e] text-white"
                                                    : "hover:bg-gray-100"
                                            }`}
                                        >
                                            {number + 1}
                                        </button>
                                    ))}
                                    <button
                                        disabled={data?.last}
                                        onClick={() => handlePageChange(page + 1)}
                                        className="px-4 py-2 border rounded disabled:opacity-40 hover:bg-gray-100"
                                    >
                                        Next
                                    </button>
                                </div>
                            </>
                        )}
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Home;
