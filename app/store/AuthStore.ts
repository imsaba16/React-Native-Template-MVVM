import {create} from "zustand";

interface AuthState {
    /*registerUser: (username: string, email: string, password: string) => Promise<void>;*/
    loading: boolean;
    logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
    loading: false,

/*    registerUser: async (username: string, email: string, password: string) => {
        set({ loading: true });
        try {
            const userCredential = await auth().createUserWithEmailAndPassword(email, password);
            const currentUser = userCredential.user;

            const idToken = await currentUser.getIdToken();

            await firestore().collection("users").doc(currentUser.uid).set({
                username,
                email,
                createdAt: new Date().toISOString(),
                isVerified: false,
                subscription: {
                    isActive: false,
                    planType: null,
                    lastUpdated: new Date().toISOString(),
                },
            });
            set({ user: currentUser });
            setItem("user", currentUser);
            setItem("accessToken", idToken);
        } catch (error) {
            console.error("Registration Error:", error);
        } finally {
            set({ loading: false });
        }
    },*/

    logout: async () => {
        set({ loading: true });
        try {
          //TODO
        } catch (error) {
            console.error("Logout Error", error);
        } finally {
            set({ loading: false });
        }
    },
}));