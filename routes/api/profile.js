const express = require("express");
const router = express.Router();

// @route   GET api/profle/test
// @desc    Tests profile route
// @access  public
router.get("/test", (req, res) => {
  res.json({ msg: "Profile works!!!" });
});

module.exports = router;
