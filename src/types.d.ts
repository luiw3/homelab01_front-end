import { IUser } from "./shared/interfaces/user.interface";

interface IAuthenticatedUser {
    user: Pick<IUser, 'id' | 'email' | 'name'> | null;
    isAuth: boolean;
    token: string | null;
    lastPath: string | null;
}

interface AuthenticatedUserAction {
    type: string,
    authenticatedUser: IAuthenticatedUser
}

type DispatchAuthenticatedUser = (args: AuthenticatedUserAction) => AuthenticatedUserAction;