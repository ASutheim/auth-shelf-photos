import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";


function ShelfDisplay() {
    const dispatch = useDispatch();
    const displayReducer = useSelector(store => store.displayReducer)
    console.log("DISPLAY REDUCER IS....", displayReducer)
    

    useEffect(() => {
        console.log('in useEffect');
        const action = { type: 'FETCH_ITEMS'};
        dispatch(action);
    }, []);

    return (
        <div>
            {displayReducer.map((item, i) => {
                return <div key={i}> 
                <img src={item.image_url}></img>
                <p>{item.description}</p>
            </div>}

            )}
        </div>
    );
}

export default ShelfDisplay
