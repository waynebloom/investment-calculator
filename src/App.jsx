import { useState } from "react"
import Header from "./components/Header"
import NumberInput from "./components/NumberInput"
import { calculateInvestmentResults } from "./util/investment";
import Results from "./components/Results";

function deriveResults(config) {
  const yearOverYear = calculateInvestmentResults(config);
  let interestTotal = 0;
  let principal = config.initial;

  return yearOverYear.map(data => {
    const { year, interestYear, value, annual } = data;
    interestTotal += interestYear;
    principal += annual;

    return {
      year: year,
      value: value,
      interestYear: interestYear,
      interestTotal: interestTotal,
      principal: principal,
    };
  });
}

function App() {
  const [config, setConfig] = useState({
    'initial': 1000,
    'annual': 100,
    'rate': 6,
    'duration': 10,
  });

  const results = deriveResults(config);

  function handleConfigChange(key, value) {
    setConfig(prev => {
      return {
        ...prev,
        [key]: value,
      };
    });
  }

  return <main>
    <Header />
    <section id="user-input">
      <div className="input-group">
        <NumberInput
          label="Initial Investment"
          value={config.initial}
          onChange={(value) => handleConfigChange('initial', value)}
        />
        <NumberInput
          label="Annual Investment"
          value={config.annual}
          onChange={(value) => handleConfigChange('annual', value)}
        />
      </div>
      <div className="input-group">
        <NumberInput
          label="Expected Return"
          value={config.rate}
          onChange={(value) => handleConfigChange('rate', value)}
        />
        <NumberInput
          label="Duration"
          value={config.duration}
          onChange={(value) => handleConfigChange('duration', value)}
        />
      </div>
    </section>

    <Results results={results} />
  </main >
}

export default App
