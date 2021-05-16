import { Icon } from "@iconify/react";
import ellipsisOutlined from "@iconify-icons/ant-design/ellipsis-outlined";

import HistoricInfoCard from "../../Components/HistoricInfoCard";
import SearchInput from "../../Components/SearchInput";
import SectionTitle from "../../Components/SectionTitle";
import HistoricInfoData from "../../data/historicInfoData";

import {
  PageContent,
  UpdatesSection,
  SectionCard,
  AllPacientsSection,
  AllPacientsListInfo,
  AllPacientsCardHeader,
  IconButton,
  PacientsListContent,
} from "./styles";
import PacientsListData from "../../data/pacientsListData";
import PacientDataCard from "../../Components/PacientDataCard";

const RenderUpdateList = () => (
  <>
    {HistoricInfoData.historicList.map((item, index) => (
      <HistoricInfoCard
        key={index}
        date={item.date}
        name={item.name}
        test={item.test}
        testImage={item.testImage}
      />
    ))}
  </>
);

const RenderPacientData = () => (
  <>
    {PacientsListData.list.map((item, index) => (
      <PacientDataCard
        key={index}
        image={item.image}
        canceled={item.canceled}
        done={item.done}
        pending={item.pending}
        diagnostics={item.diagnostics}
        name={item.name}
      />
    ))}
  </>
);

function Pacientes() {
  return (
    <PageContent>
      <UpdatesSection>
        <SectionTitle text="Atualizações de pacientes" />
        <SectionCard direction="row" scroll>
          {RenderUpdateList()}
        </SectionCard>
      </UpdatesSection>
      <AllPacientsSection>
        <SectionTitle text="Todos os pacientes" />
        <SectionCard direction="column">
          <AllPacientsCardHeader>
            <div>
              <AllPacientsListInfo>Lista de Pacientes(36)</AllPacientsListInfo>
              <SearchInput placeholder="Buscar paciente..." />
            </div>
            <IconButton>
              <Icon icon={ellipsisOutlined} color="#2C2E3D80" width="30" />
            </IconButton>
          </AllPacientsCardHeader>
          <PacientsListContent>{RenderPacientData()}</PacientsListContent>
        </SectionCard>
      </AllPacientsSection>
    </PageContent>
  );
}

export default Pacientes;
