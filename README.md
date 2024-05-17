# node-express-typescript-api-routers-handlers-readonly-json

This is a minimum TypeScript Node/Express API with router/handler structure and one route that reads from JSON file, README instructions on how to publish at Render.

![grafik](https://github.com/edwardtanguay/node-express-api-routers-handlers-json/assets/446574/cee9e2cf-6518-43f8-b3cf-afee2bbc6e10)

## features

- Node/Express
- TypeScript
  - executed with tsx
  - compiled with tsc
  - watched with nodemon
- ES6 modules
- .env file
- routers
- handlers
- online hosting ready

## setup
  - `npm i`
  - create **.env** file in root directory

```
APP_TITLE = Node/Express API
```

## start
  - `npm run dev`

## hosting

- the **package.json** file has two scripts ready for hosting: `build` and `start`
- if you want to host this backend at a hosting service such as **Render**, use these scripts:
  - build command: `npm i && npm run build`
  - start command: `npm start`
- this template is hosted at https://template-minimal-node-express-api.onrender.com (published as free Render web server which has a 30-60 second delay if API has not been recently accessed)

![grafik](https://github.com/edwardtanguay/template-api-node-express-typescript-es6-modules-lowdb/assets/446574/4c57128a-c648-4c9a-9c3f-509fc1fb72aa)
