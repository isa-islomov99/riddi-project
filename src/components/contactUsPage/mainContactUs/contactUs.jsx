import React from 'react';
import '../mainContactUs/contactUs.css';
import AddressesPart from '../addresses/addresses-part';
import FormPart from '../form/form-part';
import MapPart from '../map/map-part.jsx';



const ContactUs = () => {
	return (
		<div className='contact_us'>
			<AddressesPart />
			<MapPart />
			<FormPart  />
		</div>
	);
};

export default ContactUs;
