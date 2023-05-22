import Header from '../components/Header';
import Table from '../components/Table';

function Main() {
	const data = {
		name: 'IT sales club | Outsourcing, Outstaffing 🇺🇦',
		type: 'public_supergroup',
		id: 1275137343,
		messages: [
			{
				id: 1,
				date: '2021-06-11T16:36:33',
				from: 'Ilya Podavalkin',
				text: 'Middle+ Python Developer\nWe are looking for a Middle+ Python developer to join our project on an outstaffing basis. \nThis is an ongoing project with the global team, partly in the USA, the UK, and Ukraine). \nDuration: 6+ months allocation, fulltime\nProcess: Hr interview, Tech, Background check\nRequirements:\nProficient in Python Programming\nData engineering experience\nSome experience with Panda and/or Numpy (Critical)\nExperience with Airflow\nSoft skills and advanced English (Critical). \n6+ months, full-time.',
				structuredText: 'Middle+ Python Developer',
			},
			{
				id: 2,
				date: '2021-06-11T16:41:45',
				from: 'Yura Prokofiev',
				text: 'Strong Junior/Middle JavaScript developer (Angular2+)\nWe are looking for a Middle+ JavaScript developer to join',
				structuredText: 'Strong Junior/Middle JavaScript developer',
			},
		],
	};

	return (
		<div className='wrapper'>
			<Header />
			<Table data={data} />
		</div>
	);
}

export default Main;
