const fs = require('fs');
const email = "MrDsWireArt@gmail.com"

function encodeText(file) {
    let text = fs.readFileSync(`text/${file}.txt`)
    return encodeURIComponent(text.toString())
}

function encodeEmail() {
    subject = encodeText("email_subject")
    body = encodeText("email_body")
    email_cmd = `location.href='mailto:${email}?subject=${subject}&body=${body}';`
    fs.writeFile("views/encoded_email_cmd.txt", email_cmd, (err) => {
        if (err) throw err;
    })
}

encodeEmail()
console.log("Email updated!")

