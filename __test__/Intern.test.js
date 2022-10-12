const Intern = require("../lib/Intern");

const name = "Alex";
const id = "3034d";
const email = "example@gmail.com";
const school = "U of T";
const intern = new Intern(name, id, email, school);

describe("Intern", () => {
  describe("Initialization", () => {
    it("create instance of Intern with correct properties", () => {
      expect(intern).toBeInstanceOf(Intern);
      expect(intern.name).toBe(name);
      expect(intern.id).toBe(id);
      expect(intern.email).toBe(email);
      expect(intern.school).toBe(school);
    });
  });
  describe("getRole", () => {
    it("return Intern", () => {
      expect(intern.getRole()).toBe("Intern");
    });
  });
  describe("getSchool", () => {
    it("Get Intern's school", () => {
      expect(intern.getSchool()).toBe(intern.school);
    });
  });
});
