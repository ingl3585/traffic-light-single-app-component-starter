import React, { useState } from 'react';

const App = () => {
	const [bulbColor, setBulbColor] = useState({
		stop: 'black',
		slow: 'black',
		go: 'black',
	});

	const stopLight = () => {
		setBulbColor({ stop: 'red' });
	};

	const slowLight = () => {
		setBulbColor({ slow: 'yellow' });
	};

	const goLight = () => {
		setBulbColor({ go: 'green' });
	};

	return (
		<div className='App'>
			<section>
				<div id='control-panel'>
					<h2 onClick={stopLight} id='stop' className='button'>
						Stop
					</h2>
					<h2 onClick={slowLight} id='slow' className='button'>
						Slow
					</h2>
					<h2 onClick={goLight} id='go' className='button'>
						Go
					</h2>
				</div>
				<div id='traffic-lights'>
					<div
						className='bulb'
						style={{ backgroundColor: bulbColor.stop }}></div>
					<div
						className='bulb'
						style={{ backgroundColor: bulbColor.slow }}></div>
					<div className='bulb' style={{ backgroundColor: bulbColor.go }}></div>
				</div>
			</section>
		</div>
	);
};

export default App;
