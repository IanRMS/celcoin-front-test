import { Redirect, Route, Switch } from "react-router-dom";

import Dashboard from "./Pages/Dashboard";
import Pacientes from "./Pages/Pacientes";
import Testes from "./Pages/Testes";
import Configuracoes from "./Pages/Configuracoes";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/dashboard" />
      </Route>
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/pacientes" exact component={Pacientes} />
      <Route path="/testes" exact component={Testes} />
      <Route path="/configuracoes" exact component={Configuracoes} />
    </Switch>
  );
};

export default Routes;
