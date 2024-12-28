# Fiolskolan 

### Install Tools

```
First install Node.js and MongoDB, mongodb compass tools
Second, After you install MongoDB, Make data/db folder in C drive.
Third, You create fiolskolan database and make users collection in mongodb compass.
```

### Install Dependencies (frontend & backend)

```
npm install
cd frontend 
npm install
```

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
Sample User Logins

Admin@gmail.com (Admin)
123456

john@gmail.com (user)
123456

jany@gmail.com (user)
123456
```

---

### Run

```

# Run frontend (:3000) & backend (:5000)
npm run fiolskolan

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```



