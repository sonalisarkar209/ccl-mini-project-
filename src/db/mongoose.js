const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://root:root@cluster0.m6umq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})
