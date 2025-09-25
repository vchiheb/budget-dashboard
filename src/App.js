import { useState } from 'react';
import './css/style.css';
import { data } from './data/transactions';
import { sortTransactions, addKeys, getMonthOfData, getTotalSpend, getCategories, months } from './utils/transactions';
import Header from './components/Header';

import Dashboard from './components/Dashboard';

function App() {

  let [month, setMonth] = useState(1);
  let [year, setYear] = useState(2024);
  let [monthAsString, setMonthAsString] = useState("January");
  let [page, setPage] = useState(0);
  const rowsPerPage = 10;

  let transactions = sortTransactions(data);
  transactions = addKeys(transactions);
  const transactionsByMonth = getMonthOfData(year, month, transactions);
  const intTotalSpend = getTotalSpend(year, month, transactions);
  const intNumPages = transactionsByMonth.length / rowsPerPage;
  const categories = getCategories(transactions, year, month);

  function onButtonClickPrev() {
    let iMonth = 0;
    let iYear = 2024;
    if (month === 1) {
      iMonth = 12;
      iYear = year - 1;
    } else {
      iYear = year;
      iMonth = month - 1;
    }
    let strMonth = months[iMonth - 1];
    setMonth(iMonth);
    setYear(iYear);
    setMonthAsString(strMonth);
    setPage(0);
  }

  function onButtonClickNext() {
    let iMonth = 0;
    let iYear = 2024;
    if (month === 12) {
      iMonth = 1;
      iYear = year + 1;
    } else {
      iYear = year;
      iMonth = month + 1;
    }
    let strMonth = months[iMonth - 1];
    setMonth(iMonth);
    setYear(iYear);
    setMonthAsString(strMonth);
    setPage(0);
  }

  function getPage(page) {
    setPage(page);
  }

  return (
    <article>
      <Header />
      <Dashboard transactions={transactions} transByMonth={transactionsByMonth} month={monthAsString} year={year} sumByCategory={categories} onButtonClickPrev={onButtonClickPrev} onButtonClickNext={onButtonClickNext} totalSpend={intTotalSpend} numPages={intNumPages} numPage={page} getPage={getPage}/>
    </article>
  );
}

export default App;
