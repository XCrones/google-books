import { Route, Routes } from "react-router-dom";
import { ERoutes } from "../../models/enum";
import { BookPage, HomePage } from "../../pages";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path={ERoutes.HOME} element={<HomePage />}></Route>
      <Route path={ERoutes.BOOK} element={<BookPage />}></Route>
    </Routes>
  );
};

export default RoutesComponent;
