
import { Chart } from "react-google-charts";

export default function PieChart({trans}) {
  return (
    <div id='chart'>
        <span id='chart-label'>Expenses by Category</span>
        <Chart
        chartType="PieChart"
        data={trans}
        options={{
            height: 385,
            _title: "Total Spend by Category",
        }}
        legendToggle
        />
    </div>
  );
}