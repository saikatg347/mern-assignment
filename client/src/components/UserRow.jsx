import React from 'react'

const UserRow = ({user}) => {

  return (
    <tr className="text-gray-700">
      <td className="px-4 py-3">{user.id}</td>
      <td className="px-4 py-3">{user.first_name}</td>
      <td className="px-4 py-3">{user.last_name}</td>
      <td className="px-4 py-3">{user.email}</td>
      <td className="px-4 py-3">{user.gender}</td>
      <td className="px-4 py-3">{user.income}</td>
      <td className="px-4 py-3">{user.city}</td>
      <td className="px-4 py-3">{user.car}</td>
      <td className="px-4 py-3">{user.quote}</td>
      <td className="px-4 py-3">{user.phone_price}</td>
    </tr>
  )
}

export default UserRow