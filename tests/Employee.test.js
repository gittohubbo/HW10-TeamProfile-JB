const Employee = require("../lib/employee");

test('check that an employee is created',() => {

    let employee = new Employee("name", "id", "name@email");

    expect(employee.getName()).toMatch("name");
    expect(employee.getId()).toMatch("id");
    expect(employee.getEmail()).toMatch("name@email");
});