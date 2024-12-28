import bcrypt from "bcryptjs";

const users = [
    {
        name: 'Admin Doe',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'John Doe',
        email: 'john@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
    {
        name: 'Jany Doe',
        email: 'jany@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
];

export default users;