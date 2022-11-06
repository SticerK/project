import lodash from 'lodash';

const TableBody = ({ data, columns, resultSarch }) => {
  const isComponent = (column, item) => {
    if (columns[column].component) {
      if (typeof columns[column].component === 'function') {
        return columns[column].component(item);
      }
      return columns[column].component;
    } else {
      return lodash.get(item, columns[column].i);
    }
  };
  if (resultSarch) {
    data = resultSarch;
  }

  return (
    <tbody>
      {data.map((item) => (
        <tr key={item._id}>
          {Object.keys(columns).map((column) => (
            <td key={column.i}>{isComponent(column, item)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
