import { useDispatch, useSelector } from 'react-redux';

import { changeFilter } from '../../redux/filtersSlice';
import { selectName } from '../../redux/selectors';

import styles from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  const handleChange = ({ target: { value } }) => dispatch(changeFilter(value));

  return (
    <>
      <label className={styles.label}>
        Find contacts by name
        <input
          className={styles.input}
          value={name}
          onChange={handleChange}
          type="text"
        />
      </label>
    </>
  );
};

export default SearchBox;
