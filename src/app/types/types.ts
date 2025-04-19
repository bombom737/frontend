export type artwork = {
    painting: any,
    name: string,
    type: string,
    dimensions: string,
    year: string
}

export type validationErrors = {
    name: boolean;
    subject: boolean;
    email: boolean;
    phoneNumber: boolean;
    message: boolean;
};