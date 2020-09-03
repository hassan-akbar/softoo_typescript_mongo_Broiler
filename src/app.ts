import express = require("express");
import * as bodyParser from "body-parser";
import * as personController from "./controllers/person_controller";

const app = express();
const port: number = 5000;
app.set("port", port);

app.use(bodyParser.json());

app.get("/persons", personController.all_personal);

app.get("/persons/:id", personController.get_person);

app.put("/persons", personController.add_person);

app.delete("/persons/:id", personController.delete_person);

app.post("/persons/:id", personController.UpdatePerson);
app.listen(port, () =>
  console.log("App is running on https://localhost:%d", app.get("port"))
);

//working code
