import { BookComponent } from "../../components";
import { BooksApiStore } from "../../store";
import { observer } from "mobx-react-lite";
import SpinLoader from "../../ui/loaders/spin";

const HomePage = () => {
  return (
    <section className="py-4">
      {BooksApiStore.responseAPI.items.length > 0 && (
        <h3 className="text-center fs-6 text-capitalize py-2">found: {BooksApiStore.responseAPI.totalItems} items</h3>
      )}
      <div className="position-fixed top-50 start-50 translate-middle z-3">
        <SpinLoader isHide={BooksApiStore.isPending} backgroundColor={"#30b28e"} />
      </div>
      <div className="d-flex flex-row flex-wrap align-items-center gap-5 justify-content-center">
        {BooksApiStore.responseAPI.items.map((book) => (
          <BookComponent key={book.etag} book={book} />
        ))}
      </div>
      <div className="mt-4 text-center">
        {!BooksApiStore.isHideLoadMore && (
          <button
            onClick={() => BooksApiStore.loadMore()}
            disabled={BooksApiStore.isHideLoadMore}
            type="button"
            className="btn btn-dark "
          >
            Load more
          </button>
        )}
      </div>
    </section>
  );
};

export default observer(HomePage);
