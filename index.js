const express = require("express");
const port = 9000;
const path = require("path");

let app = express();

app.set("view engine", "ejs");
path.join("views", "views");
app.use(express.urlencoded());
app.use(express.static('assets'));

let contactList = [
  {
    name: "Pulkit",
    phone: 12345,
  },
  {
    name: "Raghav",
    phone: 757657,
  },
  {
    name: "Amit",
    phone: 4367465,
  },
  {
    name: "Sachin",
    phone: 46545675,
  },
  {
    name: "Ankit",
    phone: 2345345,
  },
];

app.get("/", (req, res) => {
  res.render("home", {
    title: 'Contact-list',
    contact_list : contactList});
});

app.post('/create-contact', (req, res)=>{
    console.log(req.body.name);
    console.log(req.body.phone);
    contactList.push(req.body);
    return res.redirect('/');
})

app.get('/delete-contact')

app.listen(port, (err) => {
  if (err) {
    console.log("Error while running the server");
  }
  console.log("Server is smoothly running on port", port);
});
