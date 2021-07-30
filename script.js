var currentPriceInput = document.querySelector('#current-price')
var purchasePriceInput = document.querySelector('#purchase-price')
var stockQuantityInput = document.querySelector('#stock-quantity')
var checkAction = document.querySelector('#check')
var resultText = document.querySelector('#result-text')

function giveResult(event) {
  event.preventDefault()

  var currentPrice = parseFloat(currentPriceInput.value)
  var purchasePrice = parseFloat(purchasePriceInput.value)
  var stockQuantity = parseInt(stockQuantityInput.value)

  if (currentPrice > purchasePrice) {
    var percentProfit = (
      ((currentPrice - purchasePrice) / purchasePrice) *
      100
    ).toFixed(2)
    var absoluteProfit = (
      (currentPrice - purchasePrice) *
      stockQuantity
    ).toFixed(2)
    console.log('Percent Profit:', percentProfit)
    console.log('Absolute Profit:', absoluteProfit)
    resultText.textContent =
      'You gained ' +
      percentProfit +
      '%. Your total profit is ' +
      absoluteProfit +
      '.'
  } else if (currentPrice < purchasePrice) {
    var percentLoss = (
      ((purchasePrice - currentPrice) / purchasePrice) *
      100
    ).toFixed(2)
    var absoluteLoss = ((purchasePrice - currentPrice) * stockQuantity).toFixed(
      2
    )
    console.log('Percent Loss:', percentLoss)
    console.log('Absolute Loss:', absoluteLoss)
    resultText.textContent =
      'You lost ' + percentLoss + '%. Your total loss is ' + absoluteLoss + '.'
  } else if (currentPrice === purchasePrice) {
    resultText.textContent = 'Perfectly balanced!'
  }
}

checkAction.addEventListener('click', giveResult)
