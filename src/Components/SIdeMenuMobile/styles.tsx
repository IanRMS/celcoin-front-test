import { NavLink } from "react-router-dom";
import styled from "styled-components";
import COLORS from "../../constants/colors";

interface ContainerProps {
  open: boolean;
}

export const SideMenuMobileContainer = styled.div<ContainerProps>`
  width: 250px;
  height: 100vh;
  position: fixed;
  left: ${(props) => (props.open ? "-10px" : "-260px")};
  background-color: ${COLORS.lightGray};
  box-shadow: rgba(149, 157, 165, 0.1) 0px 0px 24px;
  z-index: 10;
  top: -10px;
  transition: 0.3s ease-in-out;
`;

export const SideMenuMobileHeader = styled.div`
  height: 80px;
  border-bottom: 1px solid ${COLORS.darkGray};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SideMenuMobileImage = styled.img`
  width: 170px;
  filter: invert(1);
`;

export const SideMenuMobileContent = styled.div`
  margin-top: 16px;
`;

export const SideMenuMobileOption = styled(NavLink)`
  padding-left: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 24px;
  font-size: 16px;
  color: ${COLORS.darkBlue};
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 1px;
  text-decoration: none;
  height: 60px;
  margin: 10px 0px;
  transition: 0.3s ease-in-out;

  svg {
    margin-right: 12px;
  }

  &.active {
    font-weight: 600;
    color: ${COLORS.white};
    background-color: ${COLORS.darkBlue};
  }
`;
