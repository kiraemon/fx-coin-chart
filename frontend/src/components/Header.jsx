import React from "react";

export const Header = () => {
  return (
    <header className="header">
      <h1 className="header-logo">FX & Coin Chart</h1>
      <nav className="header-nav">
        <ul className="header-list">
          <li className="header-item">
            <a href="">test1</a>
          </li>
          <li className="header-item">
            <a href="">test2</a>
          </li>
          <li className="header-item header-item-contact">
            <a href="">test3</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
