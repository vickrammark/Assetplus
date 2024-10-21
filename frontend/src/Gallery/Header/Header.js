import React from "react";
import "./Header.css";
const Header = ({ handleOpen, setSearchString }) => {
  return (
    <div className="header-outer-container">
      <div className="header-add-icon-container" onClick={handleOpen}>
        Add
      </div>
      <div className="header-title-container">Content Gallery</div>
      <div className="header-search-container">
        <input
          onChange={(e) => {
            setSearchString(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Header;
