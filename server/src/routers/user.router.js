import userRole from "../constants/user.role.js";
import UserController from "../controllers/user.controller.js";
import userValidation from "../validations/user.validation.js";

export default [
    {
        controller: UserController,
        methods: [
            // Create user
            {
                httpMethod: "post",
                path: "/user",
                method: "createUser",
                schema: userValidation.create,
            },
            // View user
            {
                httpMethod: "get",
                path: "/user",
                method: "viewUser",
                roles: [userRole.USER],
            },
            // Update profile
            {
                httpMethod: "put",
                path: "/user/profile",
                method: "updateProfile",
                roles: [userRole.USER],
                schema: userValidation.updateProfile,
            },
            // Update profile picture
            {
                httpMethod: "put",
                path: "/user/profile/picture",
                method: "updatePicture",
                roles: [userRole.USER],
                file: "profile_picture",
            },
            // Update password
            {
                httpMethod: "put",
                path: "/user/password",
                method: "updatePassword",
                roles: [userRole.USER],
                schema: userValidation.udpatePassword,
            },
        ],
    },
];
