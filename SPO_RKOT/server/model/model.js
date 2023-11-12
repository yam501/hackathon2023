const sequelize = require('../db')
const { DataTypes } = require('sequelize')

// Описание моделей таблиц в бд

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

    companyName: { type: DataTypes.STRING, allowNull: true },

    voiceServiceNonAcessibility: { type: DataTypes.FLOAT, allowNull: true },
    voiceServiceCutOffRatio: { type: DataTypes.FLOAT, allowNull: true },
    speechQualityonCallbasis: { type: DataTypes.FLOAT, allowNull: true },
    negativeMOSSamplesRatio: { type: DataTypes.FLOAT, allowNull: true },

    undeliveredSMSRatio: { type: DataTypes.FLOAT, allowNull: true },
    averageSMSTime: { type: DataTypes.FLOAT, allowNull: true },


    HTTPSessionFailureRatio: { type: DataTypes.FLOAT, allowNull: true },
    HTTPULMeanUserDataRate: { type: DataTypes.FLOAT, allowNull: true },
    HTTPDLMeanUserDataRate: { type: DataTypes.FLOAT, allowNull: true },
    HTTPSessionTime: { type: DataTypes.FLOAT, allowNull: true },

    testVoiceConnectionQuantity: { type: DataTypes.FLOAT, allowNull: true },
    POLQA: { type: DataTypes.FLOAT, allowNull: true },
    negativeMOSSamplesCount: { type: DataTypes.FLOAT, allowNull: true },
    SMSQuantity: { type: DataTypes.FLOAT, allowNull: true },
    quantityConnection: { type: DataTypes.FLOAT, allowNull: true },
    quantitySessions: { type: DataTypes.FLOAT, allowNull: true }

}, { timestamps: false })

//Описание связи таблиц в бд

ExternalTable.hasMany(InternalTable)
InternalTable.belongsTo(ExternalTable)





module.exports = {
    ExternalTable, InternalTable
}