import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/slice';
import { selectFilter } from 'redux/selectors';

export const RadioButtons = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);
  const handler = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <FormControl>
      <RadioGroup row name="radio-buttons" value={value} onChange={handler}>
        <FormControlLabel value="all" control={<Radio />} label="SHOW ALL" />
        <FormControlLabel value="follow" control={<Radio />} label="FOLLOW" />
        <FormControlLabel
          value="following"
          control={<Radio />}
          label="FOLLOWING"
        />
      </RadioGroup>
    </FormControl>
  );
};
