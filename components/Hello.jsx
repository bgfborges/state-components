const data = {
  pending_balance: 'Hello World 26',
}

export const Hello = () => {
  const { pending_balance: pendingBalance } = data

  return <h1>{pendingBalance}</h1>
}