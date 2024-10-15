const Activity = require('./activity')

class Instructor {
  #basicSalary

  constructor (name, basicSalary = 500) {
    this.name = name
    this.#basicSalary = basicSalary
    this.ledActivities = []
  }

  get salary () {
    const extraSalary = this.ledActivities.reduce((total, activity) => total + 100 + (activity.assistance * 5), 0)
    return this.#basicSalary + extraSalary
  }

  lead (activity) {
    if (activity instanceof Activity) {
      this.ledActivities.push(activity)
      activity.instructor = this
    }
  }

}

module.exports = Instructor
