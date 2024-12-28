import React from "react";

const Customizer = ({ onSelection, selectedCase, selectedBand }) => {
  const cases = [
    {
      id: 1,
      size: "41mm",
      material: "Aluminum",
      color: "Silver",
      image: "./assets/images/case-silver.png",
    },
    {
      id: 2,
      size: "45mm",
      material: "Stainless Steel",
      color: "Gold",
      image: "./assets/images/case-gold.png",
    },
    {
      id: 3,
      size: "45mm",
      material: "Titanium",
      color: "Space Gray",
      image: "./assets/images/case-space-gray.png",
    },
  ];

  const bands = [
    {
      id: 1,
      type: "Sport Band",
      color: "Black",
      image: "./assets/images/band-black.png",
    },
    {
      id: 2,
      type: "Solo Loop",
      color: "Blue",
      image: "./assets/images/band-blue.png",
    },
    {
      id: 3,
      type: "Braided Loop",
      color: "Red",
      image: "./assets/images/band-red.png",
    },
  ];

  return (
    <section className="customizer p-4 bg-white shadow rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Customize Your Watch</h2>
      <div className="option-group mb-6">
        <h3 className="text-lg font-medium mb-2">Select Case</h3>
        <div className="flex flex-wrap gap-4">
          {cases.map((watchCase) => (
            <button
              key={watchCase.id}
              className={`border p-2 rounded-lg transition ${
                selectedCase.id === watchCase.id
                  ? "border-blue-500"
                  : "border-gray-300"
              }`}
              onClick={() => onSelection("case", watchCase)}
            >
              <img
                src={watchCase.image}
                alt={`${watchCase.material} case`}
                className="w-16 h-16 object-contain"
              />
              <p className="text-sm mt-2">
                {watchCase.size}, {watchCase.material}
              </p>
            </button>
          ))}
        </div>
      </div>
      <h3 className="text-lg font-medium mb-2">Select Band</h3>
      <div className="flex flex-wrap gap-4">
        {bands.map((band) => (
          <button
            key={band.id}
            className={`border p-2 rounded-lg transition ${
              selectedBand.id === band.id
                ? "border-blue-500"
                : "border-gray-300"
            }`}
            onClick={() => onSelection("band", band)}
          >
            <img
              src={band.image}
              alt={`${band.color} band`}
              className="w-16 h-16 object-contain"
            />
            <p className="text-sm mt-2">{band.type}</p>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Customizer;
