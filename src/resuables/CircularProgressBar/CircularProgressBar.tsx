import './CircularProgressBar.css'; // Import CSS for styling

type ICircularProgress = {
	progress: number;
};

function CircularProgressBar({ progress }: ICircularProgress) {
	const radius = 50;
	const circumference = 2 * Math.PI * radius;
	const offset = circumference - (progress / 100) * circumference;

	return (
		<svg className="progress-ring" width="120" height="120">
			<circle
				className="progress-ring__circle"
				stroke="blue"
				strokeWidth="10"
				fill="transparent"
				r={radius}
				cx="60"
				cy="60"
				style={{ strokeDasharray: circumference, strokeDashoffset: offset }}
			/>
		</svg>
	);
}

export default CircularProgressBar;
