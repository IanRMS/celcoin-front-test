import React from "react";
import GeneralInfoCard from "../../Components/GeneralInfoCard";
import HistoricInfoCard from "../../Components/HistoricInfoCard";
import RoundButton from "../../Components/RoundButton";
import SectionTitle from "../../Components/SectionTitle";
import GeneralInfoData from "../../data/generalInfoData";
import HistoricInfoData from "../../data/historicInfoData";
import {
  HistoricContainer,
  HistoricRowCard,
  HistoricSection,
  HistoricTitleRow,
  PageContent,
  SectionRow,
  TopTestContainer,
} from "./styles";

const RenderGeneralData = () => (
  <>
    {GeneralInfoData.map((item, index) => (
      <GeneralInfoCard
        key={index}
        result={item.result}
        icon={item.icon}
        number={item.number}
        label={item.label}
        iconColor={item.iconColor}
        tipLabel={item.tipLabel}
        tipNumber={item.tipNumber}
        tipNumberColor={item.tipNumberColor}
      />
    ))}
  </>
);

const RenderHistoricData = () => (
  <>
    {HistoricInfoData.map((item, index) => (
      <HistoricInfoCard
        key={index}
        name={item.name}
        test={item.test}
        date={item.date}
        testImage={item.testImage}
      />
    ))}
  </>
);

function Dashboard() {
  return (
    <PageContent>
      <SectionTitle text="Informações Gerais" />
      <SectionRow>{RenderGeneralData()}</SectionRow>
      <HistoricSection>
        <HistoricContainer>
          <HistoricTitleRow>
            <SectionTitle text="Histórico de atendimentos" />
            <RoundButton color="blue">VER TODOS</RoundButton>
          </HistoricTitleRow>
          <HistoricRowCard>{RenderHistoricData()}</HistoricRowCard>
        </HistoricContainer>
        <TopTestContainer>
          <SectionTitle text="Teste mais realizado" />
        </TopTestContainer>
      </HistoricSection>
    </PageContent>
  );
}

export default Dashboard;
