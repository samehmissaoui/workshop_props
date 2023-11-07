import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Components/Item';

const ListItem = ({ itemArray }) => {
  const handleClick = (name) => alert(`The product name is ${name}`);
  return (
    <div className='container'>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Photo</th>
            <th scope='col'>Name</th>
            <th scope='col'>Price</th>
          </tr>
        </thead>
        <tbody>
          {itemArray.map((item) => (
            <Item item={item}  handleClick={handleClick} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

ListItem.propTypes = {
  itemArray: PropTypes.object,
};

export default ListItem;
