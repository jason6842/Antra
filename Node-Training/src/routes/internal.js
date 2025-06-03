const { Router } = require("express");
const authorizeRoles = require("../middlewares/authorizeRoles");

const adminRouter = Router();

// Application logics
// admins can do everyhting
// mods can ban users

// admin only
adminRouter.get("/control-board", authorizeRoles("admin"), (req, res) => {
  // console.log("req: ", req.user);
  // if (req.user !== "admin") {
  //   return res.status(403).json({
  //     message: "Access denied. Only admin can access the control board.",
  //   });
  // }
  return res.status(200).json({
    message: "This is the control board",
    data: {
      users: 100,
      activeUsers: 75,
      inactiveUsers: 25,
      newRegistrations: 10,
    },
  });
});

// admin and mod only
adminRouter.patch(
  "/ban-user/:id",
  authorizeRoles("admin", "mod"),
  (req, res) => {
    // if (req.user !== "admin" && req.user !== "mod") {
    //   return res.status(401).json({
    //     message: "Access denied. Only admins and mods can ban users.",
    //   });
    // }
    console.log("banning users...");
    const userId = req.params.id;

    return res.status(200).json({
      message: `User ${userId} has been banned successfully`,
    });
  }
);

module.exports = adminRouter;
