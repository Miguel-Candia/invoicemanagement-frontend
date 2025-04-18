
interface Props {
  invoiceNumber: string;
  paymentStatus: string;
  status: string;
  onChangeInvoice: (value: string) => void;
  onChangePaymentStatus: (value: string) => void;
  onChangeStatus: (value: string) => void;
  onSearch: () => void;
}

export default function SearchBar({
  invoiceNumber,
  paymentStatus,
  status,
  onChangeInvoice,
  onChangePaymentStatus,
  onChangeStatus,
  onSearch,
}: Props) {
  return (
    <div className="mb-3">
    <div className="d-flex gap-2 flex-wrap">
      <input
        type="text"
        className="form-control"
        placeholder="Search by number..."
        value={invoiceNumber}
        onChange={(e) => onChangeInvoice(e.target.value)}
      />

      <select
        className="form-select w-auto"
        value={status}
        onChange={(e) => onChangeStatus(e.target.value)}
      >
        <option value="">Invoice Status</option>
        <option value="Issued">Issued</option>
        <option value="Cancelled">Cancelled</option>
        <option value="Partial">Partial</option>
      </select>

      <select
        className="form-select w-auto"
        value={paymentStatus}
        onChange={(e) => onChangePaymentStatus(e.target.value)}
      >
        <option value="">Payment Status</option>
        <option value="Pending">Pending</option>
        <option value="Overdue">Overdue</option>
        <option value="Paid">Paid</option>
      </select>

      <button className="btn btn-primary" type="button" onClick={onSearch}>
        Search
      </button>
    </div>
  </div>
  );
}