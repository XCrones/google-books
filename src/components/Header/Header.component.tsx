import { FormEvent, useMemo, useState } from "react";
import { EBookCategory, EBookOrder, ERoutes } from "../../models/enum";
import { observer } from "mobx-react-lite";
import { BooksApiStore } from "../../store";
import style from "./Header.module.scss";
import { NavLink, useNavigate } from "react-router-dom";

const HeaderComponet = () => {
  const navigate = useNavigate();

  const [category, SetCategory] = useState<EBookCategory>(EBookCategory.ALL);
  const [orderBy, SetOrderBy] = useState<EBookOrder>(EBookOrder.RELEVANCE);
  const [search, SetSearch] = useState<string>("");
  const [errorMessage, SetErrorMessage] = useState<string | string[]>("");

  const parseCateories = () => Object.values(EBookCategory);
  const memoizeCategories = useMemo(() => parseCateories(), [EBookCategory]);

  const parseSorting = () => Object.values(EBookOrder);
  const memoizeSortings = useMemo(() => parseSorting(), [EBookOrder]);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    SetErrorMessage("");

    if (search.length > 0) {
      if (window.location.pathname != ERoutes.HOME) {
        navigate(ERoutes.HOME);
      }

      try {
        await BooksApiStore.fetchBooks({ category, orderBy, search });
      } catch (error) {
        SetErrorMessage(String(error));
      }

      return;
    }

    SetErrorMessage("required field");
  };

  return (
    <header id={style.header} className="font-iter">
      <nav className="text-center pt-4">
        <NavLink className="text-capitalize text-white text-decoration-none fs-2" to={ERoutes.HOME}>
          google books
        </NavLink>
      </nav>
      <form onSubmit={(e) => onSubmit(e)} className="container pb-4">
        <div className="d-flex flex-row flex-wrap justify-content-between my-3">
          <div className="text-center flex-fill pe-2">
            <label className="text-capitalize d-inline-block py-2 text-white">category:</label>
            <select
              className="form-select form-select-md"
              onChange={(e) => SetCategory(e.target.value as EBookCategory)}
              defaultValue={EBookCategory.ALL}
            >
              {memoizeCategories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="text-center flex-fill ps-2">
            <label className="text-capitalize d-inline-block py-2 text-white">sorting:</label>
            <select
              onChange={(e) => SetOrderBy(e.target.value as EBookOrder)}
              className="form-select form-select-md"
              defaultValue={EBookCategory.ALL}
            >
              {memoizeSortings.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="d-flex align-item-center">
          <div className="me-2 flex-fill">
            <input
              onFocus={() => (errorMessage.length > 0 ? SetErrorMessage("") : "")}
              onChange={(e) => SetSearch(e.target.value)}
              className="form-control "
              type="search"
              placeholder="Search book"
              aria-label="Search"
            />
          </div>
          <button className="btn btn-info" type="submit">
            Search
          </button>
        </div>
        <span className="text-white">{errorMessage}</span>
      </form>
    </header>
  );
};

export default observer(HeaderComponet);
