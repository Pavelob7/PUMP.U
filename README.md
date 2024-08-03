# Как задеплоить сие чудо?

1. Установить npm и nginx
   ```
   sudo apt install nodejs npm
   sudo apt install nginx
   ```
2. Скачать всё с данной ветки (readme можно удалить)
3. Засунуть на сервак
4. Перейти, куда запихнули
   ```
   cd путь_до_папки_с_фронтом
   ```
5. Прописать:
    ```
   npm install --production
   npm start
   ```
6. По умолчанию запустится приложение по адресу localhost:3000
7. Зайти в папку nginx\conf и в файле nginx.conf в разделе  location / { прописать:
   ```
    proxy_pass http://localhost:3000;  # Порт, на котором запущен Next.js сервер
   ```
8. Прописать:
   ```
   start nginx
   ```
