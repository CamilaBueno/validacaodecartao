function isValidCard() {
  var result = 0;
  var multResult;
  var cardNumber = prompt("Digite o número do seu cartão de crédito:");
  var cardNumberReverse = cardNumber.split('').reverse();


  if (!cardNumber || cardNumber.length != 16) {
    alert("Digite corretamente o número do seu cartão de crédito!");
    return;
  }

  for (var i = 0; i < cardNumber.length; i++) {
    if (i % 2 !== 0) {
      result += parseInt(cardNumber[i]);
    } else {
      multResult = cardNumber[i] * 2;
      if (multResult >= 10) {
        multResult = multResult - 9;
      }
      result += multResult;
    }
  }

  if (result % 10 === 0) {
    document.write("O número do cartão de crédito é válido!");
  } else {
    document.write("O número do cartão de crédito é inválido!");
  }

}
isValidCard();



