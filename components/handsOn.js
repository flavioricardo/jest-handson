const handsOn = {
  somarUm: (a) => a + 1,
  diminuirDez: (a) => a - 10,
  somarComCallback: (a, retorno) => a + retorno(a),
};

module.exports = handsOn;
