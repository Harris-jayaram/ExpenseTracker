import React from 'react';
import styled from 'styled-components';
import avatar from '../../img/hoshiro.png';
import { signout } from '../../utils/Icons';
import { menuItems } from '../../utils/menuItems';
import { useDarkMode } from '../Dark/DarkModeContext';

function Navigation({ active, setActive }) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <NavStyled darkMode={darkMode}>
      <div className="user-con">
        <img src={avatar} alt="" />
        <div className="text">
          <h2>Harris</h2>
          <p>My Savings</p>
        </div>
      </div>
      <ul className="menu-items">
        {menuItems.map((item) => (
          <li
            key={item.id}
            onClick={() => setActive(item.id)}
            className={active === item.id ? 'active' : ''}
          >
            {item.icon}
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
      <div className="bottom-nav">
        <div className="bottom-nav-left">
          <li>
            {signout} Sign Out
          </li>
        </div>
        <div className="bottom-nav-right">
          <DarkModeButton onClick={toggleDarkMode} darkMode={darkMode}>
            {darkMode ? (
              <i className="fas fa-sun"></i>
            ) : (
              <i className="fas fa-moon"></i>
            )}
          </DarkModeButton>
        </div>
      </div>
    </NavStyled>
  );
}

const NavStyled = styled.nav`
  padding: 2rem 1.5rem;
  width: 374px;
  height: 100%;
  background: ${({ darkMode }) => (darkMode ? '#333' : 'rgba(252, 246, 249, 0.78)')};
  border: 3px solid ${({ darkMode }) => (darkMode ? '#444' : '#FFFFFF')};
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  position: relative; /* Ensure relative positioning for absolute child */

  .user-con {
    height: 100px;
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      background: ${({ darkMode }) => (darkMode ? '#444' : '#fcf6f9')};
      border: 2px solid ${({ darkMode }) => (darkMode ? '#555' : '#FFFFFF')};
      padding: .2rem;
      box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
    }
    h2 {
      color: ${({ darkMode }) => (darkMode ? '#FFF' : 'rgba(34, 34, 96, 1)')};
    }
    p {
      color: ${({ darkMode }) => (darkMode ? '#CCC' : 'rgba(34, 34, 96, .6)')};
    }
  }

  .menu-items {
    flex: 1;
    display: flex;
    flex-direction: column;
    li {
      display: grid;
      grid-template-columns: 40px auto;
      align-items: center;
      margin: .6rem 0;
      font-weight: 500;
      cursor: pointer;
      transition: all .4s ease-in-out;
      color: ${({ darkMode }) => (darkMode ? '#CCC' : 'rgba(34, 34, 96, .6)')};
      padding-left: 1rem;
      position: relative;
      i {
        color: ${({ darkMode }) => (darkMode ? '#CCC' : 'rgba(34, 34, 96, 0.6)')};
        font-size: 1.4rem;
        transition: all .4s ease-in-out;
      }
    }
  }

  .active {
    color: ${({ darkMode }) => (darkMode ? '#FFF' : 'rgba(34, 34, 96, 1)')} !important;
    i {
      color: ${({ darkMode }) => (darkMode ? '#FFF' : 'rgba(34, 34, 96, 1)')} !important;
    }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 4px;
      height: 100%;
      background: ${({ darkMode }) => (darkMode ? '#FFF' : '#222260')};
      border-radius: 0 10px 10px 0;
    }
  }

  .bottom-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 10px; /* Adjust bottom position as needed */
    left: 10px; /* Adjust left position as needed */
    width: calc(100% - 20px); /* Ensure full width minus padding */
  }

  .bottom-nav-left {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    li {
      color: ${({ darkMode }) => (darkMode ? '#CCC' : 'rgba(34, 34, 96, .6)')};
      i {
        color: ${({ darkMode }) => (darkMode ? '#CCC' : 'rgba(34, 34, 96, .6)')};
      }
    }
  }

  .bottom-nav-right {
    display: flex;
    justify-content: flex-end;
  }
`;

const DarkModeButton = styled.button`
  width: 40px; /* Adjust width as needed */
  height: 40px; /* Adjust height as needed */
  background: ${({ darkMode }) => (darkMode ? '#FFF' : '#222260')};
  border: none;
  border-radius: 8px; /* Adjust border radius for rounded corners */
  color: ${({ darkMode }) => (darkMode ? '#222260' : '#FFF')};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;

  i {
    font-size: 1.2rem; /* Adjust icon size as needed */
    transition: all 0.4s ease-in-out;
  }
`;

export default Navigation;
