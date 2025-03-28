import {useAuthStore} from "@/app/store/AuthStore";

export const useAuthViewModel = () => {
    const {logout, loading} = useAuthStore();

/*    const handleRegister = async (username: string, email: string, password: string, confirmPassword: string) => {
        if (!username || !email || !password || !confirmPassword) {
            console.error("All fields are required.");
            return;
        }
        if (password !== confirmPassword) {
            console.error("Passwords do not match.");
            return;
        }
        await registerUser(username, email, password);
    };*/

    return { logout, loading };
}