const sequelize = require('../db')
const { DataTypes } = require('sequelize')



const ExternalTable = sequelize.define('externalTable', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    district: { type: DataTypes.STRING, allowNull: true },
    place: { type: DataTypes.STRING, allowNull: true },
    startDate: { type: DataTypes.DATEONLY, allowNull: true },
    endDate: { type: DataTypes.DATEONLY, allowNull: true }



}, { timestamps: false })

const InternalTable = sequelize.define('internalTable', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    externalTableId: { type: DataTypes.INTEGER, allowNull: false },

    companyName: { type: DataTypes.STRING, allowNull: false },

    voiceServiceNonAcessibility: { type: DataTypes.FLOAT, allowNull: false },
    voiceServiceCutOffRatio: { type: DataTypes.FLOAT, allowNull: false },
    speechQualityonCallbasis: { type: DataTypes.FLOAT, allowNull: false },
    negativeMOSSamplesRatio: { type: DataTypes.FLOAT, allowNull: false },

    undeliveredSMSRatio: { type: DataTypes.FLOAT, allowNull: false },
    averageSMSTime: { type: DataTypes.FLOAT, allowNull: false },


    HTTPSessionFailureRatio: { type: DataTypes.FLOAT, allowNull: false },
    HTTPULMeanUserDataRate: { type: DataTypes.FLOAT, allowNull: false },
    HTTPDLMeanUserDataRate: { type: DataTypes.FLOAT, allowNull: false },
    HTTPSessionTime: { type: DataTypes.FLOAT, allowNull: false },

    testVoiceConnectionQuantity: { type: DataTypes.FLOAT, allowNull: false },
    POLQA: { type: DataTypes.FLOAT, allowNull: false },
    negativeMOSSamplesCount: { type: DataTypes.FLOAT, allowNull: false },
    SMSQuantity: { type: DataTypes.FLOAT, allowNull: false },
    quantityConnection: { type: DataTypes.FLOAT, allowNull: false },
    quantitySessions: { type: DataTypes.FLOAT, allowNull: false },

}, { timestamps: false })



ExternalTable.hasMany(InternalTable)
InternalTable.belongsTo(ExternalTable)





module.exports = {
    ExternalTable, InternalTable
}