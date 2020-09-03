"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePerson = exports.delete_person = exports.add_person = exports.get_person = exports.all_personal = void 0;
var persons_1 = require("./../persons");
//GET-ALL - returns a list of the enteries in the data set
exports.all_personal = function (req, res) {
    var persons = persons_1.default.find(function (err, persons) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(persons);
        }
    });
};
//GET-Ind - returns a signle person based on an id
exports.get_person = function (req, res) {
    persons_1.default.findById(req.params.id, function (err, personal) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(personal);
        }
    });
};
//PUT - puts a person in the db
exports.add_person = function (req, res) {
    var person = new persons_1.default(req.body);
    person.save(function (err) {
        if (err) {
            return err;
        }
        else {
            res.send(person);
        }
    });
};
//DELETE - delets a person
exports.delete_person = function (req, res) {
    persons_1.default.deleteOne({ _id: req.params.id }, function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Succesfully deteled Person");
        }
    });
};
//POST - updates based on ID
exports.UpdatePerson = function (req, res) {
    persons_1.default.findByIdAndUpdate(req.params.id, req.body, function (err, person) {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Sucessfully updated");
        }
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uX2NvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJjb250cm9sbGVycy9wZXJzb25fY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx3Q0FBa0M7QUFJbEMsMERBQTBEO0FBRS9DLFFBQUEsWUFBWSxHQUFHLFVBQUMsR0FBWSxFQUFFLEdBQWE7SUFDcEQsSUFBSSxPQUFPLEdBQUcsaUJBQU0sQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFRLEVBQUUsT0FBWTtRQUMvQyxJQUFJLEdBQUcsRUFBRTtZQUNQLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDZjthQUFNO1lBQ0wsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNuQjtJQUNILENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBQ0Ysa0RBQWtEO0FBRXZDLFFBQUEsVUFBVSxHQUFHLFVBQUMsR0FBWSxFQUFFLEdBQWE7SUFDbEQsaUJBQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsVUFBQyxHQUFRLEVBQUUsUUFBYTtRQUNyRCxJQUFJLEdBQUcsRUFBRTtZQUNQLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDZjthQUFNO1lBQ0wsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNwQjtJQUNILENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBRUYsK0JBQStCO0FBRXBCLFFBQUEsVUFBVSxHQUFHLFVBQUMsR0FBWSxFQUFFLEdBQWE7SUFDbEQsSUFBSSxNQUFNLEdBQUcsSUFBSSxpQkFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVsQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBUTtRQUNuQixJQUFJLEdBQUcsRUFBRTtZQUNQLE9BQU8sR0FBRyxDQUFDO1NBQ1o7YUFBTTtZQUNMLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbEI7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUVGLDBCQUEwQjtBQUVmLFFBQUEsYUFBYSxHQUFHLFVBQUMsR0FBWSxFQUFFLEdBQWE7SUFDckQsaUJBQU0sQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxVQUFDLEdBQVE7UUFDaEQsSUFBSSxHQUFHLEVBQUU7WUFDUCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2Y7YUFBTTtZQUNMLEdBQUcsQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQztTQUN4QztJQUNILENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBQ0YsNEJBQTRCO0FBRWpCLFFBQUEsWUFBWSxHQUFHLFVBQUMsR0FBWSxFQUFFLEdBQWE7SUFDcEQsaUJBQU0sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFFLFVBQUMsR0FBUSxFQUFFLE1BQVc7UUFDdEUsSUFBSSxHQUFHLEVBQUU7WUFDUCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2Y7YUFBTTtZQUNMLEdBQUcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDIn0=