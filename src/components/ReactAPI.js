import React from 'react';

class Cat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contents: [],
            isLoaded: false
        }
    }

    async componentDidMount() {
        const url = "https://aws.random.cat/meow";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({contents: data, isLoaded: true})
        //prints json to console tab
        console.log(data);
    }

    render() {
        const { isLoaded, contents } = this.state;

        if (!isLoaded)
            return <div>Loading...</div>;

        return(
            <div>
                <img src={contents.file} alt="Cat Img"/>
            </div>
        )
    }
}

class Dog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contents: [],
            isLoaded: false
        }
    }

    async componentDidMount() {
        const url = "https://random.dog/woof.json";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({contents: data, isLoaded: true})
        //prints json to console tab
        console.log(data);
    }

    render() {
        const { isLoaded, contents } = this.state;

        if (!isLoaded)
            return <div>Loading...</div>;

        return(
            <div>
                <img src={contents.url} alt="Dog Img"/>
            </div>
        )
    }
}

class Fox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contents: [],
            isLoaded: false
        }
    }

    async componentDidMount() {
        const url = "https://randomfox.ca/floof/";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({contents: data, isLoaded: true})
        //prints json to console tab
        console.log(data);
    }

    render() {
        const { isLoaded, contents } = this.state;

        if (!isLoaded)
            return <div>Loading...</div>;

        return(
            <div>
                <img src={contents.image} alt="Fox Img"/>
            </div>
        )
    }
}

class Food extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contents: [],
            isLoaded: false
        }
    }

    async componentDidMount() {
        const url = "https://foodish-api.herokuapp.com/api/";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({contents: data, isLoaded: true})
        //prints json to console tab
        console.log(data);
    }

    render() {
        const { isLoaded, contents } = this.state;

        if (!isLoaded)
            return <div>Loading...</div>;

        return(
            <div>
                <img src={contents.image} alt="Food Img"/>
            </div>
        )
    }
}

class RandBeer extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          contents: [],
          isLoaded: false
      }
  }

  async componentDidMount() {
      const url = "https://api.punkapi.com/v2/beers/random";
      const response = await fetch(url);
      const data = await response.json();
      this.setState({contents: data, isLoaded: true})
      //prints json to console tab
      console.log(data);
  }

  render() {
      const { isLoaded, contents } = this.state;

      if (!isLoaded)
          return <div>Loading...</div>;

      return(
          <div>
              <ul>
                {contents.map(beer => (
                  <li key={beer.id}>
                    <p>Name: {beer.name}</p>
                    <p>Tagline: {beer.tagline}</p>
                    <p>First Brewed: {beer.first_brewed}</p>
                    <p>Description: {beer.description}</p>
                    <p>Tagline: {beer.tagline}</p>
                    <p>Food Pairings: {beer.food_pairing}</p>
                    <p>Tagline: {beer.tagline}</p>
                    <p>abv: {beer.id}</p>
                    <img src={beer.image_url} alt="Beer Img"/>
                  </li>
                    ))}
                </ul>
          </div>
      )
  }
}

class PokemonBerry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contents: [],
            isLoaded: false
        }
    }
   
    async componentDidMount() {
        const url = "https://pokeapi.co/api/v2/berry/razz/";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({contents: data, isLoaded: true})
        //prints json to console tab
        console.log(data);
    }

    render() {
        const { isLoaded, contents } = this.state;

        if (!isLoaded)
            return <div>Loading...</div>;

        return(
            <div>
                <p>Id: {contents.id}</p>
                <p>Name: {contents.name}</p>
                <p>Item: {contents.item.name} </p>
                <p>Growth Time: {contents.growth_time}</p>
                <p>Max Harvest: {contents.max_harvest}</p>
                <p>Natural Gift Power: {contents.natural_gift_power}</p>
                <p>Size: {contents.size}</p>
                <p>Smoothness: {contents.smoothness}</p>
                <p>Soil Dryness: {contents.soil_dryness}</p>
                <p>Firmness: {contents.firmness.name}</p>
                <p>Flavors: </p>
                <ul>
                {contents.flavors.map(flavor => (
                      <li key={flavor.flavor}>
                          <p>Taste: {flavor.flavor.name}</p>
                          <p>Potency: {flavor.potency}</p>
                      </li>
                  ))}
                </ul>
            </div>
        )
    }
}

class Quotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contents: [],
            isLoaded: false
        }
    }

    async componentDidMount() {
        const url = "https://api.quotable.io/random";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({contents: data, isLoaded: true})
        //prints json to console tab
        console.log(data);
    }

    render() {
        const { isLoaded, contents } = this.state;

        if (!isLoaded)
            return <div>Loading...</div>;

        return(
            <div>
                <p>Quote: {contents.content}</p>
                <p>Author: {contents.author}</p>
            </div>
        )
    }
}

class AniQuotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contents: [],
            isLoaded: false
        }
    }

    async componentDidMount() {
        const url = "https://animechan.vercel.app/api/random";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({contents: data, isLoaded: true})
        //prints json to console tab
        console.log(data);
    }

    render() {
        const { isLoaded, contents } = this.state;

        if (!isLoaded)
            return <div>Loading...</div>;

        return(
            <div>
                <p>Quote: {contents.quote}</p>
                <p>Character: {contents.character}</p>
                <p>Anime: {contents.anime}</p>
            </div>
        )
    }
}

class StudioGhibli extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contents: [],
            isLoaded: false
        }
    }

    async componentDidMount() {
        const url = "https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({contents: data, isLoaded: true})
        //prints json to console tab
        console.log(data);
    }

    render() {
        const { isLoaded, contents } = this.state;

        if (!isLoaded)
            return <div>Loading...</div>;

        return(
          <div>
            <p>Film: {contents.title}</p>
            <p>JP Title: {contents.original_title}</p>
            <p>Romanised Title: {contents.original_title_romanised}</p>
            <p>Description: {contents.description}</p>
            <p>Director: {contents.director}</p>
            <p>Release Date: {contents.release_date}</p>
            <p>Running Time: {contents.running_time}</p>
            <p>Rotten Tomatoes Score: {contents.rt_score}</p>
          </div>
          /*
            <div>
                <ul>
                    {contents.map(film => (
                        <li key={film.id}>
                            <p>Film: {film.title}</p>
                            <p>JP Title: {film.original_title}</p>
                            <p>Romanised Title: {film.original_title_romanised}</p>
                            <p>Description: {film.description}</p>
                            <p>Director: {film.director}</p>
                            <p>Release Date: {film.release_date}</p>
                            <p>Running Time: {film.running_time}</p>
                            <p>Rotten Tomatoes Score: {film.rt_score}</p>
                        </li>
                    ))}
                </ul>
            </div>
          */
        )
    }
}

class Bitcoin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contents: [],
            isLoaded: false
        }
    }

    async componentDidMount() {
        const url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=USD";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({contents: data, isLoaded: true})
        //prints json to console tab
        console.log(data);
    }

    render() {
        const { isLoaded, contents } = this.state;

        if (!isLoaded)
            return <div>Loading...</div>;

        return(
            <div>
                <p>Bitcoin to USD: {contents.bitcoin.usd}</p>
            </div>
        )
    }
}

class GamePrice extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          contents: [],
          isLoaded: false
      }
  }

  async componentDidMount() {
      const url = "https://www.cheapshark.com/api/1.0/games?id=128";
      const response = await fetch(url);
      const data = await response.json();
      this.setState({contents: data, isLoaded: true})
      //prints json to console tab
      console.log(data);
  }

  render() {
      const { isLoaded, contents } = this.state;

      if (!isLoaded)
          return <div>Loading...</div>;

      return(
          <div>
              <p>Name: {contents.info.title}</p>
              <p>Cheapest Price Ever: {contents.cheapestPriceEver.price}</p>
              <p>Current prices: </p>
              <ul>
                {contents.deals.map(deal => (
                      <li key={deal.storeID}>
                          <p>Price: {deal.price}</p>
                          <p>Store: {deal.storeID}</p>
                      </li>
                  ))}
              </ul>
              <img src={contents.info.thumb} alt="Game Img"/>
          </div>
      )
  }
}

