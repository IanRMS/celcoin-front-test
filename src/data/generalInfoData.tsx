import baselinePersonOutline from "@iconify-icons/ic/baseline-person-outline";
import bxTestTube from "@iconify-icons/bx/bx-test-tube";

import COLORS from "../constants/colors";

const GeneralInfoData = [
  {
    number: 26,
    label: "Pacientes ativos",
    result: 30,
    iconColor: `${COLORS.blue}`,
    icon: baselinePersonOutline,
    tipLabel: "Pacientes totais",
    tipNumber: 268,
    tipNumberColor: `${COLORS.green}`,
  },
  {
    number: 306,
    label: "Testes realizados",
    result: -10,
    iconColor: `${COLORS.blue}`,
    icon: bxTestTube,
    tipLabel: "Testes totais",
    tipNumber: 1265,
    tipNumberColor: `${COLORS.green}`,
  },
  {
    number: 139,
    label: "Testes concluídos",
    result: 30,
    iconColor: `${COLORS.green}`,
    icon: bxTestTube,
    tipLabel: "Teste totais concluídos",
    tipNumber: 10.55,
    tipNumberColor: `${COLORS.green}`,
  },
  {
    number: 11,
    label: "Pacientes ativos",
    result: -3,
    iconColor: `${COLORS.red}`,
    icon: bxTestTube,
    tipLabel: "Testes totais cancelados",
    tipNumber: 618,
    tipNumberColor: `${COLORS.red}`,
  },
];

export default GeneralInfoData;
