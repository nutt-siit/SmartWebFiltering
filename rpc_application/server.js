// server.js
const express = require('express');
const app = express();
app.use(express.json());

app.post('/rpc', (req, res) => {
    const { method, params } = req.body;

    // Simple RPC method handler
    const methods = {
        add: ([a, b]) => {
            console.log("test");
            return a+b+5
        },
        multiply: ([a, b]) => calMultipy(a,b),
    };

    if (methods[method]) {
        const result = methods[method](params);
        const testt = "eee";
        res.json({ result, testt });
    } else {
        res.status(400).json({ error: 'Method not found' });
    }
});

function calMultipy(op1,op2) {
    console.log("dddd");
    return op1 * op2;
}

app.listen(3000, () => console.log('RPC Server running on http://127.0.0.1:3000'));