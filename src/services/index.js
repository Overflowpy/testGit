const router = require("router");

router.post("/", (req, res) => {
    res.status(200).json({
        success: true,
        error: "",
    });
});