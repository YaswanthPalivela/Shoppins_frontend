import React from "react";

const Preview = ({ selectedCase, selectedBand }) => {
  return (
    <section className="preview bg-white shadow rounded-lg flex items-center justify-center">
      <div className="watch-preview relative w-64 h-64">
        <img
          src={selectedCase.image}
          alt={`${selectedCase.color} case`}
          className="absolute"
        />
        <img
          src={selectedBand.image}
          alt={`${selectedBand.color} band`}
          className="absolute"
        />
      </div>
    </section>
  );
};

export default Preview;
