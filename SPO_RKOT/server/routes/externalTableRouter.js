const Router = require('express')
const router = new Router()
const externalTableController = require('../controllers/externalTableController')



router.post('/create', externalTableController.create)

router.post('/getAll', externalTableController.getAll)

router.post('/delete', externalTableController.destroy)

router.put('/changeDataById', externalTableController.changeDataById)




module.exports = router