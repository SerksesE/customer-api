const Sequelize = require('sequelize')
const sequelize = require('../db')

const Company = sequelize.define('companies', {
  companyId: {
    type: Sequelize.INTEGER,
    field: 'company_id',
  },
  name: {
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
  tableName: 'companies'
})

module.exports = Company