import React from "react";

const ErrorAlt = ({ title = "There is an error!" }) => {
  return (
    <div className="w-full p-4 bg-red-500/20 text-center font-bold text-red-500 rounded-md">
      {title}
    </div>
  );
};

export default ErrorAlt;
