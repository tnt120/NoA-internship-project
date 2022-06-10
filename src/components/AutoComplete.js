import AutoCompleteSearchBar from './AutoCompleteSearchBar';
import AutoCompleteDataList from './AutoCompleteDataList';
import { useState } from 'react';

/**
 * @typedef {object} AutoCompleteProps
 * @property {string[]} listItems
 */

/**
 * @param {AutoCompleteProps} props
 */

const AutoComplete = props => {
  const id = 'AutoComplete';
  const [myItems, setMyItems] = useState(['ACC', 'Accent', 'Ace DASL', 'ACL2', 'ACT-III', 'Action!', 'ActionScript', 'Active Server Pages']);
  const addItem = item => {
    if (myItems.findIndex(element => element.toUpperCase() === item.toUpperCase()) === -1) {
      setMyItems(prev => [...prev, item]);
    }
  };

  return (
    <div className="AutoComplete">
      <p>Click "space" to add tag.</p>
      <AutoCompleteSearchBar id={id} addItem={addItem} />
      <AutoCompleteDataList id={id} listItems={myItems} />
    </div>
  );
};

export default AutoComplete;
