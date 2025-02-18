import { useState } from "react";
import Modal from "../components/Modal";
import TipsFilter from "../components/TipsFilter";

function Tips() {
  return (
    <div className="max-w-[1300px] w-full my-0 mx-auto mt-[100px] mb-[100px]">
      <TipsFilter />
    </div>
  );
}

export default Tips;
