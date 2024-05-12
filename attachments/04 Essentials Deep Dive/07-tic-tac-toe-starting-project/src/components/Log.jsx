export default function Log({ loggedTurns }) {
  
  return (
    <ol id="log">
      {loggedTurns.map((loggedTurn, index) => (
        <li key={index}>
          {loggedTurn.player} placed in Row {loggedTurn.square.row} and Column {loggedTurn.square.col}
          </li>
      ))}
    </ol>
  )
}