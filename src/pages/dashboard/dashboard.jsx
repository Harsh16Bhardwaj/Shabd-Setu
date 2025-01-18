import React from "react";
import "./dashboard.css";
function Dashboard1() {
  return (
    <>
      <div className="flex h-screen">
        <div className="bg-teal-400 w-1/5">
          <h1 className="text-yellow-300 font-medium text-xl text-center p-2">Your Recent Posts </h1>
          <hr className="h-0.5 bg-white w-60 mx-5" />
        </div>
        <div className="bg-teal-900 w-4/5">
          <h1>Catalogue</h1>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Dashboard1;
