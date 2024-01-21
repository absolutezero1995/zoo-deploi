const router = require("express").Router();

const MainPage = require("./views/MainPage.routes");
const SignupPage = require("./views/Signup.routes");
const LoginPage = require("./views/Login.routes");
const AnimalsPage = require("./views/AnimalsPage.routes");

const ApiSignIn = require("./api/Signin.routes");
const ApiSignup = require("./api/Signup.routes");
const ApiLogout = require("./api/Logout.routes");
const ApiAnimalRouter = require("./api/Animals.routes");
const ApiLikeRouter = require("./api/Likes.routes");
const ApiRatesRouter = require("./api/Rates.routes");
const ApiCheck = require('./api/Check.routes');

router.use("/", MainPage);
router.use("/", SignupPage);
router.use("/", LoginPage);
router.use("/api", ApiSignup);
router.use("/api", ApiSignIn);
router.use("/api", ApiLogout);
router.use('/api', ApiCheck);
router.use("/animals", AnimalsPage);
router.use("/api/animals", ApiAnimalRouter);
router.use("/api/likes", ApiLikeRouter);
router.use("/api/rates", ApiRatesRouter);

module.exports = router;
