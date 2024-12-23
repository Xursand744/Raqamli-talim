import { useState } from "react";
import Modal from "../components/Modal";
import TipsFilter from "../components/TipsFilter";

function Tips() {
  return (
    <div className="max-w-[1300px] w-full my-0 mx-auto mt-[100px] mb-[100px]">
      <TipsFilter />

      {/* <button
        onClick={() => setIsModalOpen(true)}
        className="mt-10 mx-auto block bg-blue-500 text-white px-6 py-2 rounded"
      >
        Open Modal
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}
    </div>
  );
}

export default Tips;
