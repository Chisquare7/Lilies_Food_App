import React from 'react'

const Button = ({text}) => {
  return (
		<div>
			<input type="submit" value={text} className="food_button" />
			{/* <button className="food_button"> {text} </button> */}
		</div>
	);
}

export default Button
