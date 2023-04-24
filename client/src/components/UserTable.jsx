import UserRow from './UserRow'

const UserTable = ({ users }) => {

  return (
    <div className="w-full overflow-hidden rounded-lg shadow-xs">
      <div className="w-full overflow-x-auto max-h-96">
        <table className="w-full whitespace-no-wrap">
          <thead className='sticky top-0 z-10'>
            <tr
              className="text-xs font-medium tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50"
            >
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">First Name</th>
              <th className="px-4 py-3">Last Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Gender</th>
              <th className="px-4 py-3">Income</th>
              <th className="px-4 py-3">City</th>
              <th className="px-4 py-3">Car</th>
              <th className="px-4 py-3">Quote</th>
              <th className="px-4 py-3">Phone Price</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y overflow-y-scroll">
            {
              users.map(user => <UserRow key={user.id} user={user}/>)
            }
          </tbody>
        </table>
      </div>
    </div>

  )
}

export default UserTable