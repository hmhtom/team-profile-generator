const Manager = require("../lib/Manager");

const name = "Alex";
const id = "3034d";
const email = "example@gmail.com";
const officeNumber = "B201";
const manager = new Manager(name, id, email, officeNumber);

describe("Manager", () => {
  describe("Initialization", () => {
    it("create instance of Manager with correct properties", () => {
      expect(manager).toBeInstanceOf(Manager);
      expect(manager.name).toBe(name);
      expect(manager.id).toBe(id);
      expect(manager.email).toBe(email);
      expect(manager.officeNumber).toBe(officeNumber);
    });
  });
  describe("getRole", () => {
    it("return Manager", () => {
      expect(manager.getRole()).toBe("Manager");
    });
  });
});
