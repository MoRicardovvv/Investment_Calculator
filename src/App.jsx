import { useState } from "react"
import { calculateInvestmentResults, formatter } from "./util/investment"


function App() {

  const [investmentData, enterResult] = useState({initialInvestment : undefined, annualInvestment: undefined,
    expectedReturn: undefined, duration: undefined});

  const [investmentResults, setInvestmentResults] = useState()

  function handleInitialInvestment(entry) {
    enterResult(calculateInvestmentResults(prevResults => prevResults.initialInvestment = entry))
    setInvestmentResults(calculateInvestmentResults(investmentData))
  }
  function handleAnnualInvestment(entry) {
    enterResult(calculateInvestmentResults(prevResults => prevResults.annualInvestment = entry))
    setInvestmentResults(calculateInvestmentResults(investmentData))
  }
  function handleExpectedReturn(entry) {
    enterResult(calculateInvestmentResults(prevResults => prevResults.expectedReturn = entry))
    setInvestmentResults(calculateInvestmentResults(investmentData))
  }
  function handleDuration(entry) {
    enterResult(calculateInvestmentResults(prevResults => prevResults.duration = entry))
    setInvestmentResults(calculateInvestmentResults(investmentData))
  }

  return (
    <>
      <div id="header">
        <img src="investment-calculator-logo.png" alt="bag of money atop gold pile" />
        <h1>React Investment Calculator</h1>
      </div>
      <div id="user-input">
        <ul className="input-group">
          <li>
            <label className="label">INITIAL INVESTMENT</label>
            <input type="number"  value={investmentData.initialInvestment} onChange={handleInitialInvestment}></input>
          </li>
          <li>
          <label className="label">ANNUAL INVESTMENT</label>
          <input type="number"  value={investmentData.annualInvestment} onChange={handleAnnualInvestment}></input>
          </li>
        </ul>
        <ul className="input-group">
          <li>
            <label>EXPECTED RETURN</label>
            <input type="number"  value={investmentData.expectedReturn} onChange={handleExpectedReturn}></input>
          </li>
          <li>
            <label className="label">DURATION</label>
            <input type="number"  value={investmentData.duration} onChange={handleDuration}></input>
          </li>
        </ul>
      </div>
      {investmentData && <table id="result">
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
          <tr>
            <th>
              test
            </th>
          </tr>
        </tbody>

      </table> }
    </>
  )
}

export default App
