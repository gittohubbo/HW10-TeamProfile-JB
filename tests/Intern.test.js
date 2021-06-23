const Intern = require("../lib/intern");

test('check that an intern is created',() => {

    let intern = new Intern("name", "id", "name@email");

    expect(intern.getName()).toMatch("name");
    expect(intern.getId()).toMatch("id");
    expect(intern.getEmail()).toMatch("name@email");
});