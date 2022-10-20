const TableHeader = ({ setSort, sortBy, columns }) => {
  const sortItems = (param) => {
    if (sortBy.iter === param) {
      setSort({ ...sortBy, order: sortBy.order === 'asc' ? 'desc' : 'asc' });
    } else {
      setSort({ iter: param, order: 'asc' });
    }
  };
  return (
    <thead>
      <tr>
        {Object.keys(columns).map((column) => (
          <th
            key={column}
            role='button'
            onClick={
              columns[column].i
                ? () => {
                    sortItems(columns[column].i);
                  }
                : undefined
            }
            scope='col'>
            {columns[column].name}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
