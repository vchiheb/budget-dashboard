import LineItem from './LineItem';
import '../css/style.css';
import TotalSpend from './TotalSpend';
import DashboardHeader from './DashboardHeader';
import PieChart from './PieChart';

export default function Dashboard({transactions, transByMonth, month, year, onButtonClickPrev, onButtonClickNext, sumByCategory, totalSpend, numPages, numPage, getPage}) {
  const iStart = numPage * 10;
  const iEnd = iStart + 10;

  let pages = [];

  for (let i = 0; i < numPages; i++) {
    pages.push(i);
  }
    return (
      <>
          <div className='container'>
          <DashboardHeader transactions={transactions} month={month} year={year} onButtonClickPrev={onButtonClickPrev} onButtonClickNext={onButtonClickNext} ></DashboardHeader>
          </div>
          <TotalSpend totalMonthly={totalSpend} />
          <div className={transByMonth.length < 1 ? 'hidden' : 'container'}>
            <PieChart trans={sumByCategory} />
            <div id="transactions" className={transByMonth.length < 1 ? 'hidden' : ''}>
              <h2>Transactions this Month</h2>
              <table>
                <thead>
                  <tr>
                  <th>
                    Date
                  </th>
                  <th>
                    Amount
                  </th>
                  <th>
                    Payee
                  </th>
                  <th>
                    Category
                  </th>
                  </tr>
              </thead>
              <tbody>
          {
            transByMonth.slice(iStart, iEnd).map( (dataItem) => (
                <LineItem key={dataItem.key} {...dataItem}/>
            ))
          }
            </tbody>
          </table>
          <div id="pagination">
          {
              pages.map( (item) => (
              <span className={(item == numPage) ? 'current page-num' : 'page-num'} onClick={() => getPage(item)} key={item}>{item + 1}</span>
              )
            )
          }
          </div>
        </div>
          </div>
    </>
    )
}

