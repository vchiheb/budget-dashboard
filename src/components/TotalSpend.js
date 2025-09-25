export default function TotalSpend({totalMonthly}) {
    return(
        <>
        <div className="container">
            <div id="total-spend">
                <h2>Total Spent this Month: ${totalMonthly.toFixed(2)} </h2>
            </div>
        </div>
        <div className="container">
            <div id="no-data" className={totalMonthly > 0 ? 'hidden' : ''}>
                <h2>No results.</h2>
            </div>
        </div>
        </>
    )
}