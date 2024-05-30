import { useState } from "react"

import UserInput from "./components/UserInput"
import Result from "./components/Result"

function App() {
  const [initialInvestment, setInitialInvestment] = useState()
  const [annualInvestment, setAnnualInvestment] = useState()
  const [expectedReturn, setExpectedReturn] = useState()
  const [duration, setDuration] = useState()

  const handleInitialInvestmentChange = (e) => setInitialInvestment(e.target.value)
  const handleAnnualInvestmentChange = (e) => setAnnualInvestment(e.target.value)
  const handleExpectedReturnChange = (e) => setExpectedReturn(e.target.value)
  const handleDurationChange = (e) => setDuration(e.target.value)

  return (
    <>
      <h1 id="header">React Investment Calculator</h1>
      <UserInput 
        onInitialInvestmentChange={handleInitialInvestmentChange}
        onAnnualInvestmentChange={handleAnnualInvestmentChange}
        onExpectedReturnChange={handleExpectedReturnChange}
        onDurationChange={handleDurationChange}
      />
      <Result 
        initialInvestment={initialInvestment}
        annualInvestment={annualInvestment}
        expectedReturn={expectedReturn}
        duration={duration}
      />
    </>
  )
}

export default App
