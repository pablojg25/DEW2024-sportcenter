class Service {
  ratings = []

  constructor (name) {
    this.name = name
  }

  giveRating (rating) {
    this.ratings.push(rating)
  }

  get rating () {
    if (this.ratings.length !== 0) return Number(((this.ratings.reduce((a, n) => n + a, 0)) / this.ratings.length).toFixed(2))
    else return 0
  }
}

module.exports = Service
