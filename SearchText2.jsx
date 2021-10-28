import React, { useEffect, useState } from "react";
import axios from "axios";
import './styles/search.css'

const SearchText2 = () => {

    const [term, setTerm] = useState("");
    const [termCat, setTermCat] = useState("");
    const [termF, setTermF] = useState("");
    const [products, setProducts] = useState(null);

    useEffect(() => {
        const url = `https://fr.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=categories&tag_contains_0=contains&tag_0=${termCat}&tagtype_1=_keywords&tag_contains_1=contains&tag_1=${term}&json=true`;
        
    
        axios(url).then(({ data }) => {
          setProducts(data.products);
        });
      }, [termF]);
      

    const handleSubmit = (e) => {
    e.preventDefault();

    setTermF(term,termCat);
    };


    return (
        <div className="Container">
            {" "}
            <h1>Open Food Facts</h1>
            <form onSubmit={handleSubmit}>
                <input
                    className="form-control mr-sm-2 m-2"
                    type="search"
                    placeholder="Chercher un produit"
                    aria-label="Search"
                    value={term || termCat}
                    onChange={(e) => setTerm(e.target.value)}
                />
                <button>Search</button>
            </form>

            {/* gen code
                ferrero
                nutella
                chocolat */}

            {/* falsy and truthy values */}
            {console.log(products)}

            
            {products &&  (
                <div className='map-products'>
                    
                    {products.map(product => 
                    <p className='items' key={product.id}>Marque :{product.brands} 
                    <img className='images' key={product.id}src={product.image_front_small_url} alt={''}/>
                    </p>)} 

                </div>

                
            )}
        </div>
    );
};
    
export default SearchText2

/*
<div>                                 
{products.map(product => <img key={product.id}src={product.image_front_small_url} alt={''}/>)}
</div>
*/
