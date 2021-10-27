import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {

    const [term, setTerm] = useState("737628064502");
    const [termF, setTermF] = useState("");
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const url = `https://world.openfoodfacts.org/api/v0/product/${term}.json`;
    
        axios(url).then(({ data }) => {
          setProduct(data.product);
        });
      }, [termF]);

    const handleSubmit = (e) => {
    e.preventDefault();

    setTermF(term);
    };


    return (
        <div className="container">
            {" "}
            <h1>Open Food Facts</h1>
            <form onSubmit={handleSubmit}>
                <input
                    className="form-control mr-sm-2 m-2"
                    type="search"
                    placeholder="Entrer code Barre"
                    aria-label="Search"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                />
                <button>Search</button>
            </form>

            {/* gen code
                737628064502
                3017620425035 */}

            {/* falsy and truthy values */}
            {console.log(product)}

            
            {product && (
                <div>
                
                    <h2>Marque :{product.brands}</h2>
                    {
                        <div>
                        Additifs :
                        {product.additives_original_tags.map((add) => (
                            <p key={add._id}> {add.split(":")[1]} </p>
                        ))}
                        </div>
                    }

                    <h1>{product.generic_name}</h1>
                    <img src={product.image_front_small_url} alt={''} /> <br />
                    <img src={product.image_ingredients_url} alt={''} />
                    <ul>
                    <li>Marque : {product.brands}</li>
                    <li>
                        Code : {product.code}
                    </li>
                    <li>
                        {product.brand_owner}
                    </li>
                    <li>
                        {product.categories}
                    </li>
                    </ul>

                </div>

                
            )}
        </div>
    );
};
    
export default Search;
