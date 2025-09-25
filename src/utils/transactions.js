
  export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export function addKeys(data) {
    let transactions = [];
    for (let i = 0; i < data.length; i++) {
      let transaction = 
        {
          date: data[i].date,
          amount: data[i].amount,
          payee: data[i]. payee,
          category: data[i].category,
          key: i
        };
      transactions.push(transaction);
    }

    return transactions;
  }

export function sortTransactions(data) {
  let transactions = data;
  transactions.sort((a, b) => {
    a = new Date(a.date);
    b = new Date(b.date);
    return a < b ? -1 : 1;
  });
  return transactions;
}

export function getMonthOfData(year, month, data) {
  let trans = [];
  for (let i = 0; i < data.length; i++) {
    let date = new Date(data[i].date);
    if ((date.getFullYear() == year) && (date.getMonth() == (month -1))) {

      let transaction = 
      {
        date: data[i].date,
        amount: data[i].amount,
        payee: data[i]. payee,
        category: data[i].category,
        key: i
      };
      trans.push(transaction);
    }
  }
  return trans;
}

export function getTotalSpend(year, month, data) {
  let iTotalSpend = 0;
  for (let i = 0; i < data.length; i++) {
    let date = new Date(data[i].date);
    if ((date.getFullYear() == year) && (date.getMonth() == (month -1))) {
      iTotalSpend += data[i].amount;
    }
  }
  return iTotalSpend;
}

export function getCategories(trans, year, month) {
  let categories = [];
  let result = [["Category", "Amount"]];
  for (let i = 0; i < trans.length; i++) {
    let dtDate = new Date(trans[i].date);
    let iMonth = dtDate.getMonth();
    let iYear = dtDate.getFullYear();
    if ((iYear == year) && ((iMonth + 1) == month)) {
      let category = trans[i].category;
      let total = trans[i].amount;
      let keys = Object.keys(categories);
      //console.log(' keys: ' + keys);
      if (!keys.includes(category)) {
        categories[category] = total;
      } else {
        let prevTotal = categories[category];
        categories[category] = total + prevTotal;
        //console.log('cat: ' + category + " prev total: " + prevTotal + ' this total: ' + total);
      }
    }
  }
     Object.keys(categories).forEach(key => {
      let a = [key, categories[key]];
      result.push(a);
    });
  return result;
}

  