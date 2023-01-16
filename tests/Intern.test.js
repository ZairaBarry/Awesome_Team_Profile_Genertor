const Intern = require('../lib/Intern');

describe("Intern", () => {
    describe("getSchool", () => {
        test("returns school of Intern", () => {
            const testIntern = new Intern("Zaira B", "1", "zaira@gmail.com", "SJH");
            const school = "SJH";

            const result = testIntern.getSchool();

            expect(result).toEqual(school);

        })
    });

    describe("getRole", () => {
        test("returns role  of Intern", () => {
            const testIntern = new Intern("Zaira B", "1", "zaira@gmail.com", "SJH");
            const role = "Intern";

            const result = testIntern.getRole();

            expect(result).toEqual(role)
        });
    });
})