import React, { useState, useEffect } from 'react';

function Clock({ className }) {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTime(new Date());
		}, 1000);

		return () => {
			clearInterval(intervalId);
		};
	}, []);

	return (
		<div>
			<h1 className={className}>{time.toLocaleTimeString()}</h1>
		</div>
	);
}

export default Clock;
