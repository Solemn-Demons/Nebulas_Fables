const router = require("express").Router();
const { User } = require("../../models");

//create new user for login
router.post("/", async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
    });
    //save the session data
    req.sessionsave(() => {
      req.session.userId = userData.id;
      req.session.username = userData.username;
      req.session.loggedIn = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//login finding  username
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { username: req.body.username },
    });

    if (!userData) {
      res.statusMessage(400).json({
        message: "Username or Password is incorrect. Please try again.",
      });
      return;
    }
    console.log('this is wrong');
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({
        message: "Username or Password is incorrect. Please try again.",
      });
      return;
    }
    console.log('this is also wrong');
    req.session.save(() => {
      req.session.userId = userData.id;
      req.session.username = userData.username;
      req.session.loggedIn = true;

      res.json({
        user: userData,
        message: "You have been successfully logged in!",
      });
    });
  } catch (err) {
    res.status(404).end();
  }
});

//logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status.apply(404).end();
  }
});

// Pass the loggedIn variable to pages to render Sign-up, sign-ou, or login dynamically
req.session.save(() => {
  req.session.user_id = userData.id;
  req.session.loggedIn = true;

  res.render('homepage', { loggedIn: true }); 
});

module.exports = router;
