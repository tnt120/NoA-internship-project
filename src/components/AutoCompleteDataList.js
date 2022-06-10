import { v4 as uuidv4 } from 'uuid';

/**
 * @typedef {object} AutoCompleteDataListProps
 * @property {string[]} listItems
 * @property {string} id
 */

/**
 * @param {AutoCompleteDataListProps} props
 */

const AutoCompleteDataList = props => {
  return (
    <datalist id={props.id}>
      {props.listItems.map(item => (
        <option key={uuidv4()} value={item} />
      ))}
    </datalist>
  );
};

export default AutoCompleteDataList;
