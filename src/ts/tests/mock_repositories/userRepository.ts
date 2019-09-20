import iUserRepository from './../../contracts/repository_contracts/iUserRepository';
import user from "./../../types/user";
import agency from './../../types/agency';

export default class userRepository implements iUserRepository {
    getAllUsers(): user[] {
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
        const userPradeep: user = {
            id: 1,
            orgId: "01920",
            name: "Pradeep Sudhakar",
            designation: "Managing Director",
            hangarEmail: "pradeep.sudhakar@hangarindia.com",
            personalEmail: "pradeepsudhakar@gmail.com",
            dateOfJoining: new Date("08/20/2018"),
            dateOfBirth: new Date("11/20/1984"),
            address: "Bangalore",
            phone: "234545678",
            agency: undefined,
            reportingManager: undefined,
            hrManager: undefined
        }
        const userMalar: user = {
            id: 3,
            orgId: "12345",
            name: "Malar Mohan",
            designation: "Human Resource",
            hangarEmail: "malar.mohan@hangarindia.com",
            personalEmail: "malarmohan@gmail.com",
            dateOfJoining: new Date("11/21/2018"),
            dateOfBirth: new Date("09/18/1991"),
            address: "Bangalore",
            phone: "0987654321",
            agency: undefined,
            reportingManager: undefined,
            hrManager: undefined
        }
        const userSandeep: user = {
            id: 2,
            orgId: "01144",
            name: "Sandeep Baynes",
            designation: "Team Manager",
            hangarEmail: "sandeep.baynes@hangarindia.com",
            personalEmail: "sandeep.baynes@gmail.com",
            dateOfJoining: new Date("06/13/2018"),
            dateOfBirth: new Date("11/20/1991"),
            address: "Bangalore",
            phone: "9008495851",
            agency: agencyCodeWW,
            reportingManager: userPradeep,
            hrManager: userMalar
        }
        const userNavin: user = {
            id: 4,
            orgId: "34955",
            name: "Navin Sebastian",
            designation: "Project Manager",
            hangarEmail: "navin.sebastian@hangarindia.com",
            personalEmail: "nsebastian@gmail.com",
            dateOfJoining: new Date("08/21/2018"),
            dateOfBirth: new Date("01/03/1989"),
            address: "Bangalore",
            phone: "8459834523",
            agency: agencyOhg,
            reportingManager: userPradeep,
            hrManager: userMalar
        }
        
        return [userPradeep, userMalar, userPradeep, userNavin];
    }
}