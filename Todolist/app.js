const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + '/date.js');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

let items = ["Todo1", "Todo2", "Todo3"];
let workitems = [];

app.get('/', (req, res) => {
    let day = date()
    res.render("list", {listTitle: day, newListItems: items})
});

app.post("/", (req, res) => {
    let item = req.body.newItem
    if (req.body.list === "Work") {
        workitems.push(item);
        res.redirect('/work')
    } else {
        items.push(item)
        res.redirect("/");
    }
});

app.get('/work', (req, res) => {
    res.render("list", {listTitle: "Work List", newListItems: workitems})
})

app.post('/work', (req, res) => {
    let item = req.body.newItem;
    workitems.push(item);
    res.redirect('/work')
})

app.listen(3000, () => {
    console.log("Server started on port 3000")
})