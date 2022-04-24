const Car = ({car}) => {
    const {id, model, price, year} = car;

    return (
        <li>
            <div>Id: {id}</div>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <hr/>
        </li>
    );
};

export {Car};