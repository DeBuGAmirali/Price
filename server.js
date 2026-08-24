const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get("/api/status", (req, res) => {
    res.json({
        success: true,
        message: "Iran Market server is working",
        time: new Date().toISOString()
    });
});

app.get("/api/market", async (req, res) => {
    try {
        const response = await fetch(
            "https://persiantoolbox.ir/api/market"
        );

        if (!response.ok) {
            throw new Error(
                `API returned ${response.status}`
            );
        }

        const data = await response.json();

        res.json(data);

    } catch (error) {

        console.error(
            "Market API error:",
            error.message
        );

        res.status(500).json({
            ok: false,
            error: "Market API unavailable"
        });
    }
});

app.get("/", (req, res) => {
    res.sendFile(
        path.join(__dirname, "index.html")
    );
});

app.listen(
    PORT,
    "0.0.0.0",
    () => {
        console.log(
            `Iran Market server running on port ${PORT}`
        );
    }
);
