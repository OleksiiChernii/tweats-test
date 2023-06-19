import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/slice';
import { selectFilter } from 'redux/selectors';

export const DropdownMenu = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const options = ['all', 'following', 'follow'];
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
