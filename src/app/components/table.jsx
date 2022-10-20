import TableHeader from './tableHeader';
import TableBody from './tableBody';

const Table = ({ setSort, sortBy, columns, data }) => {
  return (
    <table className='table'>
      <TableHeader
        setSort={setSort}
        sortBy={sortBy}
        columns={columns}></TableHeader>

      <TableBody {...{ columns, data }} />
    </table>
  );
};

export default Table;
