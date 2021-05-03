import * as React from 'react';
import './map-part.css';

export const MapPartJs = () => {
	const mapRef = React.useRef(null);

	React.useLayoutEffect(
		() => {
			if (!mapRef.current) return;
			const H = window.H;
			const platform = new H.service.Platform({
				apikey: '{HERE-API-KEY}'
			});
			const defaultLayers = platform.createDefaultLayers();
			const hMap = new H.Map(mapRef.current, defaultLayers.vector.normal.map, {
				center: { lat: 41.311081, lng: 69.240562 },
				zoom: 9,
				pixelRatio: window.devicePixelRatio || 1
			});

			const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(hMap));

			const ui = H.ui.UI.createDefault(hMap, defaultLayers);

			return () => {
				hMap.dispose();
			};
		},
		[ mapRef ]
	);

	return <div className='map' ref={mapRef} style={{ height: '500px' }} />;
};
