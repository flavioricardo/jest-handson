const sum = (a, b) => {
  return a + b;
};

const callBackFn = (a, helper) => {
  return a + helper(a);
};

module.exports = { sum, callBackFn };
