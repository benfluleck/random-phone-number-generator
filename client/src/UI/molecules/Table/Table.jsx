import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import TableRow from '../../atoms/TableRow/TableRow';

const Table = ({ items }) => {
  const allRows = items.map((item, index) => (
    <Fragment key={`${item.name}-${index}`}>
      <TableRow
        name={item.name}
        value={item.value}
      />
    </Fragment>
  ));

  return (
    <Fragment>
      <table className="table is-striped is-hoverable is-fullwidth">
        <tbody>
          {allRows}
        </tbody>
      </table>
    </Fragment>
  );
};

Table.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.oneOfType([ PropTypes.string, PropTypes.node ]).isRequired,
      value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
    }).isRequired
  ).isRequired
};

export default Table;
