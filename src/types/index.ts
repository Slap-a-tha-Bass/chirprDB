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