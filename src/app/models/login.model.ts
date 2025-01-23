import { User } from "./user.model";

export interface Login extends Pick<User, 'username' | 'password'> {}
