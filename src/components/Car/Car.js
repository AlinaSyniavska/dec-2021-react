const Car = ({car}) => {
    const {id, model, price, year} = car;

    return (
        <div>
            <div>{id}: Model - {model}</div>
            <div>Price - {price}</div>
            <div>Year - {year}</div>
            <br/>
        </div>
    );
};

export {Car};