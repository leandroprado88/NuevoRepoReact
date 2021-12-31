import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({item}) => {


    
    return (
        <><div>
            <div className="col">
                <div key={item.id} className="row row-cols-3 row-cols-md-4 g-6"> 
                    <div className="card">
                        <img src={item.foto} className="card-img-top" alt={item.name} />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.price}</p>
                        </div>
                        <Link to={`/detalle/${item.id}`}>
                            <button className="btn btn-light">
                                Detalle del producto
                            </button>
                        </Link>
                    </div>
                </div>
            </div>  
        </div></>
        
    )
}

export default Item;