const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("getGithub", () => {
        test("return github of e username of Engineer", () => {
            const testEngineer = new Engineer("Zaira B", "1", "zaira@gmail.com", "zairabarry");
            const github = "zairabarry";

            const result = testEngineer.getGithub();

            expect(result).toEqual(github)
        })
    });

    describe("getRole", () => {
        test("returns role  of engineer", () => {
            const testEngineer = new Engineer("Zaira B", "1", "zaira@gmail.com", "user");
            const role = "Engineer";

            const result = testEngineer.getRole();

            expect(result).toEqual(role)
        })
    })

})