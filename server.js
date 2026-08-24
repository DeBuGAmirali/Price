const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

// Serve index.html and other static files
app.use(express.static(__dirname));

// API test endpoint
app.get("/api/status", (req, res) => {
    res.json({
        success: true,
        message: "Iran Market server is working",
        time: new Date().toISOString()
    });
});

// Send index.html for the main page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Iran Market server running on port ${PORT}`);
});
