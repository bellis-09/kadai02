const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");

function calc() {
  const price = parseInt(priceElement.value);
  const number = parseInt(numberElement.value);
  window.alert(`${price}円が${number}個。小計は${price * number}円です`);
}

// purchase オブジェクトの生成
let purchase = {
    price: price,
    number: number,
  };


  let purchases = [];

  function add() {
    const price = parseInt(priceElement.value);
    const number = parseInt(numberElement.value);
    const purchase = {
      price: price,
      number: number,
    };
}