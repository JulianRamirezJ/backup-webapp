import React, { useState } from 'react';
import axios from 'axios';

function BackupForm() {
  const [inputFolder, setInputFolder] = useState('');
  const [outputFolder, setOutputFolder] = useState('');
  const [pass, setPass] = useState('');
  const [message, setMessage] = useState('');

  const handleInputFolderChange = async () => {
    try {
      const directoryHandle = await window.showDirectoryPicker();
      setInputFolder(directoryHandle);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOutputFolderChange = async () => {
    try {
      const directoryHandle = await window.showDirectoryPicker();
      setOutputFolder(directoryHandle);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const response = await axios.post(
      'https://cors-anywhere.herokuapp.com/http://localhost:8000/backup/create', 
      {
        input_folder: inputFolder,
        output_folder: outputFolder,
        pass: pass,
      }, 
      { headers: { 'X-Requested-With': 'XMLHttpRequest' } }
    );
  
    setMessage(response.data.message);
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Input folder:
        <button type="button" onClick={handleInputFolderChange}>Choose Folder</button>
      </label>
      <br />
      <label>
        Output folder:
        <button type="button" onClick={handleOutputFolderChange}>Choose Folder</button>
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={pass} onChange={(event) => setPass(event.target.value)} />
      </label>
      <br />
      <button type="submit">Create Backup</button>
      <br />
      {message && <div>{message}</div>}
    </form>
  );
}

export default BackupForm;
