import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
import Profile from "../models/ProfileModel.js";
import generateToken from "../utils/generateToken.js";

// @desc Auth User & get token
// @Route Post /api/users/login
// @Access Public
const authUser = asyncHandler(async (req, res) => {
  let sess = req.session;
  const { email, password } = req.body;

  const user = await User.findOne({
    email,
  });

  // && ( await user.matchPassword(password))

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);

    sess.userId = user._id;
    // console.log(sess);
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error(" Invalid email or password ");
  }
});

// @desc Update Admin
// @Route PUT /api/users/profile
// @Access Admin
const updateAdmin = asyncHandler(async (req, res) => {
  const { adminName, about, email, pic, phone, instrument, facebook, instagram, linkedin } =
    req.body;
  const profileExist = await Profile.findOne({});

  if (profileExist) {
    profileExist.adminName = adminName || profileExist.adminName;

    // profileExist.email = email || profileExist.email;
    profileExist.email = email;

    // profileExist.about = about || profileExist.about;
    profileExist.about = about;

    // profileExist.phone = phone || profileExist.phone;
    profileExist.phone = phone;

    // profileExist.address = address || profileExist.address;
    profileExist.instrument = instrument;

    // profileExist.job = job || profileExist.job;
    profileExist.facebook = facebook;

    // profileExist.birthDate = birthDate || profileExist.birthDate;
    profileExist.instagram = instagram;
    profileExist.linkedin = linkedin;

    profileExist.pic = pic || profileExist.pic;

    const updatedUser = await profileExist.save();

    res.json({
      adminName: updatedUser.adminName,
      email: updatedUser.email,
      about: updatedUser.about,
      instrument: updatedUser.instrument,
      phone: updatedUser.phone,
      pic: updatedUser.pic,
      facebook: updatedUser.facebook,
      instagram: updatedUser.instagram,
      linkedin: updatedUser.linkedin,
    });
  } else {
    const profile = await Profile.create({
      adminName,
      about,
      email,
      pic,
      phone,
      instrument,
      facebook,
      linkedin,
      instagram,
    });

    if (profile) {
      res.json({
        adminName: profile.adminName,
        email: profile.email,
        about: profile.about,
        instrument: profile.instrument,
        phone: profile.phone,
        pic: profile.pic,
        instagram: profile.instagram,
        linkedin: profile.linkedin,
        facebook: profile.facebook,
      });
    } else {
      res.status(400);
      throw new Error("Invalid User Data");
    }
  }

  console.log(req.body);
  res.send("UPdate Admin");
});
// @desc Register User
// @Route Post /api/users
// @Access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExist = await User.findOne({
    email,
  });

  if (userExist) {
    res.status(400);
    throw new Error(" User Already Exists");
  }
  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    generateToken(res, user._id);
    res.json({
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error("Invalid User Data");
  }
});

// @desc Update User
// @Route PUT /api/users/:id
// @Access Private
const updateUserById = asyncHandler(async (req, res) => {
  res.send("111");
});
// @desc GET Admin Profile
// @Route GET /api/users/getadmin
// @Access Private
const getAdminProfile = asyncHandler(async (req, res) => {
  const admin = await Profile.find({});
  res.json(admin);
});

// @desc LogOut $ clear user cookies
// @Route Post /api/users/logout
// @Access Public
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  req.session.destroy();
  res.status(200).json({
    messaage: "Logged Out Successfully",
  });
});

export {
  authUser,
  registerUser,
  updateAdmin,
  updateUserById,
  logoutUser,
  getAdminProfile,
};
