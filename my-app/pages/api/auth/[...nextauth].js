import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

//defining auth options
export const authOptions = {
	providers: [
        //configure the google auth provider with id and secret
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
		}),
	],
	session: {
        //jwt for session management 
		strategy: "jwt",
	},
};
export default NextAuth(authOptions);
