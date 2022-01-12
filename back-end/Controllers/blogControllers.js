// const Blog = require("../Models/blogSchema");
// const User = require("../Models/userSchema");

// const addNewBlog = async (req, res) => {
//     try {
//         const newBlog = new Blog(req.body);
//         await newBlog.save();
//         await User.findByIdAndUpdate(req.params.userid, {
//             $push: { posts: newBlog },
//         });
//         return res.json({ message: "BlogAdded", newBlog });
//     } catch (error) {
//         console.log(error);
//         res.json(error.message);
//     }
// };

// const verifyBlog = async (req, res) => {
//     try {
//         const data = await Blog.findOneAndUpdate(
//             { _id: req.params.blogid },
//             { verified: true },
//             { new: true }
//         );
//         return res.json({ message: "BlogVerified", data: data });
//     } catch (error) {
//         console.log(error);
//         res.json(error.message);
//     }
// };

// const editBlog = async (req, res) => {
//     try {
//         const data = await Blog.findByIdAndUpdate(req.params.blogid, req.body, {
//             new: true,
//         });
//         return res.json({ message: "BlogUpdated", data });
//     } catch (error) {
//         console.log(error);
//         res.json(error.message);
//     }
// };

// const deleteBlog = async (req, res) => {
//     try {
//         const data = await Blog.findByIdAndDelete(req.params.blogid, {
//             new: true,
//         });
//         return res.json({ message: "BlogDeleted", data });
//     } catch (error) {
//         console.log(error);
//         res.json(error.message);
//     }
// };

// const getBlog = async (req, res) => {
//     try {
//         const data = await Blog.findById(req.params.blogid);
//         return res.json({ message: "BlogFound", data });
//     } catch (error) {
//         console.log(error);
//         res.json(error.message);
//     }
// };

// const getAllBlogCard = async (req, res) => {
//     try {
//         const data = await Blog.find(
//             {},
//             {
//                 "blog.title": 1,
//                 "blog.introduction": 1,
//                 BackgroundImg: 1,
//                 _id: 1,
//             }
//         );
//         return res.json({ message: "BlogsFound", data });
//     } catch (error) {
//         console.log(error);
//         res.json(error.message);
//     }
// };

// module.exports = {
//     getAllBlogCard,
//     getBlog,
//     addNewBlog,
//     deleteBlog,
//     editBlog,
//     verifyBlog,
// };
