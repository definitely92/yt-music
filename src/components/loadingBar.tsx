"use client";
import React from "react";
import { BarLoader } from "react-spinners";

const LoadingBar = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <BarLoader color="red" cssOverride={{ width: "100%" }} />
    </div>
  );
};

export default LoadingBar;
