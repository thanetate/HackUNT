// import Image from "next/image";
import Header from "./components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Header will need logo, links, log in button, and nav */}
      <Header /> 
        {/* Landing Area */}
          <div className="landing">
          <h1 className="landing-desc">Where Monsters Find Their Matches</h1>
      <Link href="/signup">Signup</Link>
      <Link href="/login">Login</Link>
      <Link href="/dashboard">Dashboard</Link>
          <img src="./pumpkin_mainhome_icon.png" alt="Monster Match Logo"/>
          <button>Sign Up</button>
        </div>
        {/* Our Approach */}
        {/* What Other Monsters are Saying / User Feedback */}
        {/* Footer */}

    </main>
  );
}
