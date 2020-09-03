import mongoose = require("mongoose");
import { AnyARecord } from "dns";

const URI: string =
  "mongodb+srv://hassan:hassan@cluster0.wkvk3.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(URI, (err: any) => {
  if (err) {
    console.log("found an error : " + err.message);
  } else {
    console.log("Successfully Connected!");
  }
});

export const PersonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
});

const Person = mongoose.model("Person", PersonSchema);
export default Person;
