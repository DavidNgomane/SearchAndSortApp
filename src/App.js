import React, { useState } from 'react';
//import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

function App() {
  const [file, setFile] = useState(null);
  const [delimiter, setDelimiter] = useState(',');
  const [databaseUrl, setDatabaseUrl] = useState('');
  const [databaseRef, setDatabaseRef] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  }

  const handleDelimiterChange = (event) => {
    const selectedDelimiter = event.target.value;
    setDelimiter(selectedDelimiter);
  }

  const handleDatabaseUrlChange = (event) => {
    const selectedDatabaseUrl = event.target.value;
    setDatabaseUrl(selectedDatabaseUrl);

    if (firebase.apps.length === 0) {
      firebase.initializeApp({
        databaseURL: selectedDatabaseUrl
      });
    }

    const databaseReference = firebase.database().ref();
    setDatabaseRef(databaseReference);
  }

  const handleInsertData = () => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const fileContents = event.target.result;
      const rows = fileContents.split('\n');

      rows.forEach((row) => {
        const fields = row.split(delimiter);

        // Insert data into Firebase Realtime Database
        const dataToInsert = {
          field1: fields[0],
          field2: fields[1],
          field3: fields[2]
        };

        databaseRef.push(dataToInsert)
          .then(() => {
            console.log('Data inserted successfully');
          })
          .catch((error) => {
            console.error('Error inserting data:', error);
          });
      });
    }

    reader.readAsText(file);
  }

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <input type="text" value={delimiter} onChange={handleDelimiterChange} />
      <input type="text" value={databaseUrl} onChange={handleDatabaseUrlChange}
      />
<button onClick={handleInsertData}>Insert Data</button>
</div>
);
}

export default App;