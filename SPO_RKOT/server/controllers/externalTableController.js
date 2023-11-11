const ApiError = require('../error/ApiError')
const { ExternalTable } = require('../model/model')

class ExternalTableController {


    async create(req, res, next) {
        try {
            const { district, place, startDate, endDate } = req.body
            const table = await ExternalTable.create({ district, place, startDate, endDate })
            return res.json(table)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res, next) {
        try {
            return res.json(await ExternalTable.findAll())
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async changeDataById(req, res, next) {
        try {
            const { id, district, place, period } = req.body
            const table = await ExternalTable.update({ district, place, period }, { where: { id: id } })
            return res.json(table)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async destroy(req, res, next) {
        try {
            const { id } = req.body
            const table = await ExternalTable.destroy({ where: { id: id } })
            return res.json(table)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }



}


module.exports = new ExternalTableController()