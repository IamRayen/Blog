const { Router } = require("express");
const router = Router();
const authCheck = require("../Middlewares/authMiddleware");
const moderatorMiddleware = require("../Middlewares/moderatorMiddleware");
const ownerMiddleware = require("../Middlewares/ownerMiddleware");
const {
    getAllBlogCard,
    getBlog,
    addNewBlog,
    deleteBlog,
    editBlog,
    verifyBlog,
} = require("../Controllers/blogControllers");

router.get("/Home", getAllBlogCard);
router.get("/:blogid", getBlog);
router.post("/:userid/addblog",authCheck, moderatorMiddleware, addNewBlog);
router.delete("/:userid/:blogid/delete",authCheck, ownerMiddleware, deleteBlog);
router.put("/:userid/:blogid/edit",authCheck, moderatorMiddleware, editBlog);
router.put("/:userid/:blogid/verify",authCheck, ownerMiddleware, verifyBlog);

module.exports = router;
