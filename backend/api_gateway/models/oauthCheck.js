const oauthCheck = function (req, res, next) {
  if (!req.user) {
    // is not logged in
    console.log("is not logged in");
    //console.log(req.user);
    res.status(401).json("is not logged in");
  } else {
    // is logged in
    console.log("req.user");
    console.log(req.user);
    // console.log(req.user);
    next();
  }
};
module.exports = oauthCheck;
