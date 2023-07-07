import Header from '../components/Header';
import Table from '../components/Table';
import { data } from '../utils/structuredData';

function Main() {
	return (
		<div className='wrapper'>
			<Header />
			<Table data={data} />
		</div>
	);
}

export default Main;
