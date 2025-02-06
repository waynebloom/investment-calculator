import { formatter } from "../util/investment";
export default function Results({ results }) {
  return (
    <table id="result">
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
        {results.map(result => {
          const { year, value, interestYear, interestTotal, principal } = result
          return <tr key={year}>
            <td>{year}</td>
            <td>{formatter.format(value)}</td>
            <td>{formatter.format(interestYear)}</td>
            <td>{formatter.format(interestTotal)}</td>
            <td>{formatter.format(principal)}</td>
          </tr>;
        })}
      </tbody>
    </table>
  );
}
