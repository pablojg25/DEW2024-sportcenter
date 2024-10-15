const Service = require('./service')
const Facility = require('./facility')
const Activity = require('./activity')
const Instructor = require('./instructor')

class SportCenter {
  #services = []
  #instructors = []
  constructor (name, fee = 0, membership = 0) {
    this.name = name
    this.fee = fee
    this.membership = membership
  }

  income () {
    return (this.fee * this.membership)
  }

  getServices () {
    return this.#services
  }

  addService (...service) {
    service.forEach((service) => {
      if (service instanceof Service && !(this.#services).includes(service)) {
        this.#services.push(service)
      }
    })
  }

  removeService (service) {
    const pos = this.#services.indexOf(service)
    if (pos !== -1) {
      this.#services.splice(pos, 1)
    }
  }

  getFacilities () {
    return this.#services.filter((service) => service instanceof Facility)
  }

  getActivities () {
    return this.#services.filter((service) => service instanceof Activity)
  }

  orderServicesBy (order) {
    switch (order) {
      case 'name':
        this.#services.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'rating':
        this.#services.sort((a, b) => b.rating - a.rating)
    }
    return this.getServices()
  }

  getInstructors () {
    return this.#instructors
  }

  addInstructor (instructor) {
    if (instructor instanceof Instructor && !this.#instructors.includes(instructor)) {
      this.#instructors.push(instructor)
    }
  }

  removeInstructor (instructor) {
    const pos = this.#instructors.indexOf(instructor)
    if (pos !== -1) {
      this.#instructors.splice(pos, 1)
    }
  }

  listInstructorsActivities () {
    const instructorArr = []
    for (let i = 0; i < this.#instructors.length; i++) {
      instructorArr[i] = [this.#instructors[i].name]
      this.#instructors[i].ledActivities.forEach((activity) => instructorArr[i].push(activity.name))
    }
    return instructorArr
  }

  costServices () {
    return this.#services.reduce((total, service) => total + service.calculateCost(), 0)
  }

  costInstructors () {
    return this.#instructors.reduce((total, instructor) => total + instructor.salary, 0)
  }
}

module.exports = SportCenter
