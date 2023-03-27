function updatePrice() {
    let selectColor = document.getElementById("color");
    let selectSize = document.getElementById("size");
    let priceColor = selectColor.options[selectColor.selectedIndex].value;
    let priceSize = selectSize.options[selectSize.selectedIndex].value;
    let totalPrice = parseInt(priceColor) + parseInt(priceSize);
    document.getElementById("price").innerHTML = totalPrice;
  }