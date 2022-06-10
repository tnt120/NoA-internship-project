import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AutoCompleteSearchBarItem from './AutoCompleteSearchBarItem';

/**
 * @typedef {object} AutoCompleteSearchBarProps
 * @property {string} id
 * @property {function} addItem
 */

/**
 * @param {AutoCompleteSearchBarProps} props
 */

const AutoCompleteSearchBar = props => {
  const [myItems, setMyItems] = useState([]);
  const [myValue, setValue] = useState('');

  const createSearchBarItem = item => {
    setValue(item);
    if (item[item.length - 1] === ' ') {
      setMyItems(prev => [...prev, { name: item.substr(0, item.length - 1), id: uuidv4() }]);
      props.addItem(item.substr(0, item.length - 1));
      setValue('');
    }
  };

  const removeSearchBarItem = id => {
    setMyItems(myItems.filter(item => item.id !== id));
  };

  return (
    <div className="SearchBar">
      {myItems.length > 0 && myItems.map(item => <AutoCompleteSearchBarItem key={item.id} item={item} removeElement={removeSearchBarItem} />)}
      <input className="SearchBarInput" list={props.id} type="text" name="inputValue" id="inputValue" value={myValue} onChange={e => createSearchBarItem(e.target.value)}></input>
    </div>
  );
};

export default AutoCompleteSearchBar;
