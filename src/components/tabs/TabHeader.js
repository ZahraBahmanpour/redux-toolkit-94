import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { closeTab } from "../../redux/features/tab/tabsSlice";
import SaveModal from "../modal/Modal";

export default function TabHeader({ title, id, unSaved }) {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(`/${id}`);
  };
  return (
    <>
      <div onClick={clickHandler}>
        {title.slice(0, 10)}...
        <IoCloseSharp className="text-danger" />
      </div>
    </>
  );
}
