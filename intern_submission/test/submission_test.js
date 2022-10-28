const solution = require("../submission.js");

//given inputs
let input1 = {
  "2020-01-01": 4,
  "2020-01-02": 4,
  "2020-01-03": 6,
  "2020-01-04": 8,
  "2020-01-05": 2,
  "2020-01-06": -6,
  "2020-01-07": 2,
  "2020-01-08": -2,
};

let input2 = {
  "2020-01-01": 6,
  "2020-01-04": 12,
  "2020-01-05": 14,
  "2020-01-06": 2,
  "2020-01-07": 4,
};

let input3 = {
  "2020-01-06": -10,
  "2020-01-05": 50,
};


//outputs corresponding to above inputs
let output1 = { Mon: -6, Tue: 2, Wed: 2, Thu: 4, Fri: 6, Sat: 8, Sun: 2 };
let output2 = { Mon: 2, Tue: 4, Wed: 6, Thu: 8, Fri: 10, Sat: 12, Sun: 14 };
let output3 = { Mon: -10, Tue: 0, Wed: 10, Thu: 20, Fri: 30, Sat: 40, Sun: 50 };



QUnit.module("solution");
QUnit.test("Test for input dictionary 1", (assert) => {
  assert.deepEqual(solution(input1), output1);
});
QUnit.test("Test for input dictionary 2", (assert) => {
  assert.deepEqual(solution(input2), output2);
});
QUnit.test("Test for input dictionary 3", (assert) => {
  assert.deepEqual(solution(input3), output3);
});

