import Header from '../components/Header';
import PieChart from '../components/PieChart';
import VerticalBarChart from '../components/VerticalBarChart';

function Analytics() {
	return (
		<div className='wrapper'>
			<Header />
			<div className='charts__row'>
				<PieChart />
				<VerticalBarChart />
			</div>
		</div>
	);
}

export default Analytics;
