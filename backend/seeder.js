import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();
import colors from 'colors'

import users from './data/user.js'
import User from './models/userModel.js'
import profile from "./data/profile.js";
import Profile from './models/ProfileModel.js'

import connectDB from './config/db.js'

connectDB();

const importData = async () => {
    try {
        await User.deleteMany();
        await Profile.deleteMany();

        const createdUsers = await User.insertMany(users);
        const adminUser = createdUsers[0]._id;

        await Profile.insertMany(profile);
        console.log('Data Imported'.green.inverse);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
};

const destroyData = async() => {
    try {
        await User.deleteMany();
        await Profile.deleteMany();

        console.log('Data Destroyed'.red.inverse);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
};

if(process.argv[2] === '-d'){
    destroyData();
}else{
    importData();
};
