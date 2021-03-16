import { expect, describe, test } from "@jest/globals"
import FluentSQLBuilder from "../src/fluentSQL"

const data = [
  {
    id: 1,
    name: "Daniel",
    category: "Intern"
  },
  {
    id: 2,
    name: "Maria",
    category: "Developer"
  },
  {
    id: 3,
    name: "Sonia",
    category: "Manager"
  },
]


describe('Test suite for FluentSQL Builder', () => {
  test('#for should return a FluentSQLBuilder instance', () => {
    const result = FluentSQLBuilder.for(data)
    const expected = new FluentSQLBuilder({ database: data})
    expect(result).toStrictEqual(expected)
  })
  test('#build should return the empty object instance', () => {
    const result = FluentSQLBuilder.for(data).build()
    const expected = data
    expect(result).toStrictEqual(expected)
  })
  test('#limit given a collection it should limit results', () => {
    const result = FluentSQLBuilder.for(data).limit(1).build()
    const expected = [data[0]]
    console.log(" RESULTADO",expected)
    expect(result).toStrictEqual(expected)
  })
  test.todo('#where given a collection it should filter data')
  test.todo('#select given a collection it should return only specifc fields')
  test.todo('#orderBy given a collection it should order by filter name')

  test.todo('pipeline')
})
