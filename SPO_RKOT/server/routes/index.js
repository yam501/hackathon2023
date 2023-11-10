const Router = require('express')
const router = new Router()
const externalTableRouter = require('./externalTableRouter')
const internalTableRouter = require('./internalTableRouter')




router.use('/externalTable', externalTableRouter)
router.use('/internalTable', internalTableRouter)






module.exports = router