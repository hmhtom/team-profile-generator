const Engineer = require("../lib/Engineer");

const name = "Alex";
const id = "3034d";
const email = "example@gmail.com";
const github = "hmhtom";
const engineer = new Engineer(name, id, email, github);

describe("Engineer", () => {
  describe("Initialization", () => {
    it("create instance of Engineer with correct properties", () => {
      expect(engineer).toBeInstanceOf(Engineer);
      expect(engineer.name).toBe(name);
      expect(engineer.id).toBe(id);
      expect(engineer.email).toBe(email);
      expect(engineer.github).toBe(github);
    });
  });
  describe("getRole", () => {
    it("return Engineer", () => {
      expect(engineer.getRole()).toBe("Engineer");
    });
  });
  describe("getGithub", () => {
    it("Get Engineer github account", () => {
      expect(engineer.getGithub()).toBe(engineer.github);
    });
  });
});
