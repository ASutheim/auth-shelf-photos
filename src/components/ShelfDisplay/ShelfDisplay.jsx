import { useSelector, useDispatch } from "react-redux"

function ShelfDisplay() {
    const dispatch = useDispatch();
    const displayReducer = useSelector(store => store.displayReducer)

    return (
        console.log("hi")
    );
}

export default ShelfDisplay