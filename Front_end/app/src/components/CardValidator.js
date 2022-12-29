import React, { useState } from "react";
import validator from 'validator'

const CardValidator = () => {

const [errorMessage, setErrorMessage] = useState('')
	
const validateCreditCard = (value) => {
	
}

return (
	<div style={{
	marginLeft: '20px',
	}}>
	<pre>
		<span>Enter Card Number: </span>
		<input type="text"
			onChange={(e) => validateCreditCard(e.target.value)} required>
		</input> <br />
		<span style={{
		fontWeight: 'bold',
		color: 'red',
		}}>{errorMessage}</span>
	</pre>
	</div>
);
}

export default CardValidator
