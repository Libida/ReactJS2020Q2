function renderHtml() {
    return `
        <!doctype html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width,initial-scale=1">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Test.js</title></head>
            <body>
               <h1>Hello Masha!</h1>
            </body>
        </html>
    `;
}

module.exports = (req, res) => {
    res.send(renderHtml());
}
