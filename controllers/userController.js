const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/userSchema");

exports.createUser = async (req, res) => {
    console.log(req.name)
    try {
        const {name, email, team } = req.body;
        const user = await User.create({ name, email, team });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.getUser = async (req, res) => {
    try {
        const users = await User.findOne({email : req.body.email});
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

   // res.send("Is working")
}

exports.updateUser = async (req, res) => {
    try {
        const {email, team } = req.body;
        const user = await User.findOneAndUpdate({email : email}, {team : team});
        res.status(201).json(user);  
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}