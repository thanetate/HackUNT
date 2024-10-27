function Identifiers() {
	return (
		<>
			<h1>Identifiers</h1>

			<div className="middle-username-title">
				If you could join a monster clan, which one would it be?
			</div>
			<select
				className="middle-select-box"
				// value={selectedOption}
				// onChange={handleOptionChange}
			>
                <option value="Select">Select</option>
				<option value="Ghostly Guild">Ghostly Guild</option>
				<option value="Dragon Kin">Dragon Kin</option>
				<option value="Goblin Tribe">Goblin Tribe</option>
				<option value="Troll Troop">Troll Troop</option>
				<option value="Fairy Circle">Fairy Circle</option>
			</select>
			<div className="middle-spooky-title">
				If you could haunt any place, where would it be?
			</div>
			<select
				className="middle-select-box"
				// value={selectedOption}
				// onChange={handleOptionChange}
			>
				<option value="Select">Select</option>
				<option value="Old Mansion">Old Mansion</option>
				<option value="Abandoned Hospital">Abandoned Hospital</option>
				<option value="Creepy Forest">Creepy Forest</option>
				<option value="Ancient Castle">Ancient Castle</option>
				<option value="Haunted Hotel">Haunted Hotel</option>
			</select>
			<div className="middle-des-title">What`s your favorite spooky snack?</div>
			<select
				className="middle-select-box"
				// value={selectedOption}
				// onChange={handleOptionChange}
			>
				<option value="Select">Select</option>
				<option value="Eyeball Soup">Eyeball Soup</option>
				<option value="Bat Wings">Bat Wings</option>
				<option value="Witch's Brew">Witch`s Brew</option>
				<option value="Zombie Brains">Zombie Brains</option>
				<option value="Ghostly Marshmallows">Ghostly Marshmallows</option>
			</select>
		</>
	);
}

export default Identifiers;
