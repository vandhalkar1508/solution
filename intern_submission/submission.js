
//function solution
function solution(D) {
  //mapping for the indices to day
  const map = {
    0: "Mon",
    1: "Tue",
    2: "Wed",
    3: "Thu",
    4: "Fri",
    5: "Sat",
    6: "Sun",
  };

  let ans = [0, 0, 0, 0, 0, 0, 0];

  //getting day for corresponding dates
  Object.keys(D).forEach((key) => {
    const date = new Date(key);
    let day = date.getDay();
    ans[(day + 6) % 7] += D[key];
  });

  //when no value is present for particular day calculate those values
  for (let i = 0; i < ans.length; i++) {
    if (ans[i] == 0) {
      let j = i;
      while (ans[j] == 0) {
        j++;
      }
      ans[i] = ans[i - 1] + (ans[j] - ans[i - 1]) / (j - i + 1);
    }
  }

  //output dictionary
  let output = {};
  for (let i = 0; i < ans.length; i++) {
    output[map[i]] = ans[i];
  }
  return output;
}

module.exports = solution;
