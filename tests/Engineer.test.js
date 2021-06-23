const Engineer = require("../lib/engineer");

test('check that an engineer is created',() => {

    let enginner = new Engineer("name", "id", "name@email");

    expect(enginner.getName()).toMatch("name");
    expect(enginner.getId()).toMatch("id");
    expect(enginner.getEmail()).toMatch("name@email");
});