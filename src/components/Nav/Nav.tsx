import * as React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export interface INavProps {
  className?: string;
}

const Nav: React.FunctionComponent<INavProps> = props => {
  return (
    <nav className={props.className}>
      <div>
        <NavLink exact activeClassName="active" to="/">
          <h3>Kyle Davis</h3>
        </NavLink>

        <ul>
          <li>
            <a target="_blank" href="/resume">
              <h3>Resume</h3>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const StyledNav = styled(Nav)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);

  > div {
    display: flex;
    flex-direction: row;
    flex: 1;
    max-width: 1200px;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;

    a {
      padding: 10px;
      text-decoration: none;
      text-transform: uppercase;
      font-family: Montserrat, Helvetica, Arial, sans-serif;
    }

    > ul {
      display: flex;
      flex-direction: row;
      padding: 0;
      margin: 0;

      > li {
        display: flex;
      }
    }
  }
`;

export { StyledNav as Nav };
