import { makeAutoObservable, runInAction } from "mobx";
import { IBook, IMetaSearchBook, IBooks } from "../models/interfaces";
import { axios } from "../config";
import { EAppError, EBookCategory, EBookOrder } from "../models/enum";

export class BooksApiStore {
  private _responseAPI: IBooks = {
    totalItems: 0,
    items: [],
  };

  public isPending = false;
  private _indexPage = 0;
  private _maxResults = 30;
  private _isHideLoadMore = true;
  private _lastResponse: IMetaSearchBook = {
    category: EBookCategory.ALL,
    orderBy: EBookOrder.RELEVANCE,
    search: "",
  };

  constructor() {
    makeAutoObservable(this);
  }

  async fetchBooks(meta: IMetaSearchBook) {
    try {
      this.isPending = true;

      if (meta.search != this._lastResponse.search) {
        this._indexPage = 0;
      }

      // prettier-ignore
      const queries = `${meta.search.trim()}+intitle&orderBy=${meta.orderBy.trim()}&subject=${meta.category.trim()}&startIndex=${Math.max(0, this._indexPage)}&maxResults=${Math.max(10, this._maxResults)}`;

      // prettier-ignore
      const { data } = await axios.get<IBooks>(`/volumes?q=${queries}&key=${import.meta.env.VITE_APP_API_KEY}`);

      if (Object.prototype.hasOwnProperty.call(data, "items") === true) {
        if (meta.search != this._lastResponse.search) {
          runInAction(() => {
            this._responseAPI.items = data.items;
            this._responseAPI.totalItems = data.totalItems;
          });
        } else {
          runInAction(() => {
            this._responseAPI.items = [...this._responseAPI.items, ...data.items];
          });
        }

        runInAction(() => {
          this._isHideLoadMore = false;
          Object.assign(this._lastResponse, meta);
        });

        if (this._responseAPI.totalItems >= this._responseAPI.items.length) {
          runInAction(() => {
            this._isHideLoadMore = false;
          });
        } else {
          runInAction(() => {
            this._isHideLoadMore = true;
          });
        }
      } else {
        runInAction(() => {
          this._lastResponse.search = "";
          this._isHideLoadMore = true;
        });
      }
    } catch (error) {
      runInAction(() => {
        this._lastResponse.search = "";
        this._isHideLoadMore = true;
      });
      throw String(EAppError.ERROR_SEARCH_BOOKS);
    } finally {
      runInAction(() => {
        this.isPending = false;
      });
    }
  }

  async searchBook(id: string): Promise<IBook | null> {
    try {
      runInAction(() => {
        this.isPending = true;
      });

      const book = this._responseAPI.items.find((book) => book.id === id);

      if (!!book) {
        return book;
      }

      const { data } = await axios.get<IBook>(`/volumes/${id.trim()}?key=${import.meta.env.VITE_APP_API_KEY}`);

      if (!!data) {
        return data;
      }

      return null;
    } catch (error) {
      throw String(EAppError.ERROR_SEARCH_BOOK);
    } finally {
      runInAction(() => {
        this.isPending = false;
      });
    }
  }

  async loadMore() {
    if (!!this._lastResponse.search) {
      this._indexPage += 31;
      await this.fetchBooks(this._lastResponse);
    }
  }

  get isHideLoadMore() {
    return this._isHideLoadMore;
  }

  get responseAPI() {
    return this._responseAPI;
  }
}

export default new BooksApiStore();
