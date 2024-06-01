import { useState } from "react"

import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Result from "./components/Result"

function App() {
  const [userInput, setUserInput] = useState({ 
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 5,
    duration: 10
  })

  const handleUserInputChange = (inputType, e) => {
    setUserInput(prevUserInput => ({
      ...prevUserInput, 
      [inputType]: +e.target.value
    }))
  }

  return (
    <>
      <Header />
      <UserInput
        userInput = {userInput}
        onUserInputChange = {handleUserInputChange}
      />
      <Result 
        userInput = {userInput}
      />
    </>
  )
}

export default App
