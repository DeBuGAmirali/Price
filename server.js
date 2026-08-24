const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get("/api/status", (req, res) => {
    res.json({
        success: true,
        message: "Server is working",
        time: new Date().toISOString()
    });
});

app.get("/api/market", async (req, res) => {
    res.json({
        success: true,
        message: "Market API route is working",
        usd: null,
        eur: null,
        usdt: null,
        gold18: null,
        coin: null
    });
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
