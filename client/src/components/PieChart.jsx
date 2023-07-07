import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { pieData } from '../utils/analyticsData';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart() {
	return (
		<div className='chart'>
			<Pie data={pieData} />
		</div>
	);
}
