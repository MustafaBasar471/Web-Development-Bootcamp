const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const { ObjectId } = require("mongodb")
const db = "mongodb+srv://<username>:<password>@mydatabase.o4uztco.mongodb.net/?retryWrites=true&w=majority"

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

try {
    mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    console.log('DB status : OK')
} catch (err) {
    console.log(err)
}

const todoSchema = {
    name: String
};

const Item = mongoose.model("Item", todoSchema);

const item1 = new Item({
    name: "Welcome to your todolist",
});

const item2 = new Item({
    name: "Hit the + button to aff a new item",
});

const item3 = new Item({
    name: "<-- Hit this to delete an item",
});

const defaultItems = [item1, item2, item3];

app.get('/', (req, res) => {
    Item.find({}, (err, foundItems) => {
        if (foundItems.length === 0) {
            Item.insertMany(defaultItems, (err) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log("Successfully saved defaultItems ")
                }
            });
            res.redirect('/')
        } else {
            res.render("list", {listTitle: "Today", newListItems: foundItems})
        }      
    });
});

app.post("/", (req, res) => {
    const itemName = req.body.newItem;
    const item = new Item({
        name: itemName,
    });
    item.save()
    res.redirect('/')
});

app.post('/delete', (req, res) => {
    const id = mongoose.Types.ObjectId(req.body.checkbox.trim());
    Item.findByIdAndRemove(id, (err) => {
        if (!err) {
            console.log("Item Deleted")
            res.redirect('/')
        } else { 
            console.log(err)
        }
    });
});

app.listen(3000, () => {
    console.log("Server started on port 3000")
});