export interface Invoice {
    id: string;
    invoiceNumber: string;
    totalAmount: number;
    paymentDate: number;
    status: 'Issued' | 'Cancelled' | 'Partial';
    paymentStatus: 'Pending' | 'Overdue' | 'Paid';
    creditNotes?: CreditNote[];
  }

  export interface CreditNote {
    id: number;
    amount: number;
    createdAt: string;
    invoiceId: number;
  }


  export interface UploadResult {
    message: string;
    loaded: number;
    rejected: number;
    duplicated: number;
  }

  export interface InvoiceSearchFilter {
    invoiceNumber?: string;
    status?: string;
    paymentStatus?: string;
  }

  export interface CreateCreditNote {
    invoiceId: number;
    amount: number;
  }

  export interface GetCreditNotes {
    invoiceId: number;
  }
  