class Jokes extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          contents: [],
          isLoaded: false
      }
  }

  async componentDidMount() {
      const url = "https://v2.jokeapi.dev/joke/Any?type=twopart";
      const response = await fetch(url);
      const data = await response.json();
      this.setState({contents: data, isLoaded: true})
      //prints json to console tab
      console.log(data);
  }

  render() {
      const { isLoaded, contents } = this.state;

      if (!isLoaded)
          return <div>Loading...</div>;

      return(
          <div>
              <p>Setup: {contents.setup}</p>
              <p>Delivery: {contents.delivery}</p>
              <p>Joke Category: {contents.category}</p>
          </div>
      )
  }
}

class Country extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          contents: [],
          isLoaded: false
      }
  }

  async componentDidMount() {
      const url = "https://restcountries.eu/rest/v2/name/thailand?fullText=true";
      const response = await fetch(url);
      const data = await response.json();
      this.setState({contents: data, isLoaded: true})
      //prints json to console tab
      console.log(data);
  }

  render() {
      const { isLoaded, contents } = this.state;

      if (!isLoaded)
          return <div>Loading...</div>;

      return(
          <div>
                {contents.map(country => (
                      <p key={country.name}>
                          <p>Country Name: {country.name}</p>
                          <p>Native Name: {country.nativeName}</p>
                          <p>Capital: {country.capital}</p>
                          <p>Region: {country.region}</p>
                          <p>Subregion: {country.subregion}</p>
                          <p>Population: {country.population}</p>
                          <p>Area: {country.area}</p>
                          <img src={country.flag} alt="Flag Img"/>
                          <p>Langauges: </p>
                          {country.languages.map(lang => (
                          <p key={lang.name}>
                              <p>Language Name: {lang.name}</p>
                              <p>Language Native Name: {lang.nativeName}</p>
                          </p>
                          ))}
                          <p>Currencies: </p>
                          {country.currencies.map(cur=> (
                          <p key={cur.name}>
                              <p>Currency Name: {cur.name}</p>
                              <p>Currency Symbol: {cur.symbol}</p>
                          </p>
                          ))}
                      </p>
                  ))}
          </div>
      )
  }
}

class COVIDVacc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contents: [],
            isLoaded: false
        }
    }
  
    async componentDidMount() {
        const url = "https://covid-api.mmediagroup.fr/v1/vaccines?country=Australia";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({contents: data, isLoaded: true})
        //prints json to console tab
        console.log(data);
    }
  
    render() {
        const { isLoaded, contents } = this.state;
  
        if (!isLoaded)
            return <div>Loading...</div>;
  
        return(
            <div>
                <p>Country: {contents.All.country}</p>
                <p>Population: {contents.All.population}</p>
                <p>Administered: {contents.All.administered}</p>
                <p>People Vaccinated: {contents.All.people_vaccinated}</p>
                <p>People Partially Vaccinated: {contents.All.people_partially_vaccinated}</p>
            </div>
        )
    }
  }


  class MusicKpop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contents: [],
            isLoaded: false
        }
    }
  
    render() {
        const { isLoaded, contents } = this.state;
        
        //if (!isLoaded)
        //    return <div>Loading...</div>;
  
        return(
            <div>
                <p>Ultimate Kpop Playlist</p>
                <iframe width="560" height="315" 
                    src="https://www.youtube.com/embed/videoseries?list=PLZR60ITX9S_e0BZ5EZqrGiYqb4td5YSyM">
                </iframe>
            </div>
        )
    }
  }

  class MusicCountry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contents: [],
            isLoaded: false
        }
    }
  
    render() {
        const { isLoaded, contents } = this.state;

        return(
            <div>
                <p>Country Music Playlist</p>
                <iframe width="560" height="315" 
                    src="https://www.youtube.com/embed/videoseries?list=PLlYKDqBVDxX0Qzmoi2-vvHJjOAy3tRPQ_">
                </iframe>
            </div>
        )
    }
  }

  class NASAPic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contents: [],
            isLoaded: false
        }
    }
  
    async componentDidMount() {
        const url = "https://apodapi.herokuapp.com/api/";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({contents: data, isLoaded: true})
        //prints json to console tab
        console.log(data);
    }
  
    render() {
        const { isLoaded, contents } = this.state;
  
        if (!isLoaded)
            return <div>Loading...</div>;
  
        return(
            <div>
                <p>Title: {contents.title}</p>
                <p>Date: {contents.date}</p>
                <img src={contents.url} alt="NASA Img"/>
                <p>Description: {contents.description}</p>
            </div>
        )
    }
  }

