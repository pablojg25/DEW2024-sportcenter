const Service = require('./service')
const Facility = require('./facility')
const Activity = require('./activity')

class SportCenter {
  #services = []
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
        this.#services.sort((a, b) => b.name.localeCompare(a.name))
    }
    return this.getServices()
  }
}

module.exports = SportCenter
