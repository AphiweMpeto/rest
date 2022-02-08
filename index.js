const express = require('express')
const projectRoutes = require("./routes/projectRoutes");
// const testimonialRoutes = require("./testimonialRoutes")

const app = express()
app.use(express.json());

app.get("/", (req, res) => {
    res.send({ msg: "My Portfolio's backend" });
});

app.use("/projects", projectRoutes);
// app.use("/testimonials", testimonialRoutes)

app.listen(5000);


