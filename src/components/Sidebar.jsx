import React from "react";

const Sidebar = ({ categories, category, setCategory }) => {
  return (
    <aside className="w-full md:w-60 bg-white p-5 rounded-lg shadow-sm h-fit">
      <h2 className="font-bold text-lg mb-4">Department</h2>

      <div className="space-y-3">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`block w-full text-left text-sm hover:text-orange-600 ${
              category === item ? "font-bold text-orange-600" : "text-gray-700"
            }`}
          >
            {category === item ? "› " : ""}{item}
          </button>
        ))}
      </div>

      <hr className="my-5" />

      <h3 className="font-bold mb-3">Language</h3>
      <p className="text-sm text-gray-600">English</p>
      <p className="text-sm text-gray-600 mt-2">Tamil</p>
    </aside>
  );
};

export default Sidebar;
