export interface IBook {
  id: string;
  etag: string;
  volumeInfo: {
    title?: string;
    subtitle?: string;
    authors?: string[];
    description?: string;
    categories?: string[];
    imageLinks?: {
      smallThumbnail: string;
      thumbnail: string;
    };
  };
}
