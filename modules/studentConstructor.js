class student {
  constructor(name, absence, rating = []) {
    this._name = name
    this._absence = absence
    this._rating = rating
  }

  get name() {
    return this._name
  }

  get absence() {
    return this._absence
  }

  get rating() {
    return this._rating
  }

  average() {
    let rating = this._rating

    const total = rating.reduce((previousValue, currentValue) => previousValue + currentValue,
    0)

    

    return total / rating.length
  }
  
  addAbsence() {
    this._absence = this._absence + 1

    console.log('Quantidade atual de faltas: ', this._absence)

    return this._absence
  }
}

module.exports = student
