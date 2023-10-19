import React from "react";
import { useNavigate } from "react-router-dom"

const Navigate = () => {
    const navigate = useNavigate();
  return (
    <div
      className={current === 1 ? styles.active : styles.inActive}
      onClick={() => navigate("/")}
    >
      <AdminIcon />
      <p className="text-white text-base font-bold">Admin</p>
    </div>
  );
};

export default Navigate;
