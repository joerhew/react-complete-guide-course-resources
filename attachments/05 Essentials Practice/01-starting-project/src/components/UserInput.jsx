export default function UserInput({ initialInvestment, annualInvestment, expectedReturn, duration, onInitialInvestmentChange, onAnnualInvestmentChange, onExpectedReturnChange, onDurationChange }) {
  return (    
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>
            Initial Investment
          </label>
          <input type="number" name="initialInvestment" value={initialInvestment} onChange={onInitialInvestmentChange}/>
        </p>
        <p>
          <label>
            Annual Investment
          </label>
          <input type="number" name="annualInvestment" value={annualInvestment} onChange={onAnnualInvestmentChange}/>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>
            Expected Return
          </label>
          <input type="number" name="expectedReturn" value={expectedReturn} onChange={onExpectedReturnChange}/>
        </p>
        <p>
          <label>
            Duration
          </label>
          <input type="number" name="duration" value={duration} onChange={onDurationChange}/>
        </p>
      </div>
    </section>
  )
}