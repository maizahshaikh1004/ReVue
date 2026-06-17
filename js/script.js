/* ==========================
   MOVIE DATABASE
========================== */

const movies = [

    {
    id:"jawan",
    title:"Jawan",
    genre:"Action",
    year:2023,
    rating:8.1,
    runtime:"2h 49m",
    image:"images/jawan.jpg",
    director:"Atlee",
    language:"Hindi",
    description:"A prison warden recruits female inmates to right the wrongs of society."
    },
    
    {
    id:"pathaan",
    title:"Pathaan",
    genre:"Action",
    year:2023,
    rating:7.8,
    runtime:"2h 26m",
    image:"images/pathaan.jpg",
    director:"Siddharth Anand",
    language:"Hindi",
    description:"An exiled RAW agent returns for one final mission."
    },
    
    {
    id:"endgame",
    title:"Avengers Endgame",
    genre:"Sci-Fi",
    year:2019,
    rating:8.4,
    runtime:"3h 1m",
    image:"images/endgame.jpg",
    director:"Russo Brothers",
    language:"English",
    description:"The Avengers unite to reverse Thanos' snap."
    },
    
    {
    id:"dunki",
    title:"Dunki",
    genre:"Drama",
    year:2023,
    rating:7.5,
    runtime:"2h 40m",
    image:"images/dunki.jpg",
    director:"Rajkumar Hirani",
    language:"Hindi",
    description:"Friends chase dreams through an illegal migration route."
    },
    
    {
    id:"titanic",
    title:"Titanic",
    genre:"Romance",
    year:1997,
    rating:7.9,
    runtime:"3h 14m",
    image:"images/titanic.jpg",
    director:"James Cameron",
    language:"English",
    description:"A timeless romance aboard the Titanic."
    },
    
    {
    id:"ddlj",
    title:"DDLJ",
    genre:"Romance",
    year:1995,
    rating:8.0,
    runtime:"3h 9m",
    image:"images/ddlj.jpg",
    director:"Aditya Chopra",
    language:"Hindi",
    description:"Raj and Simran discover love across Europe."
    }
    
    ];
    
    
    /* ==========================
       DOM REFERENCES
    ========================== */
    
    const moviesGrid =
    document.getElementById("moviesGrid");
    
    const favoritesGrid =
    document.getElementById("favoritesGrid");
    
    const genrePills =
    document.getElementById("genrePills");
    
    const searchInput =
    document.getElementById("searchInput");
    
    const sortSelect =
    document.getElementById("sortSelect");
    
    const toast =
    document.getElementById("toast");
    
    
    /* ==========================
       LOCAL STORAGE
    ========================== */
    
    let favorites =
    JSON.parse(
    localStorage.getItem("favorites")
    ) || [];
    
    let reviews =
    JSON.parse(
    localStorage.getItem("reviews")
    ) || [];
    
    
    /* ==========================
       TOAST
    ========================== */
    
    function showToast(message){
    
    toast.textContent = message;
    
    toast.classList.add("show");
    
    setTimeout(()=>{
    
    toast.classList.remove("show");
    
    },2500);
    
    }
    
    
    /* ==========================
       MOVIE CARDS
    ========================== */
    
    function renderMovies(data){
    
    moviesGrid.innerHTML = "";
    
    data.forEach(movie=>{
    
    const card =
    document.createElement("div");
    
    card.className =
    "movie-card";
    
    card.innerHTML = `
    
    <img
    class="movie-card__poster"
    src="${movie.image}"
    alt="${movie.title}"
    >
    
    <div class="movie-card__body">
    
    <h3 class="movie-card__title">
    ${movie.title}
    </h3>
    
    <p class="movie-card__genre">
    ${movie.genre}
    </p>
    
    <div class="movie-card__footer">
    
    <span class="movie-card__rating">
    ⭐ ${movie.rating}
    </span>
    
    <div class="movie-card__actions">
    
    <button
    class="btn btn--ghost details-btn"
    data-id="${movie.id}">
    Details
    </button>
    
    <button
    class="btn btn--primary fav-btn"
    data-id="${movie.id}">
    ❤️
    </button>
    
    </div>
    
    </div>
    
    </div>
    
    `;
    
    moviesGrid.appendChild(card);
    
    });
    
    attachMovieEvents();
    
    }
    
    
    /* ==========================
       FAVORITES
    ========================== */
    
    function renderFavorites(){
    
    favoritesGrid.innerHTML = "";
    
    if(favorites.length===0){
    
    favoritesGrid.innerHTML = `
    <p>No favorites yet.</p>
    `;
    
    return;
    }
    
    favorites.forEach(movie=>{
    
    const card =
    document.createElement("div");
    
    card.className =
    "movie-card";
    
    card.innerHTML = `
    
    <img
    class="movie-card__poster"
    src="${movie.image}"
    >
    
    <div class="movie-card__body">
    
    <h3>
    ${movie.title}
    </h3>
    
    <p>
    ${movie.genre}
    </p>
    
    </div>
    
    `;
    
    favoritesGrid.appendChild(card);
    
    });
    
    }
    
    
    /* ==========================
       ADD FAVORITE
    ========================== */
    
    function addFavorite(id){
    
    const movie =
    movies.find(m=>m.id===id);
    
    const exists =
    favorites.find(f=>f.id===id);
    
    if(exists){
    
    showToast(
    "Already in favorites ❤️"
    );
    
    return;
    }
    
    favorites.push(movie);
    
    localStorage.setItem(
    "favorites",
    JSON.stringify(favorites)
    );
    
    renderFavorites();
    
    showToast(
    `${movie.title} added ❤️`
    );
    
    }
    renderMovies(movies);
    renderFavorites();

    function attachMovieEvents(){

        document
        .querySelectorAll(".details-btn")
        .forEach(btn=>{
        
        btn.addEventListener("click",()=>{
        
        const movieId =
        btn.dataset.id;
        
        const movie =
        movies.find(
        m=>m.id===movieId
        );
        
        openModal(movie);
        
        });
        
        });
        
        document
        .querySelectorAll(".fav-btn")
        .forEach(btn=>{
        
        btn.addEventListener("click",()=>{
        
        addFavorite(
        btn.dataset.id
        );
        
        });
        
        });
        
        }
        const movieModal =
document.getElementById("movieModal");

const modalTitle =
document.getElementById("modalTitle");

const modalPoster =
document.getElementById("modalPoster");

const modalGenre =
document.getElementById("modalGenre");

const modalSynopsis =
document.getElementById("modalSynopsis");

const modalCloseBtn =
document.getElementById("modalCloseBtn");
function openModal(movie){

    modalTitle.textContent =
    movie.title;
    
    modalPoster.src =
    movie.image;
    
    modalGenre.textContent =
    movie.genre;
    
    modalSynopsis.textContent =
    movie.description;
    
    movieModal.classList.add(
    "active"
    );
    
    }
    modalCloseBtn.addEventListener(
        "click",
        ()=>{
        
        movieModal.classList.remove(
        "active"
        );
        
        }
        );

        searchInput.addEventListener("input",()=>{

            const value =
            searchInput.value
            .toLowerCase()
            .trim();
            
            const filteredMovies =
            movies.filter(movie=>
            
            movie.title
            .toLowerCase()
            .includes(value)
            
            ||
            
            movie.genre
            .toLowerCase()
            .includes(value)
            
            );
            
            renderMovies(filteredMovies);
            
            const emptyState =
            document.getElementById(
            "emptyState"
            );
            
            if(filteredMovies.length===0){
            
            emptyState.hidden=false;
            
            }else{
            
            emptyState.hidden=true;
            
            }
            
            });