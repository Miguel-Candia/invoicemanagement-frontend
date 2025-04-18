import { useState } from "react";
import { addCreditNote } from "../services/api";
import Swal from "sweetalert2";
import { CreateCreditNote } from "../types/types";

interface Props {
  invoiceId: number;
  onAdded: () => void;
}

export default function CreditNoteForm({ invoiceId, onAdded }: Props) {

  const [amount, setAmount] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const parsedAmount = parseFloat(amount);
    if (!amount || parsedAmount <= 0) {
      Swal.fire('Error', 'You must enter a valid amount', 'error');
      return;
    }

    const creditNote: CreateCreditNote = {
      invoiceId,
      amount: parsedAmount,
    };

    try {
      await addCreditNote(creditNote);
      Swal.fire('Success', 'Credit note added successfully', 'success');
      setAmount('');
      onAdded();
    } catch (error) {
      Swal.fire('Error', (error as Error).message, 'error');
    }
  };


  return (
    <form onSubmit={handleSubmit} className="border p-3">
      <h2 className="h5 mb-3">Add Credit Note</h2>

      <div className="mb-3">
        <label className="form-label">Amount</label>
        <input
          type="number"
          className="form-control"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary">Add</button>
    </form>

    
  );
}
