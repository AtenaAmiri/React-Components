import React from "react";

export default function Title({ text, classes }) {
  return (
    <div className={!classes ? "title text-center" : classes}>
      {!text ? "Title" : text}
    </div>
  );
}
