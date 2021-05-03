import React from 'react';
import './map-part.css';
import { MapPartJs } from './map-part.js';

const MapPart = () => {
	return (
		<div>
			<p className='map_top_text'>Карта проезда</p>
			<MapPartJs className='map' />
			<p className='map_bottom_text'>или отправить сообщение:</p>
		</div>
	);
};

export default MapPart;
