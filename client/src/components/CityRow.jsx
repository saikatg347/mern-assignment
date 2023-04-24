import React from 'react'

const UserRow = ({city}) => {

  return (
    <tr className="text-gray-700">
      <td className="px-4 py-3">{city.city}</td>
      <td className="px-4 py-3">{city.users}</td>
      <td className="px-4 py-3">{city.incomes.reduce((total, income) => total + parseInt(income.substring(1)))}</td>
    </tr>
  )
}

export default UserRow