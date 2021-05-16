import { Icon } from "@iconify/react";
import editFilled from "@iconify-icons/ant-design/edit-filled";

import COLORS from "../../constants/colors";
import RoundButton from "../RoundButton";
import {
  ActionsContainer,
  DiagnosticData,
  DiagnosticLabel,
  DiagnosticNumber,
  DiagnosticsDataContainer,
  OutlinedIconButton,
  PacientDataCardContainer,
  PacientDiagnosticsInfo,
  PacientImage,
  PacientInfo,
  PacientInfoContent,
  PacientInfosContainer,
  PacientName,
  PacientPersonalData,
  // PacientTestsData,
  // ActionsOptions,
} from "./styles";

interface PacientDataCardProps {
  name: string;
  diagnostics: string;
  done: number;
  canceled: number;
  pending: number;
  image: string;
}

function PacientDataCard({
  name,
  diagnostics,
  done,
  canceled,
  pending,
  image,
}: PacientDataCardProps) {
  return (
    <PacientDataCardContainer>
      <PacientInfosContainer>
        <PacientPersonalData>
          <PacientImage src={image} />
          <PacientInfoContent>
            <PacientName>{name}</PacientName>
            <PacientInfo>DIAGNÓSTICOS</PacientInfo>
            <PacientDiagnosticsInfo>{diagnostics}</PacientDiagnosticsInfo>
          </PacientInfoContent>
        </PacientPersonalData>
        <DiagnosticsDataContainer>
          <DiagnosticData color={COLORS.green}>
            <DiagnosticNumber>{done}</DiagnosticNumber>
            <DiagnosticLabel>Testes realizados</DiagnosticLabel>
          </DiagnosticData>
          <DiagnosticData color={COLORS.red}>
            <DiagnosticNumber>{canceled}</DiagnosticNumber>
            <DiagnosticLabel>Testes cancelados</DiagnosticLabel>
          </DiagnosticData>
          <DiagnosticData color={COLORS.orange}>
            <DiagnosticNumber>{pending}</DiagnosticNumber>
            <DiagnosticLabel>Testes pendentes</DiagnosticLabel>
          </DiagnosticData>
        </DiagnosticsDataContainer>
      </PacientInfosContainer>
      <ActionsContainer>
        <OutlinedIconButton>
          <Icon icon={editFilled} color={COLORS.blue2} />
        </OutlinedIconButton>
        <RoundButton color="pink">ENVIAR NOVO TESTE</RoundButton>
        <RoundButton color="blue">ALTERAR CADASTRO</RoundButton>
      </ActionsContainer>
    </PacientDataCardContainer>
  );
}

export default PacientDataCard;
