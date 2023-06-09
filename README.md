# Google-books-api

## Как запустить:

- должен быть установлен docker;

- в .env добавить свой [API KEY](https://developers.google.com/books/docs/v1/using#APIKey);

- перейти в папку с проектом и в терминале ввести команды:

  - `docker build -t google-books .`
  - `docker run -p 80:80 google-books`

- после запуска контейнера доступен по адресу: http://localhost

## технологии:

- vite;
- react;
- typescript;
- scss;
- mobx;
- axios;
- bootstrap;
- nginx;
- docker;

## Возможности:

- поиск книг по названию;
- фильтрация:
  - all,
  - art,
  - biography,
  - computers,
  - history,
  - medical,
  - poetry;
- сортировка:

  - relevance,
  - newest;

  ![preview1](https://github.com/XCrones/google-books/blob/main/preview/image_2023-03-23_18-20-21.png)

  ![preview1](https://github.com/XCrones/google-books/blob/main/preview/image_2023-03-23_18-20-31.png)
