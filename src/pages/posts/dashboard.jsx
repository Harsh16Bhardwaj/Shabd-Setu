import React from "react";
import "./dashboard.css";
function Dashboard1() {
  return (
    <>
      <div className="flex h-screen">
        <div className="bg-gray-950 w-1/5 px-6 border-r-2 border-purple-700">
          <h1 className="text-yellow-200 font-medium text-xl text-center p-2">Your Recent Posts </h1>
          <hr className="h-0.5 bg-white w-full " />
        </div>
        <div className="bg-gray-900 w-4/5">
          <h1>Catalogue</h1>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Dashboard1;
