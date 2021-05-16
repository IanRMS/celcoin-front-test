import GeneralInfoCard from "../../Components/GeneralInfoCard";
import HistoricInfoCard from "../../Components/HistoricInfoCard";
import { HistoricInfoLabel } from "../../Components/HistoricInfoCard/styles";
import RoundButton from "../../Components/RoundButton";
import SectionTitle from "../../Components/SectionTitle";
import UpdatesCard from "../../Components/UpdatesCard";

import GeneralInfoData from "../../data/generalInfoData";
import historicInfoData from "../../data/historicInfoData";
import HistoricInfoData from "../../data/historicInfoData";
import UpdatesData from "../../data/updatesData";

import {
  HistoricContainer,
  HistoricRowCard,
  HistoricSection,
  HistoricTitleRow,
  PageContent,
  SectionRow,
  TopTestCard,
  TopTestContainer,
  TopTestContent,
  TopTestImage,
  TopTestInfo,
  TopTestInfoRow,
  UpdatesRow,
  UpdatesSection,
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
    {HistoricInfoData.historicList.map((item, index) => (
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

const RenderUpdatesData = () => (
  <>
    {UpdatesData.map((item, index) => (
      <UpdatesCard
        key={index}
        date={item.date}
        image={item.image}
        name={item.name}
        status={item.status}
        test={item.test}
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
          <TopTestCard>
            <TopTestImage src={HistoricInfoData.topTest.image} />
            <TopTestContent>
              <TopTestInfo>{HistoricInfoData.topTest.name}</TopTestInfo>
              <HistoricInfoLabel>LICENÇAS DISPONÍVEIS</HistoricInfoLabel>
              <TopTestInfoRow>
                <TopTestInfo>{historicInfoData.topTest.available}</TopTestInfo>
                <RoundButton color="blue">COMPRAR MAIS</RoundButton>
              </TopTestInfoRow>
            </TopTestContent>
          </TopTestCard>
        </TopTestContainer>
      </HistoricSection>
      <UpdatesSection>
        <SectionTitle text="Atualizações importantes" />
        <UpdatesRow>{RenderUpdatesData()}</UpdatesRow>
      </UpdatesSection>
    </PageContent>
  );
}

export default Dashboard;
