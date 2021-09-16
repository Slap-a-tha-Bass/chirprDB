import { Request } from "express";

export interface newChirp {
    id: string,
    username: string,
    message: string
};

export interface mySQL_Response {
    affectedRows: number,
    insertId: number,
    sqlMessage: string
}
export interface ChirpCardProps extends newChirp {
    isPreview?: boolean
}
export interface DonateProps {
    id: string,
    fullName: string,
    amount: Number
}

export interface userTable {
    id?: string
    name?: string,
    email?: string,
    password?: string
}

export interface Payload {
    userid?: number,
    email?: string,
    role?: number,
    iat?: number,
    exp?: number
}

export interface ReqUser extends Request {
    user?: userTable
}