import { changeFilter, selectFilter } from '../../redux/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function SearchBox() {
    const dispatch = useDispatch();
    const filterValue = useSelector(selectFilter);

    return <>
        <p>Find contacts by name</p>
        <input value={filterValue} onChange={(e) => { dispatch(changeFilter(e.target.value)) }} type="text" />
    </>;
}