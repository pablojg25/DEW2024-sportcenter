class Client {
  #age

  constructor (name, age = 50) {
    this.name = name
    if (age < 0) {
      this.#age = 50
    } else {
      this.#age = age
    }
  }

  get category () {
    if (this.age < 22) {
      return 'Promesa'
    } else if (this.age > 40) {
      return 'Veterano'
    } else {
      return 'Senior'
    }
  }

  turnedYearsOld () {
    this.age++
  }

  get age () {
    return this.#age
  }

  set age (age) {
    if (age >= 0) {
      this.#age = age
    }
  }
}

module.exports = Client
