import { useState } from "react";
import { gsap } from "gsap";
import Customizer from "./Customizer";
import Summary from "./Summary";
import Preview from "./Preview";

const AppleWatch = () => {
  const [selectedCase, setSelectedCase] = useState({
    id: 1,
    size: "41mm",
    material: "Aluminum",
    color: "Silver",
    image: "./assets/images/case-silver.png",
  });
  const [selectedBand, setSelectedBand] = useState({
    id: 1,
    type: "Sport Band",
    color: "Black",
    image: "./assets/images/band-black.png",
  });

  const handleSelection = (type, item) => {
    if (type === "case") {
      setSelectedCase(item);
    } else {
      setSelectedBand(item);
    }
    gsap.fromTo(
      ".watch-preview",
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5 }
    );
  };

  return (
    <div>
      <Customizer
        onSelection={handleSelection}
        selectedCase={selectedCase}
        selectedBand={selectedBand}
      />
      <Summary selectedCase={selectedCase} selectedBand={selectedBand} />
      <Preview selectedCase={selectedCase} selectedBand={selectedBand} />
    </div>
  );
};

export default AppleWatch;
