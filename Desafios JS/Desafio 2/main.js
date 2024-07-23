let victoriesBalance = 0
let level = ''

function balanceCalculator(victories, defeats) {
  let balance = victories - defeats

  return balance
}

victoriesBalance = balanceCalculator(100, 15)

if (victoriesBalance <= 10) {
  level = 'Ferro'
} else if (victoriesBalance >= 11 && victoriesBalance <= 20) {
  level = 'Bronze'
} else if (victoriesBalance >= 21 && victoriesBalance <= 50) {
  level = 'Prata'
} else if (victoriesBalance >= 51 && victoriesBalance <= 80) {
  level = 'Ouro'
} else if (victoriesBalance >= 81 && victoriesBalance <= 90) {
  level = 'Diamante'
} else if (victoriesBalance >= 91 && victoriesBalance <= 100) {
  level = 'Lendário'
} else if (victoriesBalance >= 101) {
  level = 'Imortal'
}

console.log(
  `O Herói tem de saldo de ${victoriesBalance} está no nível de ${level}`
)
