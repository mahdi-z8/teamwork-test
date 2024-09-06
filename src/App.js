// ----------------importrs---------------
import React from 'react';
import CardList from './CardList.js';
import {robots} from './robots.js';
import First from './First.js';
import SearchBox from './SearchBox';

// ---------------------functions------------------

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			robots : robots,
			Searchfield : ''
		}
	}

	onSearchChange = (event) => {
		this.setState({Searchfield : event.target.value});
	}

	render() {
		const redRobot = this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.Searchfield.toLowerCase());
		})
		console.log(redRobot);

		return (
			<div className = 'tc'>
				<First/>
				<div className = 'f1 ttc tc pointer'>
					<SearchBox searchChange = {this.onSearchChange} />
					<p className = "pbg">Welcome to react</p>
				</div>
				<CardList robots = {this.state.robots}/>
			</div>
		);
	}
}

// --------------END------------
export default App;