import { calculateInvestmentResults, formatter } from "../util/investment"

export default function Result({ initialInvestment, annualInvestment, expectedReturn, duration }) {
  const results = calculateInvestmentResults({ initialInvestment, annualInvestment, expectedReturn, duration })

  return (
    <>
      <section id="result">
        <table>
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
            {Array.from({ length: duration }).map((_, index) => {
              const cumulativeInterest = results.slice(0, index + 1).reduce((acc, result) => acc + result.interest, 0)
              return (
                <tr key={index}>
                  <td>{results[index].year}</td>
                  <td>{formatter.format(results[index].valueEndOfYear)}</td>
                  <td>{formatter.format(results[index].interest)}</td>
                  <td>{formatter.format(cumulativeInterest)}</td>
                  <td>{formatter.format(results[index].valueEndOfYear - cumulativeInterest)}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </section>
    </>
  );
}