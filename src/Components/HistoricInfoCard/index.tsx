import {
  HistoricCardContainer,
  HistoricCardImageContainer,
  HistoricCardImage,
  HistoricName,
  HistoricInfoLabel,
  HistoricInfo,
  HistoricInfoContent,
} from "./styles";

interface HistoricInfoCardProps {
  name: string;
  test: string;
  date: string;
  testImage: string | undefined;
}

function HistoricInfoCard({
  name,
  test,
  date,
  testImage,
}: HistoricInfoCardProps) {
  return (
    <HistoricCardContainer>
      <HistoricCardImageContainer>
        <HistoricCardImage src={testImage} />
      </HistoricCardImageContainer>
      <HistoricInfoContent>
        <HistoricName>{name}</HistoricName>
        <HistoricInfoLabel>TESTE REALIZADO</HistoricInfoLabel>
        <HistoricInfo>{test}</HistoricInfo>
        <HistoricInfoLabel>REALIZADO EM:</HistoricInfoLabel>
        <HistoricInfo>{date}</HistoricInfo>
      </HistoricInfoContent>
    </HistoricCardContainer>
  );
}

export default HistoricInfoCard;
