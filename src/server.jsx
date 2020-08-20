const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.static('public'));
app.use('/products/:productId', express.static('public'));

app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})