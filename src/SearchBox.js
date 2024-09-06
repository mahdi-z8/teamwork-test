// ---------------imports----------
import React from 'react';



// ----------------functions---------------
const SearchBox = ({searchChange}) => {
	return (
		<div className = 'pa2'>	
			<input 
				className = 'f3 pa3 shadow-3 ba bg-lightest-blue b--green bw3 br-pill w-50 tc'
				type = 'search'
				placeholder = 'search for robots'
				onChange = {searchChange}
			/>
		</div>
	);
}


export default SearchBox;