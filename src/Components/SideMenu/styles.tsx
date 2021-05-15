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
  }
`;

export const SideMenuHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  height: 88px;
  padding-left: 12px;
`;

export const SideMenuHeaderImage = styled.img`
  width: 170px;
`;

export const SideMenuContent = styled.div`
  margin-top: 16px;
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
    background-color: ${COLORS.lightGray};
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;
