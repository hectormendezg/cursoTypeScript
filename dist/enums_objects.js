"use strict";
// Enums
var Roles;
(function (Roles) {
    Roles[Roles["User"] = 0] = "User";
    Roles[Roles["Admin"] = 1] = "Admin";
    Roles[Roles["SuperAdmin"] = 2] = "SuperAdmin";
})(Roles || (Roles = {}));
//console.log(Roles.Admin);
//Objects
const roles = {
    User: 0,
    Admin: 1,
    SuperAdmin: 2,
};
console.log(roles.User);
