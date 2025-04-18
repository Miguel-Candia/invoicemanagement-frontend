// src/components/CreditNoteList.tsx
import { CreditNote } from '../types/types';

interface Props {
  creditNotes: CreditNote[];
}

export default function CreditNoteList({ creditNotes }: Props) {
  if (!creditNotes || creditNotes.length === 0) return null;

  return (
    <div className="mt-5">
      <h2>Credit notes</h2>
      <ul>
        {creditNotes.map((note, index) => (
          <li key={note.id}>
            Credit notes {index + 1} - ${note.amount.toLocaleString()} (Date: {new Date(note.createdAt).toLocaleDateString()})
          </li>
        ))}
      </ul>
    </div>
  );
}
