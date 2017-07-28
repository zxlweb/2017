let express = require('express');
let app = express();
app.get('/', (req, res) => {
    console.log(req, res);
    res.send('Hello World');
})
app.listen(3000, function () {
    console.log('Example app listen at 3000')
})