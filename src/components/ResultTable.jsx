import { calculateInvestmentResults, formatter } from "../util/investment.js"

export default function ResultTable({ userInput }) {
  const results = calculateInvestmentResults(userInput)
  const initialInvestment = results[0].valueEndOfYear - results[0].interest -
    results[0].annualInvestment

  return (
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
          {results.map(annualResult => {
            const totalInterest = annualResult.valueEndOfYear - 
              annualResult.annualInvestment * annualResult.year - initialInvestment
            
            const totalAmountInvested = annualResult.valueEndOfYear - totalInterest

            return (
              <tr key={annualResult.year}>
                <td>{annualResult.year}</td>
                <td>{formatter.format(annualResult.valueEndOfYear)}</td>
                <td>{formatter.format(annualResult.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
  )
}