const ApiError = require('../error/ApiError')
const { ExternalTable } = require('../model/model')

class ExternalTableController {

    //Создание элемента таблицы
    async create(req, res, next) {
        try {
            const { district, place, startDate, endDate } = req.body
            const table = await ExternalTable.create({ district, place, startDate, endDate })
            return res.json(table)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    //Получение всех элементов таблицы
    async getAll(req, res, next) {
        try {
            return res.json(await ExternalTable.findAll())
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    //Изменение полей элемента таблицы
    async changeDataById(req, res, next) {
        try {
            const { id, district, place, startDate, endDate } = req.body
            const table = await ExternalTable.update({ district, place, startDate, endDate }, { where: { id: id } })
            return res.json(table)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    //Удаление элемента таблицы
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