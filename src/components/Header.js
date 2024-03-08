import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  padding-left: 70px;
  padding-right: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Archivo;
  color: #fff};
`;

const Nav = styled.nav`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin-right: 20px;
  font-family: Archivo;
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  letter-spacing: 1px;
  text-align: left;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover {
    border-bottom: 2px solid ${(props) => (props.darkMode ? "#fff" : "#222")};
  }
`;

const HeaderTitle = styled.h4`
  font-family: Archivo;
  font-size: 24px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 1px;
  text-align: left;
`;

const Text = styled.p`
  font-family: Archivo;
  font-size: 11px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 1px;
  text-align: center;
  color: black;
  position: "relative";
`;
function Header() {
  return (
    <HeaderContainer>
      <HeaderTitle>RESET DIGITAL</HeaderTitle>
      <Nav>
        <ul
          style={{ display: "flex", listStyle: "none", margin: 0, padding: 0 }}
        >
          <NavItem>
            <NavLink href="#">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Team</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Blog</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Packages</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Contact</NavLink>
          </NavItem>
          <NavItem>
            <img
              src="https://i.ibb.co/JRLZ4tc/Vector-6.png"
              style={{ height: "17px", width: "17px" }}
            />
          </NavItem>
          <NavItem>
            <div
              style={{
                height: "18px",
                width: "18px",
                backgroundColor: "white",
                borderRadius: "9px",
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
              }}
            >
              <text style={{color:"black",textAlign:'center',fontFamily:'Archivo',fontWeight:'700',fontSize:'11px'}}>0</text>
            </div>
          </NavItem>
        </ul>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
