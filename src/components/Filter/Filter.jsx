import { useDispatch, useSelector } from "react-redux";
import { getFilter } from "../../redux/contacts/selectors.js";
import { setFilter } from "../../redux/filter/filterSlice.js";
import styled from 'styled-components';

const FilterText = styled.p`
  text-transform: uppercase;
  font-weight: 700;
`;

const FilterInput = styled.input`
  flex-grow: 1;
  padding: 8px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  font: inherit;
  line-height: 16px;
  letter-spacing: 0.01em;
  resize: none;
  margin-bottom: 10px;
`;

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  return (
    <>
      <FilterText>Find contacts by name</FilterText>
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
      />
    </>
  );
};

export default Filter;
