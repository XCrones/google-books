import { useNavigate } from "react-router-dom";
import { IBook } from "../../models/interfaces";
import style from "./Book.module.scss";
import { observer } from "mobx-react-lite";

interface Props {
  book: IBook;
}

const BookComponent = ({ book }: Props) => {
  const navigate = useNavigate();

  const showBook = (id: string) => {
    navigate(`/book/${id}`);
  };

  const imgLink = Object.prototype.hasOwnProperty.call(book.volumeInfo, "imageLinks")
    ? book.volumeInfo.imageLinks?.thumbnail
    : "";

  return (
    <div
      onClick={() => showBook(book.id)}
      key={book.etag}
      className={`d-flex flex-column justify-content-between p-3 bg-danger overflow-hidden rounded-2 ${style.book}`}
      style={{ width: "250px" }}
    >
      <div className={`${style["book__img"]}`}>
        <img className="w-100 h-100" src={imgLink} alt="image book" />
      </div>
      <div className="mt-2">
        <div className={`text-white-50 ${style["book__categories"]}`}>
          {book.volumeInfo.categories?.map((item) => item)}
        </div>
        <div className={`d-inline-block text-truncate text-nowrap fs-6 ${style["book__title"]}`}>
          {book.volumeInfo.title}
        </div>
        <div className={`text-black-50 ${style["book__authors"]}`}>
          <span>{book.volumeInfo.authors?.map((item) => item)}</span>
        </div>
      </div>
    </div>
  );
};

export default observer(BookComponent);
