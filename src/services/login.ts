import {User} from "../types/users";
import {getUser} from "../mocks/users"

class Login {

    async logIn(email: string, password: string): Promise<User | null> {
        console.log("starting log in process...")
        const user: User | null = await new Promise((resolve) => {
            setTimeout(() => resolve(getUser(email, password)), 3000);
        });

        return user;
    }
}