import React from "react";
import { Icon } from "@iconify/react";
import searchOutlined from "@iconify-icons/ant-design/search-outlined";
import baselineSettings from "@iconify-icons/ic/baseline-settings";
import baselineNotifications from "@iconify-icons/ic/baseline-notifications";
import roundApps from "@iconify-icons/ic/round-apps";

import UserImage from "../../assets/images/user.jpg";

import {
  Container,
  SearchInputContainer,
  SearchInput,
  IconButton,
  HeaderRow,
  UserContent,
  UserContentImage,
  UserContextText,
} from "./styles";

function Header() {
  return (
    <Container>
      <SearchInputContainer>
        <Icon icon={searchOutlined} width={20} color="#787686" />
        <SearchInput placeholder="Busca..." />
      </SearchInputContainer>
      <HeaderRow>
        <IconButton>
          <Icon icon={baselineSettings} width={20} color="#2C2E3D" />
        </IconButton>
        <IconButton hasNotification={true}>
          <Icon icon={baselineNotifications} width={20} color="#2C2E3D" />
        </IconButton>

        <UserContent>
          <UserContextText>
            Olá, <strong>Ian</strong>
          </UserContextText>
          <UserContentImage src={UserImage} />
        </UserContent>

        <IconButton>
          <Icon icon={roundApps} width={24} color="#2C2E3D" />
        </IconButton>
      </HeaderRow>
    </Container>
  );
}

export default Header;
