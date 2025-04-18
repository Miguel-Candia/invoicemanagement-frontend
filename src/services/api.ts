import { CreateCreditNote, GetCreditNotes, InvoiceSearchFilter, UploadResult } from "../types/types";


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;



export const getAllInvoice = async () => {
    const res = await fetch(`${API_BASE_URL}getAllInvoice`);
    if (!res.ok) throw new Error("Error getting invoices");
    return res.json();
  };


export async function uploadJsonFile(file: File): Promise<UploadResult> {
    const formData = new FormData();
    formData.append('fileInvoice', file);
  
    const response = await fetch(`${API_BASE_URL}uploadInvoice`, {
      method: 'POST',
      body: formData,
    });
  
    if (!response.ok) {
      const message = await response.text();
      throw new Error(message || 'Error uploading JSON file');
    }

    const result: UploadResult = await response.json();
    return result;

  }

  export async function searchInvoices(filter: InvoiceSearchFilter) {
    const res = await fetch(`${API_BASE_URL}search`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(filter),
    });
  
    if (!res.ok) throw new Error('Error searching for invoices');
    return res.json();
  }

  export async function addCreditNote(filter: CreateCreditNote) {
    const res = await fetch(`${API_BASE_URL}creditNote`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(filter),
    });
  
    if (!res.ok) {
      const msg = await res.text();
      throw new Error(msg || 'Error adding credit note');
    }
  
    return res.json();
  }

  export async function GetCreditNotesByInvoice(filter: GetCreditNotes) {
    const res = await fetch(`${API_BASE_URL}creditNotesByInvoice`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(filter),
    });
  
    if (!res.ok) throw new Error('Error');
    return res.json();
  }


  