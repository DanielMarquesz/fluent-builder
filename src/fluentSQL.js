export default class FluentSQLBuilder {

  #database = []
  #limit = 0
  #select = []
  #where = []
  #orderBy = []
  constructor({ database }) {
    this.#database = database
  }

  static for(database) {
    return new FluentSQLBuilder({ database })
  }

  limit(max) {
    this.#limit = max
    return this
  }

  select(props) {
    this.#select = props
    return this
  }

  where(query) {
    const [[prop, selectedValue]] = Object.entries(query)
    const whereFilter = selectedValue instanceof RegExp ? 
    selectedValue : new RegExp(selectedValue)

    this.#where.push({ prop, filter: whereFilter })

    return this
  }

  orderBy(field) {
    this.#orderBy = field
    return this
  }

  #performLimit(results) {
    return this.#limit && results.length === this.#limit
  }

  #performWhere(item) {
    for(const { filter, prop } of this.#where) {
      if(!filter.test(item[prop])) return false
    }

    return true
  }

  #perfomSelect(item) {
    const currentItem = {}
    const entries = Object.entries(item)
    for(const [key, value] of entries) {

      if(this.#select.length && !this.#select.includes(key)) continue
      
      currentItem[key] = value
    }

    return currentItem
  }

  build() {
    const results = []
    for (let item of this.#database) {
      if(!this.#performWhere(item)) continue

      const currentItem = this.#perfomSelect(item)
      results.push(currentItem)

      if(this.#performLimit(results)) break
    }
    return results
  }
}
