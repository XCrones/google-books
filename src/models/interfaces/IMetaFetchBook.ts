import { EBookCategory, EBookOrder } from "../enum";

export interface IMetaSearchBook {
  category: EBookCategory;
  orderBy: EBookOrder;
  search: string;
}
