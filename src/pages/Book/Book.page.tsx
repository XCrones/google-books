import { BooksApiStore } from "../../store";
import { useNavigate, useParams } from "react-router-dom";
import { IBook } from "../../models/interfaces";
import { useEffect, useState } from "react";
import { EAppError } from "../../models/enum";
import style from "./BookPage.module.scss";

const BookPage = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [error, SetError] = useState("");
  const [book, SetBook] = useState<IBook>({
    id: "",
    etag: "",
    volumeInfo: {
      title: undefined,
      subtitle: undefined,
      authors: undefined,
      description: undefined,
      categories: undefined,
      imageLinks: undefined,
    },
  });

  const getBook = async (id: string | undefined) => {
    try {
      if (!!id) {
        const book = await BooksApiStore.searchBook(String(id));
        if (!!book) {
          SetBook(book);
        } else {
          SetError(String(EAppError.BOOK_NOT_FOUND));
        }
      } else {
        SetError(String(EAppError.BOOK_ID_NOT_FOUND));
      }
    } catch (error) {
      SetError(String(error));
    }
  };

  useEffect(() => {
    const prodId = params.id;
    getBook(prodId);
  }, []);

  const imgLink = Object.prototype.hasOwnProperty.call(book.volumeInfo, "imageLinks")
    ? book.volumeInfo.imageLinks?.thumbnail
    : "";

  return (
    <section className="d-flex flex-column flex-md-row justify-content-between align-items-center py-3 position-relative">
      {!!error && <span className="text-danger position-absolute top-0 start-50 translate-middle-x">{error}</span>}
      <div className={`text-center ${style["book__image"]}`}>
        {!error && <img className="col-md-8 col-lg-6 col-xl-4 col-xxl-3" src={imgLink} alt="image book" />}
      </div>
      <div className={`align-self-start py-2 ${style["book__about"]}`}>
        <button onClick={() => navigate("/")} className="btn btn-primary">
          back
        </button>
        <div className={`py-1 text-muted ${style["boot_categories"]}`}>
          {!!book.volumeInfo.categories &&
            book.volumeInfo.categories.map((category, index) => (
              <span key={category} className="">
                {category}
                {index + 1 != book.volumeInfo.categories?.length ? <>, </> : <>.</>}
              </span>
            ))}
        </div>
        <div className={`fw-bold ${style["book__title"]}`}>{book.volumeInfo.title}</div>
        <div className={`py-3 ${style["book__description"]}`}>{book.volumeInfo.description}</div>
        <div className={`${style["book__authors"]}`}>
          {!!book.volumeInfo.authors && <span>Authors:&nbsp;</span>}
          {!!book.volumeInfo.authors &&
            book.volumeInfo.authors.map((author, index) => (
              <span key={author} className="">
                {author},{index + 1 != book.volumeInfo.authors?.length ? <>, </> : <>.</>}
              </span>
            ))}
        </div>
      </div>
    </section>
  );
};

export default BookPage;
