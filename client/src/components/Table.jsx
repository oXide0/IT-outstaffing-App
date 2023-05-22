function Table({ data }) {
	return (
		<div className='table__container'>
			<table className='styled-table'>
				<thead>
					<tr>
						<th>TG-channel</th>
						<th>Date/Time</th>
						<th>Message</th>
						<th>Author</th>
						<th>Structured message</th>
					</tr>
				</thead>
				<tbody>
					{data.messages.map((item) => {
						return (
							<tr key={item.id}>
								<td>{data.name}</td>
								<td>{item.date}</td>
								<td>{item.text}</td>
								<td>{item.from}</td>
								<td>{item.structuredText}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default Table;
