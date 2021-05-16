import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import baselineSettings from "@iconify-icons/ic/baseline-settings";
import baselineNotifications from "@iconify-icons/ic/baseline-notifications";
import roundApps from "@iconify-icons/ic/round-apps";
import logoutIcon from "@iconify-icons/heroicons-outline/logout";

import UserImage from "../../assets/images/user.jpg";

import {
  Container,
  IconButton,
  HeaderRow,
  UserContent,
  UserContentImage,
  UserContextText,
  SubMenuContainer,
  SubMenuOption,
  SubMenuOptionsText,
} from "./styles";
import COLORS from "../../constants/colors";
import SearchInput from "../SearchInput";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const submenu = useRef<HTMLDivElement>(null);

  const handleClick = (e: any) => {
    if (!submenu.current) {
      return;
    }
    if (submenu.current.contains(e.target)) {
      setIsMenuOpen(false);
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <Container>
      <SearchInput placeholder="Busca..." />
      <HeaderRow>
        <IconButton>
          <Icon icon={baselineSettings} width={20} color={COLORS.darkGray} />
        </IconButton>
        <IconButton hasNotification={true}>
          <Icon
            icon={baselineNotifications}
            width={20}
            color={COLORS.darkGray}
          />
        </IconButton>

        <UserContent onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <UserContextText>
            Olá, <strong>Ian Ribeiro</strong>
          </UserContextText>
          <UserContentImage src={UserImage} />
        </UserContent>

        <IconButton>
          <Icon icon={roundApps} width={24} color={COLORS.darkGray} />
        </IconButton>
      </HeaderRow>
      {isMenuOpen && (
        <SubMenuContainer ref={submenu}>
          <SubMenuOption>
            <SubMenuOptionsText>Minha conta</SubMenuOptionsText>
          </SubMenuOption>
          <SubMenuOption>
            <SubMenuOptionsText>Configurações</SubMenuOptionsText>
          </SubMenuOption>
          <SubMenuOption>
            <Icon icon={logoutIcon} width={20} color={COLORS.red} />
            <SubMenuOptionsText>Sair</SubMenuOptionsText>
          </SubMenuOption>
        </SubMenuContainer>
      )}
    </Container>
  );
}

export default Header;
