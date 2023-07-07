export const pieData = {
	labels: ['Python', 'JavaScript', 'Scala', 'TypeScript'],
	datasets: [
		{
			label: '# of Votes',
			data: [1, 2, 1, 1],
			backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
				'rgba(75, 192, 192, 0.2)',
			],
			borderColor: [
				'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
			],
			borderWidth: 1,
		},
	],
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
export const barData = {
	labels,
	datasets: [
		{
			fill: true,
			label: 'Statistics of the month',
			data: labels.map(() => Math.round(Math.random() * 100)),
			borderColor: 'rgb(53, 162, 235)',
			backgroundColor: 'rgba(53, 162, 235, 0.5)',
		},
	],
};
