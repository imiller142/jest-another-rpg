const Potion = require('../lib/Potion.js');

jest.mock('../lib/Potion')

test('creates a health potion object', () => {
    const potion = new Potion();

    expect(potion.name).toEqual(expect.any(String));
    expect(potion.name.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
});