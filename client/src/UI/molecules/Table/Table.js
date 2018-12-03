import React, { Fragment } from 'react';

import TableRow from '../../atoms/TableRow/TableRow'

const Table = ({ items }) => {
  const allRows = items.map((item, index) =>
    <Fragment key={`${item.name}-${index}`}>
      <TableRow
        name={item.name}
        value={item.value}
      />
    </Fragment>
  )

  return(
    <Fragment>
      <table className="table is-striped is-hoverable is-fullwidth">
        <tbody>
          {allRows}
        </tbody>
      </table>
    </Fragment>
  )
}


export default Table;
