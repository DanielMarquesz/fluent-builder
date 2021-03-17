import data from './../data/data.json'
import FluentSQLBuilder from './fluentSQL.js'


const result = FluentSQLBuilder.for(data)
.limit(1)
.where({ registered: /^(2020|2019)/ }) // Initialize with 2020 or 2019
// ^ -> Say that in beginning
// $ -> Say that in the end
// | -> Or Logic operator
.where({ category: /^(security|developer|quality assurance)$/ }) 
// When its required to use parentheses we use like this: /\((Here is your group for search)\)/
.where({ phone: /\((852|850|810)\)/ })
.select(['name', 'company', 'phone', 'category'])
.orderBy('company')
.build()

console.table(result)