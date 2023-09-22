// MappedFieldsTable.js
import React from 'react';

const MappedFieldsTable = ({ mappings }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Salesforce Field</th>
          <th>CallHub Field</th>
        </tr>
      </thead>
      <tbody>
        {mappings.map((mapping, index) => (
          <tr key={index}>
            <td>{mapping.left}</td>
            <td>{mapping.right}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MappedFieldsTable;
