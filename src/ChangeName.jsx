import React, { useState } from "react";

const ChangeName = () => {
  // =========================== Data =================================
  let oldName = "Muddu";
  let newName = "Muddasir Khan Pathan";
  // =========================== Data =================================

  // =========================== State ================================
  const [name, setName] = useState(oldName);
  // =========================== State ================================

  // =========================== Function =============================
  function handleChange() {
    setName(newName);
  }
  // =========================== Function =============================

  // ============================== UI ================================
  return (
    <div>
      <button onClick={() => handleChange()}>Update name</button>
      <h3>{name && name.length ? name : "empty value"}</h3>
    </div>
  );
};

export default ChangeName;
