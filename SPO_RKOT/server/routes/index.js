const Router = require('express')
const router = new Router()
const externalTableRouter = require('./externalTableRouter')
const internalTableRouter = require('./internalTableRouter')



//Адрес к методам внешней таблицы
router.use('/externalTable', externalTableRouter)

//Адрес к методам внутренней таблицы
router.use('/internalTable', internalTableRouter)






module.exports = router