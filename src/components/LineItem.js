export default function LineItem({date, amount, payee, category}) {
    return (
        <tr>
            <td>{date}</td>
            <td>${amount}</td>
            <td>{payee}</td>
            <td>{category}</td>
        </tr>
    )
}