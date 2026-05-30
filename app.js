const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`
    <html>
      <body>
        <h1>CI/CD Demo on AWS EC2</h1>
        <p>Deployed automatically with GitHub Actions.</p>
        <p>Updated automatically after git push.</p>
      </body>
    </html>
  `);
});

app.listen(port, "0.0.0.0", () => {
  console.log(`App running on port ${port}`);
});
