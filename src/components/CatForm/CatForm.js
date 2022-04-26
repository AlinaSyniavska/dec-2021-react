import {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {catActions} from "../../redux";


const CatForm = () => {
    const catName = useRef();
    const btnSave = useRef();
    const btnUpdate = useRef();

    const {catForUpdate} = useSelector(state => state.catState);
    const dispatch = useDispatch();

    useEffect(() => {
        if (catForUpdate) {
            catName.current.value = catForUpdate.name;
            btnUpdate.current.disabled = false;
            btnSave.current.disabled = true;
        } else {
            btnUpdate.current.disabled = true;
            btnSave.current.disabled = false;
        }
    }, [catForUpdate])

    const createCatName = () => {
        if (catName.current.value.trim() !== '') {
            dispatch(catActions.addCat({name: catName.current.value}));
            catName.current.value = '';
        } else {
            alert('Enter Cat name!');
        }
    }

    const updateCatName = () => {
        if (catName.current.value.trim() !== '') {
            dispatch(catActions.updateCat({id: catForUpdate.id, name: catName.current.value}));
            catName.current.value = '';
            btnUpdate.current.disabled = true;
            btnSave.current.disabled = false;
        } else {
            alert('Enter Cat name!');
        }
    }

    return (
        <div>
            <div>
                <label>Add Cat:
                    <input type="text" ref={catName} required/>
                </label>
                <button ref={btnSave} onClick={createCatName}>Save</button>
                <button ref={btnUpdate} onClick={updateCatName}>Save Update</button>
            </div>
        </div>
    );
};

export {CatForm};