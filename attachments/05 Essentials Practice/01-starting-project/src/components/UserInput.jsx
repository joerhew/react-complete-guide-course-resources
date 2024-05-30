export default function UserInput({ onInitialInvestmentChange, onAnnualInvestmentChange, onExpectedReturnChange, onDurationChange }) {
  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <label>
            Initial Investment
          </label>
          <input type="number" name="initialInvestment" onChange={onInitialInvestmentChange}/>
          <label>
            Annual Investment
          </label>
          <input type="number" name="annualInvestment" onChange={onAnnualInvestmentChange}/>
        </div>
        <div className="input-group">
          <label>
            Expected Return
          </label>
          <input type="number" name="expectedReturn" onChange={onExpectedReturnChange}/>
          <label>
            Duration
          </label>
          <input type="number" name="duration" onChange={onDurationChange}/>
        </div>
      </section>
    </>
  )
}