import mongoose from "mongoose";

const Schema = mongoose.Schema;

const profileSchema = new Schema({
    adminName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    instrument: {
        type: String,
    },
    about: {
        type: String,
    },
    phone: {
        type: String,
    },
    pic: {
        type: String,
        required: true,
    },
    facebook: {
        type: String,
    },
    instagram: {
        type: String,
    },
    linkedin: {
        type: String,
    }
}, {
    timestamps: true
});

const Profile = mongoose.model("Profile", profileSchema);
export default Profile;