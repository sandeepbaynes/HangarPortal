import agency from "./agency";

type user = {
    id: number,
    orgId: string,
    name: string,
    designation: string,
    hangarEmail: string,
    personalEmail: string,
    dateOfJoining: Date,
    dateOfBirth: Date,
    address: string,
    phone: string,
    agency: agency | undefined,
    reportingManager: user | undefined,
    hrManager: user | undefined
}

export default user;