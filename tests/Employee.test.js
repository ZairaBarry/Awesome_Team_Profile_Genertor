const Employee = require("../lib/Employee")

describe("Employee", () => {
    describe("getName", () => {
        test('returns name of the employee', () => {
            const testEmployee = new Employee("Zaira B", "1", "zaira@gmail.com");
            const name = "Zaira B";

            const result = testEmployee.getName();

            expect(result).toEqual(name)
        });
    });

    describe("getId", () => {
        test("returns  id of the employee", () => {
            const testEmployee = new Employee("Zaira B", "1", "zaira@gmail.com");
            const id = '1';

            const result = testEmployee.getId();

            expect(result).toEqual(id)
        });
    });

    describe("getEmail", () => {
        test("returns email of employee", () => {
            const testEmployee = new Employee("Zaira B", "1", "zaira@gmail.com");
            const email = "zaira@gmail.com";

            const result = testEmployee.getEmail();

            expect(result).toEqual(email)
        });
    });

    describe("getRole", () => {
        test("returns role of employee", () => {
            const testEmployee = new Employee("Zaira B", "1", "zaira@gmail.com");
            const role = "Employee";

            const result = testEmployee.getRole();

            expect(result).toEqual(role)
        });
    });
}
)
