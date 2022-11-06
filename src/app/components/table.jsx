import TableHeader from './tableHeader';
import TableBody from './tableBody';

const Table = ({ setSort, sortBy, columns, data, resultSarch }) => {
  return (
    <table className='table'>
      <TableHeader
        setSort={setSort}
        sortBy={sortBy}
        columns={columns}></TableHeader>

      <TableBody {...{ columns, data, resultSarch }} />
    </table>
  );
};

export default Table;
