// const express = require('express')
exports.readUsers = (req,res) =>{
    return res.status(200).json({
        success : true,
        message : "Read Users"
    })
}

exports.getUser = (req,res) =>{
    return res.status(200).json({
        success : true,
        message : "Detail User"
    })
}

exports.createUsers = (req,res) =>{
    return res.status(200).json({
        success : true,
        message : "Create User Successfully"
    })
}

exports.updateUsers = (req,res) =>{
    return res.status(200).json({
        success : true,
        message : "Update User Successfully"
    })
}

exports.deleteUsers = (req,res) =>{
    return res.status(200).json({
        success : true,
        message : "Delete User Successfully"
    })
}
