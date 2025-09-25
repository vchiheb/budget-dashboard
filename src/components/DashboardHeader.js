export default function DashboardHeader({transactions, month, year, onButtonClickPrev, onButtonClickNext} ) {
  
  return (
    <div id="dashboard-header">
        <div>
      <h2>
        <span id="button-prev" onClick={onButtonClickPrev}>&lt;&lt;</span>
        <span id="dashboard-header-label">{month} {year}</span>
        <span id="button-next" onClick={onButtonClickNext}>&gt;&gt;</span></h2>
      </div>
    </div>
  );
}