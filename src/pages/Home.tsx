import { useEffect, useState } from 'react';
import InvoiceTable from '../components/InvoiceTable';
import JsonUpload from '../components/JsonUpload';
import SearchBar from '../components/SearchBar';
import { Invoice } from '../types/types';
import { getAllInvoice, searchInvoices } from '../services/api';

function Home() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [status, setStatus] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');

  useEffect(() => {
    fetchAllInvoices();
  }, []);

  const fetchAllInvoices = async () => {
    try {
      const data = await getAllInvoice();
      setInvoices(data);
    } catch (error) {
      console.error('Error uploading invoices:', error);
    }
  };

  const handleSearch = async () => {
    if (
      invoiceNumber.trim() === '' &&
      status.trim() === '' &&
      paymentStatus.trim() === ''
    ) {
      fetchAllInvoices();
      return;
    }

    try {
      const result = await searchInvoices({
        invoiceNumber,
        status,
        paymentStatus,
      });
      setInvoices(result);
    } catch (error) {
      console.error('Search error:', error);
    }
  };


  return (
<div className="container mt-4">
  <JsonUpload />

  <h1 className="text-center">Invoice Management</h1>

  <SearchBar
        invoiceNumber={invoiceNumber}
        paymentStatus={paymentStatus}
        status={status}
        onChangeInvoice={setInvoiceNumber}
        onChangePaymentStatus={setPaymentStatus}
        onChangeStatus={setStatus}
        onSearch={handleSearch}
  />

  <InvoiceTable invoices={invoices} />
</div>
  );
}

export default Home;
