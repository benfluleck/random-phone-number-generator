import React from 'react';
import PropTypes from 'prop-types';

const TableRow = ({ name, value }) => (
  <tr>
    <td className="is-size-3 has-text-weight-light">{name}</td>
    <td className="is-size-3 has-text-weight-light">{value}</td>
  </tr>
);

TableRow.propTypes = {
  name: PropTypes.oneOfType([ PropTypes.string, PropTypes.node ]).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number ]).isRequired,
};


export default TableRow;
