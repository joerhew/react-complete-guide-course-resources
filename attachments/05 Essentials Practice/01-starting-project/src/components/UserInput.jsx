export default function UserInput({ userInput, onUserInputChange }) {
  return (    
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>
            Initial Investment
          </label>
          <input type="number" required name="initialInvestment" value={userInput.initialInvestment} onChange={(e) => onUserInputChange("initialInvestment", e)}/>
        </p>
        <p>
          <label>
            Annual Investment
          </label>
          <input type="number" required name="annualInvestment" value={userInput.annualInvestment} onChange={(e) => onUserInputChange("annualInvestment",e)}/>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>
            Expected Return
          </label>
          <input type="number" required name="expectedReturn" value={userInput.expectedReturn} onChange={(e) => onUserInputChange("expectedReturn",e)}/>
        </p>
        <p>
          <label>
            Duration
          </label>
          <input type="number" required name="duration" value={userInput.duration} onChange={(e) => onUserInputChange("duration",e)}/>
        </p>
      </div>
    </section>
  )
}