// import Image from "next/image";
import Header from "./components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Header will need logo, links, log in button, and nav */}
      <Header /> 
      <Link href="/signup">Signup</Link>
      <Link href="/login">Login</Link>
      <Link href="/dashboard">Dashboard</Link>
        {/* Landing Area */}
        <div className="landing-container">
            <h1 className="landing-title">Where Monsters Find Their Matches</h1>
            <img className="landing-img" src="./pumpkin_mainhome_icon.png" alt="Monster Match Logo"/>
        </div>
        {/* Our Approach */}
        <div className="approach-container">
            <h2 className="approach-title">Our Approach</h2>
            <p className="approach-text">We believe that every monster deserves to find their perfect match. That's why we've created a platform where monsters can connect with other monsters who share their interests, values, and goals.</p>
          </div>
        {/* What Other Monsters are Saying / User Feedback */}
        <div className="feedback-container">
            <h2 className="feedback-title">What Other Monsters are Saying</h2>
            <p className="feedback-text">"I never thought I'd find my perfect match, but Monster Match made it possible!"</p>
            <p className="feedback-text">"I've met so many amazing monsters on this site. I can't imagine my life without it!"</p>
            <p className="feedback-text">"I love how easy it is to connect with other monsters who share my interests. Monster Match is the best!"</p>
        </div>
        {/* Footer */}

    </main>
  );
}
