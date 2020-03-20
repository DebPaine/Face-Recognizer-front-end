import React from 'react';
import './FaceDetection.css';
import BoundingBox from '../BoundingBox/BoundingBox';

const FaceDetection = ({ boxes, imageUrl }) => {
	return (
		<div>
			<img id='inputImage' className='absolute center width mt2' src={imageUrl} alt='' />
			{boxes.map((c, i) => <BoundingBox key={i} box={c} />)}
		</div>
	);
};

export default FaceDetection;
