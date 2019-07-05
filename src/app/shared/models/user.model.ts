export class User {
    username: string;
    password: string;
    email: string;
    phoneNumber: number;
    name: string;
    gender: string;
    _id: string;
    dob: string;
    updatedAt: any;
    createdAt: any;
    status: string;
    role: number;

    constructor(details: any) {
        this.username = details.username || '';
        this.password = details.password || null;
        this.email = details.email || '';
        this.phoneNumber = details.phoneNumber || '';
        this.name = details.name || '';
        this.gender = details.gender || '';
        this._id = details._id || '';
        this.dob = details.dob || '';
        this.updatedAt = details.updatedAt || '';
        this.createdAt = details.createdAt || '';
        this.status = details.status || '';
        this.role = details.role || 2;
    }
}