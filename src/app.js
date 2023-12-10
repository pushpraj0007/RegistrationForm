const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
require("./db/connect")
const Register = require("./models/registers");
const port = process.env.PORT || 8000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path));
app.set("view engine", "hbs");     
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.get('/', (req, res)=>{
    // res.send("Hello Bibek")
    res.status(200).render('index');
})
app.post('/', async(req, res)=>{
    try {
        const password = req.body.password;
        const cpassword = req.body.cpassword;
        if(password === cpassword){
            const registerUser = new Register({
                fname: req.body.fname,
                lname: req.body.lname,
                dob: req.body.dob,
                gender: req.body.gender,
                email: req.body.email,
                number: req.body.number,
                password: password,
                cpassword: cpassword,
                address: req.body.address,
                address2: req.body.address2,
                city: req.body.city,
                state: req.body.state,
                pinCode: req.body.pinCode
            })

            const registered = await registerUser.save();
            res.status(201).render("home");
        }else{
            res.send("Password not matched")
        }

    } catch (error) {
        res.status(404).send(error);
    }
})


app.get('/login', (req, res)=>{
    // res.send("Hello Bibek")
    res.status(200).render('login');   
})

app.post('/login', async(req, res)=>{
    try {
        const email = req.body.email;
        const password = req.body.password;

        const userEmail = await Register.findOne({email:email});
        if(userEmail.password === password){
            res.status(201).render("home");
        }else{
            res.send("Invalid Credentials");
        }
    } catch (error) {
        res.status(400).send("Invalid Credentials")
    }
})
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});