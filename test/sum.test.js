const mm = require('../week10/lectOne/mm');

test('check add,div', () => {
    expect(mm.sum(2, 3)).toBe(5);
    expect(mm.div(2, 2)).toBe(1);
    expect(mm.div(2, 0)).toBe(Infinity);
});

test('check multyply', () => {
    expect(mm.mul(2, 4)).toBe(8);
    expect(mm.mul(0, 5)).toBe(0);
});
