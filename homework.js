var fs = require("fs");
var terminalText = process.argv;

var htmlTitle = "My First HomeWork Generated by Javascript.";

if (terminalText[3] == undefined) {
    console.log("There was no color specified, so the default white will be used.");

    terminalText[3] = "gray";
}

    var htmlStyle = `
body {
    background-color: ${terminalText[3]};
}`;
var htmlBody = "You May Type Here..";
var htmlFileName = terminalText[2];
var html;

html = `
<!doctype html>

<html lang="en">
    <head>
        <meta charset="utf-8">
            <title>${htmlTitle}</title>
            <meta name="description" content="The HTML5 Herald">
                <meta name="author" content="SitePoint">

                    <link rel="stylesheet" href="css/styles.css?v=1.0">

                    <style>${htmlStyle}</style>
    </headd>

    <body>
        ${htmlBody}
    </body>
</html>`;


if (htmlFileName == "HomeWork" || htmlFileName == undefined) {
    console.log("You are missing a file name, cannot continue. ERROR: 302834u32");
    return;
}

var fullFileName = htmlFileName + ".html";

// utf8 is for the file, unlike in the html template meta charset, which is for the browser.
fs.writeFileSync(fullFileName, html, "utf8");

console.log("Generation of HTML file has been completed! Check your folder.");