import { Request, Response } from "express";
import Person from "./../persons";
import { send } from "process";
import { pseudoRandomBytes } from "crypto";

//GET-ALL - returns a list of the enteries in the data set

export let all_personal = (req: Request, res: Response) => {
  let persons = Person.find((err: any, persons: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(persons);
    }
  });
};
//GET-Ind - returns a signle person based on an id

export let get_person = (req: Request, res: Response) => {
  Person.findById(req.params.id, (err: any, personal: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(personal);
    }
  });
};

//PUT - puts a person in the db

export let add_person = (req: Request, res: Response) => {
  let person = new Person(req.body);

  person.save((err: any) => {
    if (err) {
      return err;
    } else {
      res.send(person);
    }
  });
};

//DELETE - delets a person

export let delete_person = (req: Request, res: Response) => {
  Person.deleteOne({ _id: req.params.id }, (err: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send("Succesfully deteled Person");
    }
  });
};
//POST - updates based on ID

export let UpdatePerson = (req: Request, res: Response) => {
  Person.findByIdAndUpdate(req.params.id, req.body, (err: any, person: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send("Sucessfully updated");
    }
  });
};
