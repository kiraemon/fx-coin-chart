import React from "react";

export const Header = () => {
  return (
    <header className="header">
      <h1 className="header-logo">FX & Coin Chart</h1>

      <nav className="header-nav">
        <ul className="header-list">
          <li className="header-item">
            <a href="">About</a>
          </li>
          <li className="header-item">
            <a href="">ブログ</a>
          </li>
          <li className="header-item header-item--contact">
            <a href="">お問い合わせ</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
