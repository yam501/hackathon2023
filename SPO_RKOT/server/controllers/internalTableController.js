const ApiError = require('../error/ApiError')
const { InternalTable } = require('../model/model')

class InternalTableController {


    async create(req, res, next) {
        try {
            const {
                externalTableId, companyName,

                voiceServiceNonAcessibility, voiceServiceCutOffRatio, speechQualityonCallbasis, negativeMOSSamplesRatio,
                undeliveredSMSRatio, averageSMSTime,

                HTTPSessionFailureRatio, HTTPULMeanUserDataRate, HTTPDLMeanUserDataRate, HTTPSessionTime,

                testVoiceConnectionQuantity, POLQA, negativeMOSSamplesCount, SMSQuantity, quantityConnection,
                quantitySessions
            } = req.body
            const table = await InternalTable.create({
                externalTableId, companyName,

                voiceServiceNonAcessibility, voiceServiceCutOffRatio, speechQualityonCallbasis, negativeMOSSamplesRatio,
                undeliveredSMSRatio, averageSMSTime,

                HTTPSessionFailureRatio, HTTPULMeanUserDataRate, HTTPDLMeanUserDataRate, HTTPSessionTime,

                testVoiceConnectionQuantity, POLQA, negativeMOSSamplesCount, SMSQuantity, quantityConnection,
                quantitySessions
            })
            return res.json(table)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res, next) {
        try {
            return res.json(await InternalTable.findAll())
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAllByExternalTableId(req, res, next) {
        try {
            const { externalTableId } = req.body
            const table = await InternalTable.findAll({ where: { externalTableId: externalTableId } })
            return res.json(table)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async changeDataById(req, res, next) {
        try {
            const { id,
                externalTableId, companyName,

                voiceServiceNonAcessibility, voiceServiceCutOffRatio, speechQualityonCallbasis, negativeMOSSamplesRatio,
                undeliveredSMSRatio, averageSMSTime,

                HTTPSessionFailureRatio, HTTPULMeanUserDataRate, HTTPDLMeanUserDataRate, HTTPSessionTime,

                testVoiceConnectionQuantity, POLQA, negativeMOSSamplesCount, SMSQuantity, quantityConnection,
                quantitySessions
            } = req.body
            const table = await InternalTable.update({
                externalTableId, companyName,

                voiceServiceNonAcessibility, voiceServiceCutOffRatio, speechQualityonCallbasis, negativeMOSSamplesRatio,
                undeliveredSMSRatio, averageSMSTime,

                HTTPSessionFailureRatio, HTTPULMeanUserDataRate, HTTPDLMeanUserDataRate, HTTPSessionTime,

                testVoiceConnectionQuantity, POLQA, negativeMOSSamplesCount, SMSQuantity, quantityConnection,
                quantitySessions
            },
                { where: { id: id } })
            return res.json(table)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async destroy(req, res, next) {
        try {
            const { id } = req.body
            const table = await InternalTable.destroy({ where: { id: id } })
            return res.json(table)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }



}


module.exports = new InternalTableController()