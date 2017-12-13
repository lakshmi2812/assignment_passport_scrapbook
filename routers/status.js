const express = require("express");
const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  FB.api("/1527977323952849/photos", function(response) {
    if (response && !response.error) {
      /* handle the result */
      res.render("welcome/status", { response });
    }
  });
});

module.exports = router;
