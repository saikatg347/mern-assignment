import CityRow from './CityRow'

const CityTable = ({cities}) => {


	return (
		<div className='w-full overflow-hidden rounded-lg shadow-xs'>
			<div className='w-full overflow-x-auto max-h-96'>
				<table className='w-full whitespace-no-wrap'>
					<thead className='sticky top-0 z-10'>
						<tr className='text-xs font-medium tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50'>
							<th className='px-4 py-3'>City</th>
							<th className='px-4 py-3'>No of Users</th>
							<th className='px-4 py-3'>Average Income</th>
						</tr>
					</thead>
					<tbody className='bg-white divide-y overflow-y-scroll'>
						{cities.map((city, idx) => (
							<CityRow key={idx} city={city} />
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default CityTable
