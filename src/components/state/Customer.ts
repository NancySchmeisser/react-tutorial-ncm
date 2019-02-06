export default class Customer {
    constructor(company: string,
        street: string,
        houseNumber: string,
        zipCode: string,
        city: string) {
        this.company = company;
        this.street = street;
        this.houseNumber = houseNumber;
        this.zipCode = zipCode;
        this.city = city;
    }

    company: string
    street: string
    houseNumber: string
    zipCode: string
    city: string
}