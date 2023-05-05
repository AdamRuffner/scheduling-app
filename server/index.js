const express = require ('express');
const app = express();
const PORT = 4000;

app.use(express.urlencoded({ extended: true }));
const database= [];

const generateId = () => Math.random().toString(36).substring(2,10);

app.use(express.json());

app.get('/api', (req,res) => {
    res.json({
        message: "hello world",
    });
});

app.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    let result = database.filter((user) => {user.email === email || user.username === username});

    if(result.length === 0) {
        database.push({
            id: generateId(),
            username,
            password,
            email,
        });
        return res.json({ message: "Account Created Successfully", database})
    } else {
        res.json({message: "User Already Exists!"}) }
});

app.post('/login', (req,res) => {
    const { username, password } = req.body;
    let result = database.filter((user) => {
        user.username === username && user.password === password
    });
    if(result.length ===0) {
        return res.json({
            error_message: "Incorrect Username or Password"
        })
    } else {
        res.json({
            message: "Login Successful",
            data: {
                _id: result[0].id,
                _email: result[0].email,
            },
        });
    };
});

app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`)
})