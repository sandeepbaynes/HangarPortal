import agency from "../../types/agency";

export default interface iAgencyRepository {
    getAllAgencies(): agency[];
}