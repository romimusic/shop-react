import React from 'react'
import '@styles/Menu.scss'


const Menu = () => {
  return (
    <div className="Menu">
      <ul>
        <li>
          <a hre="/" className="title"> My orders </a>
        </li>
        <li>
          <a href="/"> My Account </a>
        </li>
        <li>
          <a href="/"> Sing Out </a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;