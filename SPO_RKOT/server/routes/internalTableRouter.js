const Router = require('express')
const router = new Router()

const internalTableController = require('../controllers/internalTableController')


router.post('/create', internalTableController.create)

router.post('/getAll', internalTableController.getAll)
router.post('/getAllByExternalTableId', internalTableController.getAllByExternalTableId)

router.post('/changeDataById', internalTableController.changeDataById)

router.post('/delete', internalTableController.destroy)


module.exports = router