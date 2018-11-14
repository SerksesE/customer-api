const Sequelize = require('sequelize')
const sequelize = require('../db')

const Companies = sequelize.define('companies', {
  companyId: {
    type: Sequelize.INTEGER,
    field: 'company_id',
  },
  Name: {
    type: Sequelize.STRING,
    field: 'company_name',
    allowNull: false
  },
  foundingYear: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  desciption: {
    type: Sequelize.STRING,
    allowNull: true
  }
}, {
  timestamps: false,
  tableName: 'customers'
})

module.exports = Companies