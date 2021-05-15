import React from "react";
import Icon from "@iconify/react";
import homeOutlined from "@iconify-icons/ant-design/home-outlined";
import productDownloadable from "@iconify-icons/gridicons/product-downloadable";

import Logo from "../../assets/images/logo.png";

import {
  SideMenuMobileContainer,
  SideMenuMobileHeader,
  SideMenuMobileImage,
  SideMenuMobileContent,
  SideMenuMobileOption,
  SideMenuMobileOverlay,
} from "./styles";

interface SideMenuMobileProps {
  open: boolean;
  menuClick: () => void;
}

function SideMenuMobile({ open, menuClick }: SideMenuMobileProps) {
  return (
    <>
      <SideMenuMobileOverlay open={open} onClick={menuClick} />
      <SideMenuMobileContainer open={open}>
        <SideMenuMobileHeader>
          <SideMenuMobileImage src={Logo} />
        </SideMenuMobileHeader>
        <SideMenuMobileContent>
          <SideMenuMobileOption to="/dashboard" onClick={menuClick}>
            <Icon icon={homeOutlined} width="20" />
            Dashboard
          </SideMenuMobileOption>
          <SideMenuMobileOption to="/pacientes" onClick={menuClick}>
            <Icon icon={productDownloadable} width="20" />
            Pacientes
          </SideMenuMobileOption>
          <SideMenuMobileOption to="/testes" onClick={menuClick}>
            <Icon icon={productDownloadable} width="20" />
            Testes
          </SideMenuMobileOption>
          <SideMenuMobileOption to="/configuracoes" onClick={menuClick}>
            <Icon icon={productDownloadable} width="20" />
            Configurações
          </SideMenuMobileOption>
        </SideMenuMobileContent>
      </SideMenuMobileContainer>
    </>
  );
}

export default SideMenuMobile;
