import { useState } from "react"
import { calculateInvestmentResults, formatter } from "./util/investment"
import UserInput from "./components/UserInput";
import ResultTable from "./components/ResultTable";


function App() {
  const [userInput, setUserInput] = useState({initialInvestment : 3000,
    annualInvestment: 1000, expectedReturn: 4, duration: 10})

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {...prevUserInput, [inputIdentifier]: newValue}
    })
  }

  return (
    <>
      <div id="header">
        <img src="investment-calculator-logo.png" alt="bag of money atop gold pile" />
        <h1>React Investment Calculator</h1>
      </div>
      <UserInput onChange={handleChange} userInput={userInput} />
      <ResultTable userInput={userInput} />
    </>
  )
}

export default App
