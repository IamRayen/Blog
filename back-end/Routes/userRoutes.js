const { Router } = require('express')
const router = Router()
const authCheck = require('../Middlewares/authMiddleware')
const ownerMiddleware = require('../Middlewares/ownerMiddleware')
const {getUser,getAllUsers,deleteUser,signUp,logIn,logOut} = require('../Controllers/userControllers')
const userMiddleware = require('../Middlewares/userMiddleware')

router.post('/login',logIn)
router.post('/signup',signUp)
router.get('/user/:userid',userMiddleware,getUser)
router.get('/user/:userid/allusers',authCheck,getAllUsers)
router.delete('/user/:userid/delete',userMiddleware,deleteUser)
router.get('/user/:userid/logout',authCheck,logOut)

module.exports = router