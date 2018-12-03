import React from 'react';

const TableRow = ({ name, value }) => (
  <tr>
    <td className="is-size-3 has-text-weight-light">{name}</td>
    <td className="is-size-3 has-text-weight-light">{value}</td>
  </tr>
)

export default TableRow;
