import { IUser } from "./user.interface";

export interface ICrypto {
    id: string;
    token: string;
    amount: number;
    fiatValue: number;
    purchasingDate: Date
}

export type ICryptoWithUser = ICrypto & {
    user: IUser
}