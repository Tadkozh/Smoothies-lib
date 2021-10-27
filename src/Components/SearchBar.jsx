import React from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
//https://www.npmjs.com/package/react-search-autocomplete

function SearchBar() {
  const items = [
    {
      id: 0,
      name: "Cobol",
      state: "Cobol2",
    },
    {
      id: 1,
      name: "JavaScript",
      state: "JavaScript2",
    },
    {
      id: 2,
      name: "Basic",
      state: "Basic2",
    },
    {
      id: 3,
      name: "PHP",
      state: "PHP2",
    },
    {
      id: 4,
      name: "Java",
      state: "Java2",
    },
  ];

  const formatResult = (item) => {
    return item;
    // return (<p dangerouslySetInnerHTML={{__html: '<strong>'+item+'</strong>'}}></p>); //To format result as html
  };

  return (
    <div className="SearchBar">
      <header className="SearchBar-header">
        <div
          style={{
            width: 300,
          }}
        >
          <ReactSearchAutocomplete
            items={items}
            fuseOptions={{ keys: ["name", "state"] }} // gere les key a afficher
            //nécessaire, sinon les résultats seront vides
            resultStringKeyName="name" //affiche key
            autoFocus
            showIcon={false}
            styling={{
              height: "44px",
              border: "1px solid black",
              borderRadius: " 24px",
              backgroundColor: "white",
              boxShadow: "green 0px 1px 6px 0px",
              color: "#212121",
              fontSize: "1rem",
              iconColor: "Yellow",
              lineColor: "red",
              placeholderColor: "grey",
              clearIconMargin: "4px 50px 0 0",
            }}
            placeholder="Research a product"
            inputDebounce="600" // place un temps avant affichage du autocomplete
            maxResults="11" //renvoi max de resultat a la recherche
            formatResult={formatResult}
            >  <button type="submit">Search</button> </ReactSearchAutocomplete>
        
        </div>
      </header>
    </div>
  );
}

export default SearchBar;
