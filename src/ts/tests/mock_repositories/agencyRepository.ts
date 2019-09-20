import iAgencyRepository from "../../contracts/repository_contracts/iAgencyRepository";
import agency from "../../types/agency";

export default class agencyRepository implements iAgencyRepository {
    getAllAgencies(): agency[] {
        const agencyCodeWW: agency = {
            id: 1,
            name: "Code Worldwide",
            website: "https://www.codeworldwide.com/"
        };
        const agencyOhg: agency = {
            id: 2,
            name: "Omnicom Healthgroup",
            website: "https://www.omnicomhealthgroup.com/"
        };
        const agencyJavelin: agency = {
            id: 3,
            name: "Javelin",
            website: "https://www.javelinagency.com/"
        };
        const agencyHouse: agency = {
            id: 4,
            name: "House Agency",
            website: "https://www.houseagency.com/"
        };
        return [agencyCodeWW, agencyOhg, agencyJavelin, agencyHouse];
    }

}