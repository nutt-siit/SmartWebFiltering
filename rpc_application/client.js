// client.js
async function callRPC_(method, params) {
    console.log("sssss");
    console.log(JSON.stringify({ method, params }));
    const response = await fetch('http://127.0.0.1:3000/rpc', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ method, params })
    });
    const data = await response.json();
    return data;
}

async function callRPC(params) {
    //console.log(JSON.stringify(params));
    console.log(params.title);
    //console.log(JSON.stringify({ method, params }));
    const response = await fetch('http://127.0.0.1:3000/api/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        //body: JSON.stringify({params}),
        body: JSON.stringify({
            title:params.title,
            author:params.author
        }),
    });
    const data = await response.json();
    return data;
}

async function callRPC_Get() {
    console.log("Hello");
    //console.log(JSON.stringify({ method, params }));
    const response = await fetch('http://127.0.0.1:3000/api/books', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    return data;
} 

// Example usage
//callRPC_('add', [2, 4]).then(console.log);       // { result: 5 }
//callRPC('multiply', [4, 6]).then(console.log);  // { result: 20 }
//callRPC({title:"Senior Project", author:"Fresh"});
//callRPC_Get().then(console.log);
callRPC_Get().then(data=>{
    console.log("data :" + JSON.stringify(data));
});