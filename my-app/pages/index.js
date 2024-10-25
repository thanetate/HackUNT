import { useSession, signIn, signOut } from "next-auth/react";
import Home from "../pages/components/Home/page";
import styles from "../styles/Home.module.css";
import Header from "./components/Header/page";

export default function IndexPage() {
  //use session to get data and status from google auth
	const { data, status } = useSession();
  //if status is loading return a loading page
  //TODO: make it a spinner
	if (status === "loading") return <h1> loading... please wait</h1>;
	//if authenticated show user info and homepage
  if (status === "authenticated") {
		return (
			<>
				<Header />
				<div className="google">
					<h1> hi {data.user.name}</h1>
					<img src={data.user.image} alt={data.user.name + " photo"} />
					<button onClick={signOut}>sign out</button>
				</div>

				<Home />
			</>
		);
	}
	return (
		<>
			<Header />
			<div className="google">
				<button onClick={() => signIn("google")}>Sign In with Google</button>
			</div>
			<Home />
		</>
	);
}
