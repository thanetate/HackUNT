import { useState } from "react";
function AccountPreferences() {
    const [selectedOption, setSelectedOption] = useState("Zombie");

	return (
		<>
			<h1>Account Preferences</h1>
			<div className="middle-username-title">User Name</div>
			<input
				className="middle-username-box"
				// value={name}
				// onChange={handleNameChange}
			/>
			<div className="middle-spooky-title">What kind of monster are you?</div>
            <input
        className="middle-select-box"
        value={selectedOption}
        readOnly
        // onChange={handleOptionChange}
      />
            <div className="middle-des-title">Description</div>
			<textarea
				className="middle-des-box"
				// value={longdesc}
				// onChange={handleLongDescChange}
			></textarea>

            <div className="main-profile-pic">
				{/* Calls avatar and bc avatar is set to a url we can just src the url */}
				{/* {avatar && <img src={avatar} alt="User Avatar" />} */}
                .
			</div>
			<button className="middle-change-btn">
				<img src="./img.svg" alt="picture icon" />
				Change
			</button>
			<button className="middle-remove-btn">
				<img src="./trash.svg" alt="trash icon" />
				Remove
			</button>
		</>
	);
}

export default AccountPreferences;
