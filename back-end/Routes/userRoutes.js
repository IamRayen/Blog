const { Router } = require('express')
const router = Router()
const authCheck = require('../Middlewares/authMiddleware')
const moderatorMiddleware = require('../Middlewares/moderatorMiddleware')
const ownerMiddleware = require('../Middlewares/ownerMiddleware')
const {getUser,getAllUsers,deleteUser,signUp,logIn,logOut} = require('../Controllers/userControllers')

router.post('/login',logIn)
router.post('/signup',signUp)
router.get('/:userid',authCheck,moderatorMiddleware,getUser)
router.get('/:userid/allusers',authCheck,moderatorMiddleware,getAllUsers)
router.delete('/:userid/delete',authCheck,ownerMiddleware,deleteUser)
router.get('/:userid/logout',authCheck,logOut)

module.exports = router