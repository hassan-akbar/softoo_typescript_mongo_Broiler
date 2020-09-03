"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonSchema = void 0;
var mongoose = require("mongoose");
var URI = "mongodb+srv://hassan:hassan@cluster0.wkvk3.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(URI, function (err) {
    if (err) {
        console.log("found an error : " + err.message);
    }
    else {
        console.log("Successfully Connected!");
    }
});
exports.PersonSchema = new mongoose.Schema({
    name: { type: String, required: true },
    role: { type: String, required: true },
});
var Person = mongoose.model("Person", exports.PersonSchema);
exports.default = Person;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29ucy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbInBlcnNvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUNBQXNDO0FBR3RDLElBQU0sR0FBRyxHQUNQLHlGQUF5RixDQUFDO0FBRTVGLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLFVBQUMsR0FBUTtJQUM3QixJQUFJLEdBQUcsRUFBRTtRQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ2hEO1NBQU07UUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7S0FDeEM7QUFDSCxDQUFDLENBQUMsQ0FBQztBQUVVLFFBQUEsWUFBWSxHQUFHLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUM5QyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDdEMsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0NBQ3ZDLENBQUMsQ0FBQztBQUVILElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLG9CQUFZLENBQUMsQ0FBQztBQUN0RCxrQkFBZSxNQUFNLENBQUMifQ==