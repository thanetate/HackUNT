import React from "react";
import Link from "next/link";

const Header = () => {
	return (
		<>
			<div className="nav-container">
				<div className="title">Monster Match</div>
				<div className="nav-links-container">
          <Link href="/">
            <p className="redirects">Home</p>
          </Link>
          <div className="bar">|</div>
          <Link href="/swipe">
            <p className="redirects">Swipes</p>
          </Link>
          <div className="bar">|</div>
          <Link href="/dashboard">
            <p className="redirects">Dashboard</p>
          </Link>
				</div>
			</div>
		</>
	);
};

export default Header;
