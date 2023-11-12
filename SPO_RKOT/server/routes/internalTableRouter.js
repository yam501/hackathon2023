const Router = require('express')
const router = new Router()

const internalTableController = require('../controllers/internalTableController')

//Адрес запроса на создание элемента таблицы
router.post('/create', internalTableController.create)

//Адрес запроса получения всех элементов таблицы
router.post('/getAll', internalTableController.getAll)

//Адрес запроса получения всех элементов таблицы по вторичному ключу
router.post('/getAllByExternalTableId', internalTableController.getAllByExternalTableId)

//Адрес запроса изменения элемента таблицы
router.post('/changeDataById', internalTableController.changeDataById)


//Адрес запроса удаления элемента таблицы(не используется)
router.post('/delete', internalTableController.destroy)


module.exports = router