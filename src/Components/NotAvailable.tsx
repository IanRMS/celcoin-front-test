import { Icon } from "@iconify/react";
import frownOutlined from "@iconify-icons/ant-design/frown-outlined";
import styled from "styled-components";
import COLORS from "../constants/colors";

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    color: ${COLORS.darkBlue};
  }
`;

function NotAvailable() {
  return (
    <PageContainer>
      <Icon icon={frownOutlined} color={COLORS.darkBlue} width="180" />
      <h1>Não há dados disponíveis...</h1>
    </PageContainer>
  );
}

export default NotAvailable;
