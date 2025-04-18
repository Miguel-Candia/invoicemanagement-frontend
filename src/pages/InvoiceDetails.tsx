import CreditNoteForm from '../components/CreditNoteForm';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CreditNote, Invoice } from '../types/types';
import CreditNoteList from '../components/CreditNoteList';
import { GetCreditNotesByInvoice } from '../services/api';

export default function InvoiceDetails() {

  const location = useLocation();
  const navigate = useNavigate();
  const initialInvoice  = location.state?.invoice as Invoice | undefined;

  const [creditNotes, setCreditNotes] = useState<CreditNote[]>(initialInvoice?.creditNotes || []);


  if (!initialInvoice) {
    navigate('/');
    return null;
  }

  const refreshCreditNotes = async () => {
    const notes = await GetCreditNotesByInvoice({ invoiceId: Number(initialInvoice.id) });
    setCreditNotes(notes);
  };


  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Invoice Detail</h1>

      <div className="mb-4">
        <p><strong>Number:</strong> {initialInvoice.invoiceNumber}</p>
        <p><strong>Amount:</strong> {initialInvoice.totalAmount}</p>
        <p><strong>Invoice Status:</strong> {initialInvoice.status}</p>
        <p><strong>Payment Status:</strong> {initialInvoice.paymentStatus}</p>
        <p><strong>	Payment Date:</strong> {initialInvoice.paymentDate}</p>
      </div>

      <CreditNoteForm invoiceId={Number(initialInvoice.id)} onAdded={refreshCreditNotes} />

      <CreditNoteList creditNotes={creditNotes} />
      
    </div>
  );
}
