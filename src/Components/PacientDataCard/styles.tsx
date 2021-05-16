import styled from "styled-components";
import COLORS from "../../constants/colors";

interface DiagnosticDataProps {
  color: string;
}

export const PacientDataCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${COLORS.lightGray};
  border-radius: 6px;
  margin-top: 8px;
`;

export const PacientInfosContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PacientPersonalData = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  border-right: 1px solid ${COLORS.lightGray};
  width: 360px;
`;

export const PacientImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 6px;
  margin-right: 16px;
`;

export const PacientInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PacientName = styled.h2`
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0em;
  color: ${COLORS.darkBlue};
`;

export const PacientInfo = styled.span`
  font-size: 10px;
  font-style: normal;
  font-weight: 800;
  line-height: 14px;
  letter-spacing: 0em;
  color: #303b5b4d;
`;

export const PacientDiagnosticsInfo = styled.span`
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0em;
  color: ${COLORS.green};
`;

export const DiagnosticsDataContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

export const DiagnosticData = styled.div<DiagnosticDataProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 16px;
  color: ${(props) => props.color};
  border-right: 1px solid ${COLORS.lightGray};
`;

export const DiagnosticNumber = styled.h1`
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 54px;
  letter-spacing: 1px;
`;

export const DiagnosticLabel = styled.span`
  margin-top: 8px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0px;
`;

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  > button {
    margin: 10px;
    height: 32px !important;
  }
`;

export const OutlinedIconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${COLORS.lightGray};
  width: 32px;
  height: 32px;
  background: transparent;
  border-radius: 16px;
`;
