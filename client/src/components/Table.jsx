import { structureDate } from '../utils/structuring';

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
								<td className='date__text'>{structureDate(item.date)}</td>
								<td>{item.text}</td>
								<td className='author__text'>{item.from}</td>
								<td className='structured__text'>
									<ul>
										<li>
											<span className='table__title'>Type of offer:</span>{' '}
											{item.structuredText.typeOfOffer}
										</li>
										<li>
											<span className='table__title'>Stack:</span> {item.structuredText.stack}
										</li>
										<li>
											<span className='table__title'>Seniority:</span>{' '}
											{item.structuredText.seniority}
										</li>
										<li>
											<span className='table__title'>Experience:</span>{' '}
											{item.structuredText.experience}
										</li>
										<li>
											<span className='table__title'>English:</span> {item.structuredText.english}
										</li>
										<li>
											<span className='table__title'>Location:</span>{' '}
											{item.structuredText.location}
										</li>
										<li>
											<span className='table__title'>Rate:</span> {item.structuredText.rate}
										</li>
										<li>
											<span className='table__title'>Contacts:</span>{' '}
											{item.structuredText.contacts}
										</li>
									</ul>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default Table;
