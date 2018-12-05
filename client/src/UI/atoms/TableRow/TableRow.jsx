import React from 'react';
import PropTypes from 'prop-types';

const TableRow = ({ name, value }) => (
  <tr>
    <th className="has-text-weight-light">{name}</th>
    <td className="is-size-3">{value}</td>
  </tr>
);

TableRow.propTypes = {
  name: PropTypes.oneOfType([ PropTypes.string, PropTypes.node ]).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number ]).isRequired,
};


export default TableRow;
