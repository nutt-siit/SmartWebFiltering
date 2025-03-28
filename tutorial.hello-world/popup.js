
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("rpcButton").addEventListener("click", test_rpc);
});

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

  
var test_rpc = async function () {

  //console.log('This is for senior project!');
  /* for (const tab of tabs) {
    const pathname = new URL(tab.url).pathname.slice("/docs".length);
    console.log(tab.url);
  } */
  callRPC_Get().then(console.log);;

};





