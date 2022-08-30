import { Route, Routes } from "react-router-dom";
import { RoutePath } from "types/routes";

import AuthLogin from "pages/Login";
import CreateUser from "pages/Cadastro";
import HomePage from "pages/Home";
import MyBingo from "pages/Bingo";
import VictoryModal from "components/VictoryModal";
import Teste from "pages/Teste";
import Defeat from "pages/Defeat";
import Ranking from "pages/Ranking";

const Router = () => {
  return (
    <Routes>
      {/* <Route path={'/teste'} element={<VictoryModal />} /> */}
      <Route path={RoutePath.HOMEPAGE} element={<HomePage />} />
      <Route path={RoutePath.TESTE} element={<Teste />} />
      <Route path={RoutePath.AUTHLOGIN} element={<AuthLogin />} />
      <Route path={RoutePath.CREATEUSER} element={<CreateUser />} />
      <Route path={RoutePath.MYBINGO} element={<MyBingo />} />
      <Route path={RoutePath.VICTORYMODAL} element={<VictoryModal />} />
      {/* <Route path={RoutePath.DEFEAT} element={<Defeat drawn_numbers:4  game_time, callRestart, callGetout />} /> */}

      <Route path={RoutePath.RANKING} element={<Ranking />} />
    </Routes>
  );
};

export default Router;
