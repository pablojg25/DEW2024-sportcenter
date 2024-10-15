class Instructor {
  #basicSalary
  ledActivities = []

  constructor (name, basicSalary = 500) {
    this.name = name
    this.#basicSalary = basicSalary
  }

  get salary () {
    return this.#basicSalary
  }
}

module.exports = Instructor
