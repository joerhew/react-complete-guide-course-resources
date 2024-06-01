import { useState } from "react"

import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Result from "./components/Result"

function App() {
  const [initialInvestment, setInitialInvestment] = useState(10000)
  const [annualInvestment, setAnnualInvestment] = useState(1000)
  const [expectedReturn, setExpectedReturn] = useState(5)
  const [duration, setDuration] = useState(10)

  const handleInitialInvestmentChange = (e) => setInitialInvestment(Number(e.target.value))
  const handleAnnualInvestmentChange = (e) => setAnnualInvestment(Number(e.target.value))
  const handleExpectedReturnChange = (e) => setExpectedReturn(Number(e.target.value))
  const handleDurationChange = (e) => setDuration(Number(e.target.value))

  return (
    <>
      <Header />
      <UserInput
        initialInvestment={initialInvestment}
        annualInvestment={annualInvestment}
        expectedReturn={expectedReturn}
        duration={duration} 
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
