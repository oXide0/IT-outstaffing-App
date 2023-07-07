import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { barData } from '../utils/analyticsData';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

const options = {
	responsive: true,
	plugins: {
		legend: {
			position: 'top',
		},
	},
};

function VerticalBarChart() {
	return (
		<div className='chart'>
			<Line options={options} data={barData} />
		</div>
	);
}

export default VerticalBarChart;
