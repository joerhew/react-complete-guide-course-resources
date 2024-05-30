import { calculateInvestmentResults, formatter } from "../util/investment"

export default function Result({ initialInvestment, annualInvestment, expectedReturn, duration }) {
  return (
    <>
      <div id="result">
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
            {Array.from({ length: 5 }).map((_, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>Value {index + 1}</td>
                <td>Interest {index + 1}</td>
                <td>Total Interest {index + 1}</td>
                <td>Capital {index + 1}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}