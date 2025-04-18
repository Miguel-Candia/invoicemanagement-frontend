import { Link } from 'react-router-dom';
import { Invoice } from '../types/types';

interface Props {
  invoices: Invoice[];
}

export default function InvoiceTable({ invoices }: Props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Number</th>
          <th>Amount</th>
          <th>Payment Date</th>
          <th>Invoice Status</th>
          <th>Payment Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>

      {invoices.map((inv) => (
          <tr key={inv.id}>
            <td>{inv.invoiceNumber}</td>
            <td>${inv.totalAmount}</td>
            <td>{inv.paymentDate 
            ? new Date(inv.paymentDate).toLocaleDateString('es-ES')
            : ''}</td>
            <td>{inv.status}</td>
            <td>{inv.paymentStatus}</td>
            <td>
              <Link to={`/invoice/${inv.id}`} state={{ invoice: inv }}>
                Add Credit Note
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}