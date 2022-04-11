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

type formTypes<T> = {
    [k in keyof T]: Merge<Pick<T,k>,{}>[k]
}

type formFields = {
    label: string;
    fieldId: string;
}

type genericForm<T> = {
    initialValues: formTypes<T>,
    formFields: Array<formFields>
}