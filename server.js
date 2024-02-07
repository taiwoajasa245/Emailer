var qs = require('qs');
var fs = require('fs');
var http = require('http');
const querystring = require('querystring');
var port = process.env.PORT || 4040;
var email = require("./utils/email");

var server = http.createServer((req, res) => {
    console.log("request made on " + req.url);
    // res.writeHead(200, { 'Content-Type': 'text/html' });

    if (req.url === "/") {
        fs.readFile("./public/index.html", 'utf8', (err, data) => {
            if (err) throw err;
            res.end(data)
        });

    } else if (req.method === 'POST' && req.url === "/send-mail") {
        // Handle form submission on a POST request
        let body = '';

        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', () => {
            // Parse the form data
            const formData = querystring.parse(body);

            // Get the input field value
            const inputValue = String(formData.subject);

            const keyValuePairs = inputValue.split(/\r\n/);
            const parsedObject = {};

            keyValuePairs.forEach((pair) => {
                const [key, value] = pair.split('=');
                parsedObject[key] = value || ''; // Assign an empty string if the value is not provided
            });

            const inputVal = parsedObject;


            // Send the input field value back in the response
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({
                Output: [
                    {
                        subject: keyValuePairs[0],
                        message: inputVal.message,
                        firstName: inputVal.firstName,
                        lastName: inputVal.lastName,
                        Email: inputVal.email
                    }
                ],
            }, null, 3));

        });
        email();
    }


});





server.listen(port, () => {
    console.log(`listening for request on port ${port}`)
});