class MovieAPI extends React.Component {
    //Handles StudioGhibli (Ghibli),  
    render() {
        const movie = localStorage.getItem('movie');

        if(movie === null){
            return(
                <div>
                    <p></p>
                </div>
            )
        }
        if (movie.toLowerCase() === "ghibli"){
            return (
                <StudioGhibli/>
            )
        }
        else{
            return(
                <div>
                    <p></p>
                </div>
            )
        }
    }
    
  }

  class AnimalAPI extends React.Component {
    //Handles Cat (Cat), Dog (Dog), Fox (Fox)
    render() {
        const company = localStorage.getItem('company');

        if(company === null){
            return(
                <div>
                    <p></p>
                </div>
            )
        }
        if (company.toLowerCase() === "cat"){
            return (
                <Cat />
            )
        }
        else if (company.toLowerCase() === "dog"){
            return(
                <Dog />
            )
        }
        else if (company.toLowerCase() === "fox"){
            return(
                <Fox />
            )
        }
        else{
            return(
                <div>
                    <p></p>
                </div>
            )
        }
    }
  }

  class OtherAPI extends React.Component {
    //Handles Food (Food), Beer (RandBeer), Pokemon (PokemonBerry),
    //        Quotes (Quotes), Anime Quotes (AniQuotes), Bitcoin (Bitcoin),
    //        Game Prices (GamePrice), Jokes (Jokes), Country Information (Country),
    //        COVID Vaccinations (COVIDVacc), KPop (MusicKpop),
    //        Country Music (MusicCountry), NASA (NASAPic)
    render() {
        const other = localStorage.getItem('other');
        
        if(other === null){
            return(
                <div>
                    <p></p>
                </div>
            )
        }
        else if (other.toLowerCase === "food"){
            return (
                <Food/>
            )
        }
        else if (other.toLowerCase() === "beer"){
            return(
                <RandBeer />
            )
        }
        else if (other.toLowerCase() === "pokemon"){
            return(
                <PokemonBerry />
            )
        }
        else if (other.toLowerCase() === "quotes"){
            return(
                <Quotes />
            )
        }
        else if (other.toLowerCase() === "anime quotes"){
            return(
                <AniQuotes />
            )
        }
        else if (other.toLowerCase() === "bitcoin"){
            return(
                <Bitcoin />
            )
        }
        else if (other.toLowerCase() === "game prices"){
            return(
                <GamePrice />
            )
        }
        else if (other.toLowerCase() === "jokes"){
            return(
                <Jokes />
            )
        }
        else if (other.toLowerCase() === "country information"){
            return(
                <Country />
            )
        }
        else if (other.toLowerCase() === "covid vaccinations"){
            return(
                <COVIDVacc />
            )
        }
        else if (other.toLowerCase() === "country music"){
            return(
                <MusicCountry />
            )
        }
        else if (other.toLowerCase() === "kpop"){
            return(
                <MusicKpop />
            )
        }
        else if (other.toLowerCase() === "nasa"){
            return(
                <NASAPic />
            )
        }
        else{
            return(
                <div>
                    <p></p>
                </div>
            )
        }
    }
    
  }

export default {MovieAPI, AnimalAPI, OtherAPI};

