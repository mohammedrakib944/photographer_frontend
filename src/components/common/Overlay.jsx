import React from "react";
import Spinner from "./Spinner";

const Overlay = () => {
  return (
    <div className="fixed w-full h-full z-50 bg-black/10 top-0 left-0 grid place-items-center">
      <Spinner size="lg" title="Uploading..." />
    </div>
  );
};

export default Overlay;
