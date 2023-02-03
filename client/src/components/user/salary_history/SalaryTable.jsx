const SalaryTable = ({ salaries }) => {
  return (
    <table className='w-full text-left'>
      <thead className='bg-gray-100 uppercase'>
        <tr>
          <th className='p-2.5'>#</th>
          <th className='p-2.5'>Date</th>
          <th className='p-2.5'>Total Hours</th>
          <th className='p-2.5'>Deduction</th>
          <th className='p-2.5'>Earnings</th>
        </tr>
      </thead>
      <tbody>
        {salaries !== undefined &&
          (salaries.data.length !== 0 ? (
            salaries.data.map((salary, index) => (
              <tr key={index} className='border-b'>
                <th className='p-2.5'>{salaries.from + index}</th>
                <td className='p-2.5'>
                  {new Date(salary.created_at).toLocaleDateString('default', {
                    month: 'short',
                    year: 'numeric',
                  })}
                </td>
                <td className='p-2.5'>{salary.total_hours}</td>
                <td className='p-2.5'>{salary.deductions}</td>
                <td className='p-2.5'>{salary.earnings}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan='5' className='text-center p-2.5'>
                No data available
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}

export default SalaryTable
