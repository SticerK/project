import PropTypes from 'prop-types';

const GroupList = ({
  str,
  onChangeFilter,
  valueProp,
  contentProp,
  activeItems,
}) => {
  return (
    <ul className='list-group'>
      {Object.keys(str).map((item) => (
        <li
          className={
            'list-group-item' + (str[item] === activeItems ? ' active' : '')
          }
          role='button'
          key={str[item][valueProp]}
          onClick={() => {
            onChangeFilter(str[item]);
          }}>
          {str[item][contentProp]}
        </li>
      ))}
    </ul>
  );
};

GroupList.propTypes = {
  str: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  valueProp: PropTypes.string.isRequired,
  contentProp: PropTypes.string.isRequired,
};

GroupList.defaultProps = {
  valueProp: '_id',
  contentProp: 'name',
};

export default GroupList;
