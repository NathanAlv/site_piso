const $ = document.querySelector.bind(document)

const calculateResult = (event) => {
  event.preventDefault()

  const loanValue = convertStringToFloat('width-type')
  const loanInstallments = convertStringToFloat('length-type')
  const taxRate = convertStringToFloat('price-type')

  const installmentValue = loanValue * taxRate * loanInstallments

  $('#result').innerText = `Valor do piso: R$ ${installmentValue.toFixed(2)}`
}


const convertStringToFloat = (id) => {
  let aux = $(`#${id}`).value
  const value = parseFloat(aux)
  return value
}





