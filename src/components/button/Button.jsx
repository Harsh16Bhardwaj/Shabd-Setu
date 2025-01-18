import React from "react";

function Button({ children , className = "",...props }) {
  return (
    <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all font-medium">
      {children}
    </button>
  );
}

export default Button;
