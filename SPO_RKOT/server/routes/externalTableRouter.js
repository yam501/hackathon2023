const Router = require('express')
const router = new Router()
const externalTableController = require('../controllers/externalTableController')


//Адрес запроса на создание элемента таблицы
router.post('/create', externalTableController.create)

//Адрес запроса получения всех элементов таблицы
router.post('/getAll', externalTableController.getAll)

//Адрес запроса удаления элемента таблицы
router.post('/delete', externalTableController.destroy)

//Адрес запроса изменения элемента таблицы
router.put('/changeDataById', externalTableController.changeDataById)




module.exports = router