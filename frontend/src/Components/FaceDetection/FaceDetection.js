import React from 'react';
import './FaceDetection.css';
import BoundingBox from '../BoundingBox/BoundingBox';

const FaceDetection = ({ boxes, imageUrl }) => {
	return (
		<div className='width mt2'>
			<div className='absolute'>
				<img id='inputImage' className='width height' src={imageUrl} alt='' />

				{boxes.map((c, i) => <BoundingBox key={i} box={c} />)}
			</div>
		</div>
	);
};

export default FaceDetection;
