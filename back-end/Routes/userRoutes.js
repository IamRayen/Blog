const { Router } = require('express')
const router = Router()
const authCheck = require('../Middlewares/authMiddleware')
const {getUser,deleteUser,signUp,logIn,editUser} = require('../Controllers/userControllers')
const userMiddleware = require('../Middlewares/userMiddleware')

router.post('/login',logIn)
router.post('/signup',signUp)
router.get('/user/:userid',userMiddleware,getUser)
router.delete('/user/:userid/delete',userMiddleware,deleteUser)
router.put('/user/:userid/edit',authCheck,editUser)

module.exports = router