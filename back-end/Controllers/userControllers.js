const User = require("../Models/userSchema");
const bcrypt = require("bcrypt");
const salt = 12;
const { createToken } = require("../Config/createToken");

const signUp = async (req, res) => {
    const { email, password, userName } = req.body;
    const checked = await User.findOne({ email: email });
    const checked2 = await User.findOne({ userName: userName });
    try {
        if (checked) {
            return res.status(400).json({ message: "user already exists" });
        } else {
            if (checked2) {
                return res
                    .status(400)
                    .json({ message: "user name already exists" });
            } else {
                const hashed = await bcrypt.hash(password, salt);
                const newUser = new User({ ...req.body, password: hashed });
                const token = createToken(newUser._id);
                await newUser.save();
                return res.json({
                    message: "user added successfully",
                    userID: newUser._id,
                    token,
                });
            }
        }
    } catch (error) {
        console.log(error);
        res.json(error.message);
    }
};

const logIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.json({ message: "bad credentials" });
        } else {
            const checkPass = await bcrypt.compare(password, user.password);
            if (!checkPass) {
                return res.json({ message: "bad credentials" });
            } else {
                const token = createToken(user._id);
                return res.json({
                    message: "user logedIN successfully",
                    userID: user._id,
                    token,
                });
            }
        }
    } catch (error) {
        console.log(error);
        res.json(error.message);
    }
};

const logOut = async (req, res) => {
    try {
        const emptyToken = "";
        return res.json(emptyToken);
        // res.redirect("/");
    } catch (error) {
        console.log(error);
        res.json(error.message);
    }
};

const getAllUsers = async (req, res) => {
    try {
        const data = await User.find().select(["userName", "role"]);
        return res.json({ message: "users found", data });
    } catch (error) {
        console.log(error);
        res.json(error.message);
    }
};

const deleteUser = async (req, res) => {
    try {
        const data = await User.findByIdAndDelete(req.params.userid, {
            new: true,
        });
        return res.json({ message: "user deleted successfully", data });
    } catch (error) {
        console.log(error);
        res.json(error.message);
    }
};

const getUser = async (req, res) => {
    try {
        const data = await User.findById(req.params.userid, {
            password: 0,
        }).populate("posts", ["blog.title", "blog.introduction"]);
        return res.json({ message: "User found", data });
    } catch (error) {
        console.log(error);
        res.json(error.message);
    }
};

module.exports = { getUser, getAllUsers, deleteUser, signUp, logIn, logOut };
