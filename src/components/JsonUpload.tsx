import Swal from 'sweetalert2';
import { uploadJsonFile } from '../services/api';


export default function JsonUpload() {

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => 
    {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const result = await uploadJsonFile(file);
      Swal.fire({
        icon: 'success',
        title: 'File processed',
        html: `
          <p><strong>${result.message}</strong></p>
          <p>Loaded: ${result.loaded}</p>
          <p>Rejected: ${result.rejected}</p>
          <p>Duplicates: ${result.duplicated}</p>
        `,
      });
    } catch (error) {
      Swal.fire('Error', (error as Error).message, 'error');
    }
  };

  return (
    <div className="mb-3">
      <input 
      type="file" 
      className="form-control w-auto" 
      accept=".json" 
      onChange={handleFileChange} />
    </div>
  );
}
