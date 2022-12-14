import { Space, Button } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
// import "./header.css";
import styled from "styled-components";

const Header = () => {
  const [visible, setVisible] = useState(false);

  return (
    <StyledContainer>
      <div>
        <h1>LOGOOO</h1>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: 15,
          }}
        >
          <Button type="primary">Course Login </Button>
          <StyledIconBar onClick={() => setVisible(true)}>
            <MenuOutlined style={{ fontSize: 25, marginTop: -15 }} />
          </StyledIconBar>
        </div>

        <StyledNavBar>
          <StyledUl style={visible ? { left: 0 } : {}}>
            <StyledClose className="close">
              <StyledClosedSpan onClick={() => setVisible(false)}>
                ×
              </StyledClosedSpan>
            </StyledClose>
            <li>
              {" "}
              <StyledLink onClick={() => setVisible(false)} to="/about">
                About
              </StyledLink>
            </li>
            <li>
              <StyledLink onClick={() => setVisible(false)} to="/dashboard">
                Program &amp; Courses
              </StyledLink>
            </li>
            <li>
              <StyledLink onClick={() => setVisible(false)} to="/about">
                Apply &amp; Enroll
              </StyledLink>
            </li>
            <li>
              <StyledLink onClick={() => setVisible(false)} to="/about">
                Alumni
              </StyledLink>
            </li>
            <li>
              <StyledLink onClick={() => setVisible(false)} to="/about">
                Blogs
              </StyledLink>
            </li>
            <li>
              <StyledLink onClick={() => setVisible(false)} to="/about">
                Events
              </StyledLink>
            </li>
          </StyledUl>
        </StyledNavBar>
      </div>
    </StyledContainer>
  );
};

const StyledIconBar = styled.div`
  padding: 18px 8px;
  width: 50px;
  height: 60px;
  display: none;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  cursor: pointer;
  @media only screen and (max-width: 650px) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
`;

const StyledClosedSpan = styled.span`
  font-size: 40px;
  display: inline-block;
  border: 1px solid #cccccc;
  padding: 0 10px;
  cursor: pointer;
`;
const StyledClose = styled.li`
  display: none;
  text-align: right;
  padding: 10px;
  @media only screen and (max-width: 650px) {
    display: block;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  display: block;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  padding: 0 15px;
  @media only screen and (max-width: 650px) {
    padding: 10px;
    font-size: 16px;
    height: auto;
    line-height: normal;
    color: #555555;
  }
`;
const StyledUl = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  @media only screen and (max-width: 650px) {
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    position: fixed;
    left: 100%;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    background: #ffffff;
    width: 100%;
    height: 100%;
    overflow: auto;
    -webkit-transition: left 0.3s;
    -o-transition: left 0.3s;
    transition: left 0.3s;
  }
`;
const StyledNavBar = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  padding: 0;
  justify-items: flex-end;
  justify-content: flex-end;
  @media only screen and (max-width: 650px) {
    -webkit-box-flex: 0;
    -ms-flex: 0;
    flex: 0;
  }
`;
const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;

  flex-direction: row;
  width: 100%;

  margin: 20px;
`;
export default Header;
