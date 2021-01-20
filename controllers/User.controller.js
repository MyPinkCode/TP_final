const User = require('../models/user.model');

// ajouter 
exports.user_create = async (req, res) => {
    const user = await User.create(req.body);
    if (!user) {
       return res.status(401).json({
            status: "failed",
            msg : "invalid request body"
        });
    }
    res.status(201).json({
        status: "success",
        user 
    });
}



// recherche
exports.get_userByName = async (req, res) => {
    const users = await User.find({ nom: req.params.nom });
    if (!users) {
        return res.status(404).json({
            status: "failed",
            msg: "none found"
        });
    }
    res.status(200).json({
        status: "success",
        users: users
    });
}


// modifier
exports.user_update = async (req, res) => {
    const user = await User.findOneAndUpdate({ login: req.params.login }, req.body);
    if (!user) {
        return res.status(401).json({
            status: "failed",
            msg: "update failed"
        });
    }
    res.status(203).json({
        status: "success",
        
    });
}

// get all
exports.users_read = async (req, res) => {
    const users = await User.find();
    if (!users) {
        return res.status(404).json({
            status: "failed",
            msg: "not found"
        });
    }
    res.status(200).json({
        status: "success",
        users 
    });
}

// supp
exports.user_delete = async (req, res) => {
    const user = await User.findOneAndDelete({ login: req.params.login });
    if (!user) {
        return res.status(404).json({
            status: "failed",
            msg: "delete failed"
        });
    }
    res.status(203).json({
        status: "success",

    });
}
