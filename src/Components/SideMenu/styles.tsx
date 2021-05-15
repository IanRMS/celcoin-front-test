import styled from "styled-components";
import { NavLink } from "react-router-dom";
import COLORS from "../../constants/colors";

export const SideMenuContainer = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: row;
    align-items: center;
    height: 70px;
    padding: 0px 10px;
  }

  @media (max-width: 675px) {
    justify-content: space-between;
  }
`;

export const SideMenuHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  height: 88px;
  padding-left: 12px;

  @media (max-width: 768px) {
    border: none;
    padding: 0px;
  }
`;

export const SideMenuHeaderImage = styled.img`
  width: 170px;
`;

export const SideMenuContent = styled.div`
  margin-top: 16px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    margin-top: 0;
    margin-left: 10px;
  }

  @media (max-width: 675px) {
    display: none;
    visibility: hidden;
  }
`;

export const SideMenuOption = styled(NavLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 24px;
  font-size: 16px;
  color: ${COLORS.white};
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 1px;
  text-decoration: none;
  height: 60px;
  border-radius: 70px 0px 0px 70px;
  margin: 10px 0px;
  transition: 0.3s ease-in-out;

  svg {
    margin-right: 12px;
  }

  &.active {
    font-weight: 600;
    color: ${COLORS.darkBlue};

    @media (min-width: 769px) {
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      background-color: ${COLORS.lightGray};
    }
  }

  @media (max-width: 768px) {
    margin: 0;
    /* padding: 0; */
    svg {
      display: none;
    }
  }
`;

export const MenuButton = styled.button`
  width: 40px;
  height: 40px;
  display: none;
  visibility: hidden;
  background: transparent;

  @media (max-width: 675px) {
    display: block;
    visibility: visible;
  }
`;
