// Libraries
import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";

// App
const app = express();

export const initApp = async () => {
  // Set middlewares
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(helmet());

  app.use("/get", (req, res) => {
    return res.status(200).send({ success: true });
  });

  const server = app.listen(8000, () => {
    console.log(`The server is running on port 8000`);
  });

  return { app, server };
};

initApp();
