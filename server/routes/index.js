import { Router } from "express";

const router = Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("This is a feedback management server.");
});

export { router };
