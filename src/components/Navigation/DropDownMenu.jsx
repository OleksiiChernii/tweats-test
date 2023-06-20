import Dropdown from 'react-dropdown';
import './dropdown.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/slice';
import { selectFilter, selectOptions } from 'redux/selectors';

export const DropdownMenu = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const options = useSelector(selectOptions);
  const handler = e => {
    dispatch(setFilter(e.value));
  };

  return (
    <Dropdown
      options={options}
      onChange={handler}
      value={filter}
      placeholder="Select an option"
    />
  );
};
