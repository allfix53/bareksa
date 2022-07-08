const getSummaryDashboardData = async () => {
  const response = await fetch(
    'https://ae1cdb19-2532-46fa-9b8f-cce01702bb1e.mock.pstmn.io/takehometest/web/dashboard',
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'GET',
    }
  )

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`
    throw new Error(message)
  }

  const summaryData = await response.json()
  return summaryData
}

export { getSummaryDashboardData }
