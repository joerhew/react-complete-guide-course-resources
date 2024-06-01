import { calculateInvestmentResults, formatter } from "../util/investment"

export default function Result({ userInput }) {
  const results = calculateInvestmentResults(userInput)
  const initialInvestment = 
    results[0].valueEndOfYear - 
    results[0].interest - 
    results[0].annualInvestment

  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {results.map(yearlyResult => {
            const totalInterest = 
              yearlyResult.valueEndOfYear - 
              (yearlyResult.annualInvestment * yearlyResult.year) - 
              initialInvestment
            return (
              <tr key={yearlyResult.year}>
                <td>{yearlyResult.year}</td>
                <td>{formatter.format(yearlyResult.valueEndOfYear)}</td>
                <td>{formatter.format(yearlyResult.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(yearlyResult.valueEndOfYear - totalInterest)}</td>
              </tr>
            )
          })}
        </tbody>
      </table>     
    </>
  );
}