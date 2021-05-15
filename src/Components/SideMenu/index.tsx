import React from "react";
import { Icon } from "@iconify/react";
import homeOutlined from "@iconify-icons/ant-design/home-outlined";
import menuOutlined from "@iconify-icons/ant-design/menu-outlined";
import productDownloadable from "@iconify-icons/gridicons/product-downloadable";

import Logo from "../../assets/images/logo.png";

import {
  SideMenuContainer,
  SideMenuHeader,
  SideMenuHeaderImage,
  SideMenuContent,
  SideMenuOption,
  MenuButton,
} from "./styles";
import COLORS from "../../constants/colors";

interface SideMenuProps {
  menuClick: () => void;
}

function SideMenu({ menuClick }: SideMenuProps) {
  return (
    <SideMenuContainer>
      <SideMenuHeader>
        <SideMenuHeaderImage src={Logo} />
      </SideMenuHeader>
      <SideMenuContent>
        <SideMenuOption to="/dashboard">
          <Icon icon={homeOutlined} width="20" />
          Dashboard
        </SideMenuOption>
        <SideMenuOption to="/pacientes">
          <Icon icon={productDownloadable} width="20" />
          Pacientes
        </SideMenuOption>
        <SideMenuOption to="/testes">
          <Icon icon={productDownloadable} width="20" />
          Testes
        </SideMenuOption>
        <SideMenuOption to="/configuracoes">
          <Icon icon={productDownloadable} width="20" />
          Configurações
        </SideMenuOption>
      </SideMenuContent>
      <MenuButton onClick={menuClick}>
        <Icon icon={menuOutlined} color={COLORS.white} width="40" />
      </MenuButton>
    </SideMenuContainer>
  );
}

export default SideMenu;
