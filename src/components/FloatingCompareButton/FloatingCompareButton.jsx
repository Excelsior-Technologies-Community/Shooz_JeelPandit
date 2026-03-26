import React, { useState } from "react";
import "./floatingCompareButton.css";
import { BsChevronLeft } from "react-icons/bs";
import { useCompare } from "../../Context/useCompare";
import CompareModal from "../CompareModal/CompareModal";

function FloatingCompareButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { compareCount } = useCompare();

  return (
    <>
      <button
        type="button"
        className="floating-compare-btn"
        aria-label="Open compare products modal"
        onClick={() => setIsModalOpen(true)}
      >
        <span className="floating-compare-text">Compare</span>
        
        {compareCount > 0 && <span className="floating-compare-count">{compareCount}</span>}
      </button>

      <CompareModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default FloatingCompareButton;
