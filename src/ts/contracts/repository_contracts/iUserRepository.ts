import user from "../../types/user";

export default interface iUserRepository {
    getAllUsers(): user[];
}