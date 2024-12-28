import React from "react";

const Summary = ({ selectedCase, selectedBand }) => {
  return (
    <section className="summary p-4 bg-white shadow rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Your Selection</h2>
      <div className="mb-4">
        <h3 className="text-lg font-medium">Case</h3>
        <p>
          {selectedCase.size} {selectedCase.material} - {selectedCase.color}
        </p>
      </div>
      <div>
        <h3 className="text-lg font-medium">Band</h3>
        <p>
          {selectedBand.type} - {selectedBand.color}
        </p>
      </div>
    </section>
  );
};

export default Summary;
