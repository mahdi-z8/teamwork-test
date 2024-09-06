import React from 'react';
import './First.css'


const Card = ({name , email , id}) => {
	return (
		<div className = 'bg tc dib br3 pa3 ma2 grow bw2 shadow-5 pointer'>
			<img alt='robo' src={`https://robohash.org/${id}?200*2001`}/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;