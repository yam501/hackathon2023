const sequelize = require('../db')
const { DataTypes } = require('sequelize')



const ExternalTable = sequelize.define('externalTable',{
    id:{ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    district: { type: DataTypes.STRING }


})











// module.exports = {
    
// }