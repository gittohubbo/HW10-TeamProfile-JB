const Manager = require("../lib/manager");

test('check that a manager is created',() => {

    let manager = new Manager("name", "id", "name@email");

    expect(manager.getName()).toMatch("name");
    expect(manager.getId()).toMatch("id");
    expect(manager.getEmail()).toMatch("name@email");
});