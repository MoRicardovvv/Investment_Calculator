export default function UserInput({ onChange, userInput }) {
    return (
    <div id="user-input">
          <ul className="input-group">
            <li>
              <label className="label">INITIAL INVESTMENT</label>
              <input type="number" required value={userInput.initialInvestment}
                onChange={(event => onChange('initialInvestment', event.target.value))} />
            </li>
            <li>
            <label className="label">ANNUAL INVESTMENT</label>
            <input type="number" required value={userInput.annualInvestment}
              onChange={event => onChange('annualInvestment', event.target.value)} />
            </li>
          </ul>
          <ul className="input-group">
            <li>
              <label>EXPECTED RETURN</label>
              <input type="number" required value={userInput.expectedReturn}
                onChange={event => onChange('expectedReturn', event.target.value)} />
            </li>
            <li>
              <label className="label">DURATION</label>
              <input type="number" required value={userInput.duration}
                onChange={event => onChange('duration', event.target.value)} />
            </li>
          </ul>
        </div>
  )
}