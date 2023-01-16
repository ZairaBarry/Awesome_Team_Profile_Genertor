const Manager = require('../lib/Manager');

describe("Manager", () => {
    describe("getOfficeNumber", () => {
        test("returns the office number of Manager", () => {
            const testManager = new Manager("Zaira B", "1", "zaira@gmail.com", "666");
            const officeNumber = "666";

            const result = testManager.getOfficeNumber();

            expect(result).toEqual(officeNumber);
        });
    });

    describe("getRole", () => {
        test("returns role  of Manager", () => {
            const testManager = new Manager("Zaira B", "1", "zaira@gmail.com", "666");
            const role = "Manager";

            const result = testManager.getRole();

            expect(result).toEqual(role)
        })
    })

})