import user from "../../types/user";

export default interface iUserManager {
    getAllUsers(): user[];
    getUserByUserId(userId: string): user;
    searchUsers(): user[];
}