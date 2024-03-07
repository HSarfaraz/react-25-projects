import React from "react";
import MenuList from "./menu-list";
import menus from "./data";
import "./styles.css";

const TreeView = () => {
  return (
    <div className="tree-view-container">
      <h3>Tree View:</h3> <MenuList list={menus} />
    </div>
  );
};

export default TreeView;
