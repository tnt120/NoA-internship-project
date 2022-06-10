/**
 * @typedef {object} AutoCompleteSearchBarItemProps
 * @property {{name: string; id: string}} item
 * @property {function} removeElement
 */

/**
 * @param {AutoCompleteSearchBarItemProps} props
 */

const AutoCompleteSeachBarItem = props => {
  return (
    <button className="SearchBarItemButton" onClick={e => props.removeElement(props.item.id)}>
      {props.item.name}
    </button>
  );
};

export default AutoCompleteSeachBarItem;
