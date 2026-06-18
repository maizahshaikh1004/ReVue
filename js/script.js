/* ═══════════════════════════════════════════════════════════════
   ReVue 2.0 — script.js
   Vanilla JS · No frameworks · LocalStorage persistence
   ═══════════════════════════════════════════════════════════════ */

   'use strict';

   /* ─── 1. MOVIE DATA ─────────────────────────────────────────────── */
   const MOVIES = [
     {
       id: 'jawan',
       title: 'Jawan',
       year: 2023,
       genre: ['Action', 'Thriller'],
       rating: 8.1,
       runtime: '2h 49m',
       language: 'Hindi',
       director: 'Atlee Kumar',
       cast: 'Shah Rukh Khan, Nayanthara, Vijay Sethupathi',
       synopsis: 'A prison warden recruits female inmates to right the wrongs of society, while evading a seasoned cop who is hot on his trail. A story of justice, identity, and sacrifice.',
       poster: 'images/jawan.jpg',
     },
     {
       id: 'pathaan',
       title: 'Pathaan',
       year: 2023,
       genre: ['Action', 'Spy'],
       rating: 8.3,
       runtime: '2h 26m',
       language: 'Hindi',
       director: 'Siddharth Anand',
       cast: 'Shah Rukh Khan, Deepika Padukone, John Abraham',
       synopsis: 'An Indian spy takes on the leader of a rogue private army who aims to devastate India. A high-octane comeback thriller packed with globe-trotting action.',
       poster: 'images/pathaan.jpg',
     },
     {
       id: 'endgame',
       title: 'Avengers: Endgame',
       year: 2019,
       genre: ['Action', 'Sci-Fi'],
       rating: 8.4,
       runtime: '3h 1m',
       language: 'English',
       director: 'Anthony & Joe Russo',
       cast: 'Robert Downey Jr., Chris Evans, Mark Ruffalo',
       synopsis: 'After the devastating events of Infinity War, the Avengers assemble once more to undo Thanos\'s actions and restore balance to the universe.',
       poster: 'images/endgame.jpg',
     },
     {
       id: 'dunki',
       title: 'Dunki',
       year: 2023,
       genre: ['Drama', 'Comedy'],
       rating: 7.4,
       runtime: '2h 41m',
       language: 'Hindi',
       director: 'Rajkumar Hirani',
       cast: 'Shah Rukh Khan, Taapsee Pannu, Vicky Kaushal',
       synopsis: 'Four friends from Punjab embark on a treacherous illegal journey to reach the United Kingdom in search of a better life — a journey that will test friendship and resolve.',
       poster: 'images/dunki.jpg',
     },
     {
       id: 'titanic',
       title: 'Titanic',
       year: 1997,
       genre: ['Romance', 'Drama'],
       rating: 7.9,
       runtime: '3h 14m',
       language: 'English',
       director: 'James Cameron',
       cast: 'Leonardo DiCaprio, Kate Winslet, Billy Zane',
       synopsis: 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the ill-fated RMS Titanic. An epic of romance and tragedy.',
       poster: 'images/titanic.jpg',
     },
     {
       id: 'ddlj',
       title: 'DDLJ',
       year: 1995,
       genre: ['Romance', 'Drama'],
       rating: 8.1,
       runtime: '3h 9m',
       language: 'Hindi',
       director: 'Aditya Chopra',
       cast: 'Shah Rukh Khan, Kajol, Amrish Puri',
       synopsis: 'Two Indians meet on a Europe trip and fall in love. But Simran\'s strict father has promised her hand to his childhood friend\'s son back in Punjab.',
       poster: 'images/ddlj.jpg',
     },
     {
       id: 'farzi',
       title: 'Farzi',
       year: 2023,
       genre: ['Thriller', 'Crime'],
       rating: 8.5,
       runtime: '~7h (series)',
       language: 'Hindi',
       director: 'Raj & DK',
       cast: 'Shahid Kapoor, Vijay Sethupathi, Raashii Khanna',
       synopsis: 'A small-time artist gets embroiled in a high-stakes game after he starts printing counterfeit currency, drawing the attention of a sharp task force officer.',
       poster: 'images/farzi.jpeg',
     },
     {
       id: 'drishyam2',
       title: 'Drishyam 2',
       year: 2022,
       genre: ['Thriller', 'Crime'],
       rating: 8.3,
       runtime: '2h 28m',
       language: 'Hindi',
       director: 'Abhishek Pathak',
       cast: 'Ajay Devgn, Tabu, Shriya Saran',
       synopsis: 'Seven years after the events of the first film, Vijay Salgaonkar must confront the past once more when an investigator reopens the case everyone thought was closed.',
       poster: 'images/drishyam2.jpg',
     },
     {
       id: 'ghajini',
       title: 'Ghajini',
       year: 2008,
       genre: ['Action', 'Thriller'],
       rating: 7.8,
       runtime: '2h 55m',
       language: 'Hindi',
       director: 'A.R. Murugadoss',
       cast: 'Aamir Khan, Asin, Jiah Khan',
       synopsis: 'A businessman suffering from short-term memory loss tries to track down the murderer of his girlfriend using a system of polaroid photographs and tattoos.',
       poster: 'images/ghajini.jpg',
     },
     {
       id: 'tiger3',
       title: 'Tiger 3',
       year: 2023,
       genre: ['Action', 'Spy'],
       rating: 6.8,
       runtime: '2h 36m',
       language: 'Hindi',
       director: 'Maneesh Sharma',
       cast: 'Salman Khan, Katrina Kaif, Emraan Hashmi',
       synopsis: 'RAW agent Tiger is framed for crimes against India and must clear his name while taking on a dangerous nemesis who threatens world peace.',
       poster: 'images/tiger3.jpg',
     },
     {
       id: 'gabbar',
       title: 'Gabbar Is Back',
       year: 2015,
       genre: ['Action', 'Drama'],
       rating: 7.2,
       runtime: '2h 9m',
       language: 'Hindi',
       director: 'Krish Jagarlamudi',
       cast: 'Akshay Kumar, Shruti Haasan, Sunil Grover',
       synopsis: 'A vigilante professor creates an underground army to publicly execute corrupt government officials, setting off a storm across the nation.',
       poster: 'images/gabbar.jpg',
     },
     {
       id: 'raone',
       title: 'Ra.One',
       year: 2011,
       genre: ['Action', 'Sci-Fi'],
       rating: 6.3,
       runtime: '2h 36m',
       language: 'Hindi',
       director: 'Anubhav Sinha',
       cast: 'Shah Rukh Khan, Kareena Kapoor, Arjun Rampal',
       synopsis: 'A video game developer creates an invincible villain named Ra.One that escapes into the real world, and only the game\'s hero G.One can stop him.',
       poster: 'images/raone.jpeg',
     },
     {
       id: 'partner',
       title: 'Partner',
       year: 2007,
       genre: ['Romance', 'Comedy'],
       rating: 7.0,
       runtime: '2h 25m',
       language: 'Hindi',
       director: 'David Dhawan',
       cast: 'Salman Khan, Govinda, Katrina Kaif',
       synopsis: 'A love guru helps a shy man woo the woman of his dreams, but ends up finding love himself in the most unexpected way.',
       poster: 'images/partner.jpg',
     },
     {
       id: 'bawaal',
       title: 'Bawaal',
       year: 2023,
       genre: ['Romance', 'Drama'],
       rating: 6.5,
       runtime: '2h 22m',
       language: 'Hindi',
       director: 'Nitesh Tiwari',
       cast: 'Varun Dhawan, Janhvi Kapoor',
       synopsis: 'A narcissistic teacher and his neglected wife take a trip to Europe, retracing World War II battles that ultimately transform their troubled relationship.',
       poster: 'images/bawaal.jpg',
     },
     {
       id: 'myfault',
       title: 'My Fault',
       year: 2023,
       genre: ['Romance', 'Drama'],
       rating: 7.3,
       runtime: '1h 57m',
       language: 'Spanish',
       director: 'Domingo González',
       cast: 'Nicole Wallace, Gabriel Guevara',
       synopsis: 'A young girl moves to her new stepfather\'s mansion and finds herself drawn to a dangerous attraction with his son Nick — a relationship forbidden yet undeniable.',
       poster: 'images/myfault.jpg',
     },
     {
       id: 'yjhd',
       title: 'Yeh Jawaani Hai Deewani',
       year: 2013,
       genre: ['Romance', 'Drama'],
       rating: 7.9,
       runtime: '2h 40m',
       language: 'Hindi',
       director: 'Ayan Mukerji',
       cast: 'Ranbir Kapoor, Deepika Padukone, Aditya Roy Kapur',
       synopsis: 'A free-spirited wanderer and a studious introvert meet on a trek to Manali, share an unforgettable summer, and then life pulls them apart — until one wedding brings them back.',
       poster: 'images/yeh_jawani_hai_deewani.jpg',
     },
     {
       id: 'hasee',
       title: 'Hasee Toh Phasee',
       year: 2014,
       genre: ['Romance', 'Comedy'],
       rating: 7.5,
       runtime: '2h 14m',
       language: 'Hindi',
       director: 'Vinil Mathew',
       cast: 'Sidharth Malhotra, Parineeti Chopra',
       synopsis: 'A quirky, unconventional scientist and a young man caught between two engagements find comfort — and unexpected love — in each other\'s company.',
       poster: 'images/hasee.jpg',
     },
     {
       id: 'ajab',
       title: 'Ajab Prem Ki Ghazab Kahani',
       year: 2009,
       genre: ['Romance', 'Comedy'],
       rating: 7.2,
       runtime: '2h 25m',
       language: 'Hindi',
       director: 'Rajkumar Santoshi',
       cast: 'Ranbir Kapoor, Katrina Kaif',
       synopsis: 'Prem, a carefree young man, helps his friend Jenny reunite with her Christian lover — not realising he has fallen deeply in love with her himself.',
       poster: 'images/ajab.jpg',
     },
     {
       id: 'dhoom3',
       title: 'Dhoom 3',
       year: 2013,
       genre: ['Action', 'Thriller'],
       rating: 7.0,
       runtime: '2h 52m',
       language: 'Hindi',
       director: 'Vijay Krishna Acharya',
       cast: 'Aamir Khan, Abhishek Bachchan, Katrina Kaif',
       synopsis: 'A circus performer turned thief pulls off the most daring bank heists in Chicago, while two Indian cops close in on his trail.',
       poster: 'images/dhoom3.jpg',
     },
     {
       id: 'gumraah',
       title: 'Gumraah',
       year: 2023,
       genre: ['Thriller', 'Crime'],
       rating: 6.9,
       runtime: '2h 5m',
       language: 'Hindi',
       director: 'Vardhan Ketkar',
       cast: 'Aditya Roy Kapur, Mrunal Thakur, Ronit Roy',
       synopsis: 'A cop investigates a murder case involving two men who look identical — only one is guilty, but which one? A gripping double-identity thriller.',
       poster: 'images/gumraah.jpg',
     },
   ];
   
   /* ─── 2. STATE ──────────────────────────────────────────────────── */
   const STATE = {
     favorites:     loadFromStorage('revue_favorites', []),
     reviews:       loadFromStorage('revue_reviews', []),
     activeGenre:   'All',
     activeSort:    'default',
     searchQuery:   '',
     currentMovieId: null,
     selectedRating: 0,
     searchOpen:    false,
   };
   
   
   /* ─── 3. STORAGE HELPERS ────────────────────────────────────────── */
   function loadFromStorage(key, fallback) {
     try {
       const raw = localStorage.getItem(key);
       return raw ? JSON.parse(raw) : fallback;
     } catch { return fallback; }
   }
   
   function saveToStorage(key, value) {
     try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
   }
   
   function saveFavorites() { saveToStorage('revue_favorites', STATE.favorites); }
   function saveReviews()   { saveToStorage('revue_reviews',   STATE.reviews);   }
   
   
   /* ─── 4. DOM REFS ───────────────────────────────────────────────── */
   const $ = id => document.getElementById(id);
   
   const DOM = {
     navbar:          document.querySelector('.navbar'),
     navFavBadge:     $('navFavBadge'),
     hamburgerBtn:    $('hamburgerBtn'),
     navLinks:        $('navLinks'),
   
     searchToggleBtn: $('searchToggleBtn'),
     searchCloseBtn:  $('searchCloseBtn'),
     searchBarWrap:   $('searchBarWrap'),
     searchInput:     $('searchInput'),
     searchResults:   $('searchResults'),
   
     heroDetailsBtn:  $('heroDetailsBtn'),
     heroFavBtn:      $('heroFavBtn'),
   
     genrePills:      $('genrePills'),
     moviesGrid:      $('moviesGrid'),
     emptyState:      $('emptyState'),
     clearSearchBtn:  $('clearSearchBtn'),
     sortSelect:      $('sortSelect'),
   
     favoritesGrid:   $('favoritesGrid'),
     favEmptyState:   $('favEmptyState'),
     clearFavBtn:     $('clearFavBtn'),
   
     statsGrid:       $('statsGrid'),
     statMovies:      $('statMovies'),
     statAvgRating:   $('statAvgRating'),
     statReviews:     $('statReviews'),
     statFavorites:   $('statFavorites'),
     statTopGenre:    $('statTopGenre'),
     statTopRated:    $('statTopRated'),
   
     reviewMovie:     $('reviewMovie'),
     reviewerName:    $('reviewerName'),
     reviewText:      $('reviewText'),
     charCount:       $('charCount'),
     starPicker:      $('starPicker'),
     submitReviewBtn: $('submitReviewBtn'),
     reviewsList:     $('reviewsList'),
     reviewsEmptyState: $('reviewsEmptyState'),
     formSuccess:     $('formSuccess'),
     nameError:       $('nameError'),
     movieError:      $('movieError'),
     ratingError:     $('ratingError'),
     textError:       $('textError'),
   
     movieModal:      $('movieModal'),
     modalCloseBtn:   $('modalCloseBtn'),
     modalPoster:     $('modalPoster'),
     modalScore:      $('modalScore'),
     modalStars:      $('modalStars'),
     modalGenre:      $('modalGenre'),
     modalTitle:      $('modalTitle'),
     modalTags:       $('modalTags'),
     modalSynopsis:   $('modalSynopsis'),
     modalCrew:       $('modalCrew'),
     modalFavBtn:     $('modalFavBtn'),
     modalReviewBtn:  $('modalReviewBtn'),
     modalReviewsList:$('modalReviewsList'),
     modalNoReviews:  $('modalNoReviews'),
   
     toast:           $('toast'),
     footerYear:      $('footerYear'),
     footerGenres:    $('footerGenres'),
   };
   
   
   /* ─── 5. UTILITIES ──────────────────────────────────────────────── */
   
   /** Render filled/empty star icons as HTML */
   function renderStars(rating, outOf = 5, sizeCls = '') {
     const filled = Math.round(rating);
     return Array.from({ length: outOf }, (_, i) =>
       `<i class="ph${i < filled ? '-fill' : ''} ph-star ${sizeCls}"></i>`
     ).join('');
   }
   
   /** Get unique sorted list of all genres across all movies */
   function getAllGenres() {
     const set = new Set();
     MOVIES.forEach(m => m.genre.forEach(g => set.add(g)));
     return ['All', ...Array.from(set).sort()];
   }
   
   /** Filter + sort movies based on current state */
   function getFilteredMovies() {
     let list = [...MOVIES];
   
     // Genre filter
     if (STATE.activeGenre !== 'All') {
       list = list.filter(m => m.genre.includes(STATE.activeGenre));
     }
   
     // Search filter
     if (STATE.searchQuery) {
       const q = STATE.searchQuery.toLowerCase();
       list = list.filter(m =>
         m.title.toLowerCase().includes(q) ||
         m.genre.some(g => g.toLowerCase().includes(q)) ||
         m.director.toLowerCase().includes(q) ||
         String(m.year).includes(q)
       );
     }
   
     // Sort
     switch (STATE.activeSort) {
       case 'rating-desc': list.sort((a, b) => b.rating - a.rating); break;
       case 'rating-asc':  list.sort((a, b) => a.rating - b.rating); break;
       case 'year-desc':   list.sort((a, b) => b.year - a.year); break;
       case 'year-asc':    list.sort((a, b) => a.year - b.year); break;
       case 'title-az':    list.sort((a, b) => a.title.localeCompare(b.title)); break;
     }
   
     return list;
   }
   
   /** Highlight matching query text in a string */
   function highlight(text, query) {
     if (!query) return text;
     const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
     return text.replace(new RegExp(`(${escaped})`, 'gi'), '<mark>$1</mark>');
   }
   
   /** Show a toast notification */
   let toastTimer;
   function showToast(message, type = 'info') {
     const { toast } = DOM;
     toast.textContent = message;
     toast.className = `toast toast--${type} show`;
     clearTimeout(toastTimer);
     toastTimer = setTimeout(() => {
       toast.classList.remove('show');
     }, 2800);
   }
   
   /** Check if a movie is favorited */
   function isFav(movieId) {
     return STATE.favorites.includes(movieId);
   }
   
   /** Toggle a movie in/out of favorites */
   function toggleFavorite(movieId) {
     const movie = MOVIES.find(m => m.id === movieId);
     if (!movie) return;
   
     if (isFav(movieId)) {
       STATE.favorites = STATE.favorites.filter(id => id !== movieId);
       showToast(`Removed "${movie.title}" from favorites`, 'info');
     } else {
       STATE.favorites.push(movieId);
       showToast(`Added "${movie.title}" to favorites ♥`, 'success');
     }
   
     saveFavorites();
     renderFavBadge();
     renderFavoritesGrid();
     renderStats();
     updateCardFavIndicators(movieId);
     updateModalFavBtn();
   }
   
   /** Update all fav indicators on cards matching movieId */
   function updateCardFavIndicators(movieId) {
     document.querySelectorAll(`.movie-card[data-id="${movieId}"]`).forEach(card => {
       const indicator = card.querySelector('.movie-card__fav-indicator');
       const btn = card.querySelector('.movie-card__btn--fav');
       if (indicator) indicator.classList.toggle('active', isFav(movieId));
       if (btn) btn.classList.toggle('active', isFav(movieId));
     });
   }
   
   /** Format a date string nicely */
   function formatDate(iso) {
     return new Date(iso).toLocaleDateString('en-IN', {
       year: 'numeric', month: 'short', day: 'numeric'
     });
   }
   
   /** Get initial letter for avatar */
   function getInitial(name) {
     return (name || '?').charAt(0).toUpperCase();
   }
   
   
   /* ─── 6. NAVBAR ─────────────────────────────────────────────────── */
   function initNavbar() {
     // Scroll: add .scrolled class
     window.addEventListener('scroll', () => {
       DOM.navbar.classList.toggle('scrolled', window.scrollY > 60);
     }, { passive: true });
   
     // Hamburger toggle
     DOM.hamburgerBtn.addEventListener('click', () => {
       const open = DOM.navLinks.classList.toggle('mobile-open');
       DOM.hamburgerBtn.classList.toggle('open', open);
       DOM.hamburgerBtn.setAttribute('aria-expanded', open);
     });
   
     // Close mobile menu when a nav link is clicked
     DOM.navLinks.addEventListener('click', e => {
       if (e.target.closest('.nav-link')) {
         DOM.navLinks.classList.remove('mobile-open');
         DOM.hamburgerBtn.classList.remove('open');
         DOM.hamburgerBtn.setAttribute('aria-expanded', 'false');
       }
     });
   }
   
   function renderFavBadge() {
     DOM.navFavBadge.textContent = STATE.favorites.length;
   }
   
   
   /* ─── 7. SEARCH ─────────────────────────────────────────────────── */
   function initSearch() {
     DOM.searchToggleBtn.addEventListener('click', openSearch);
     DOM.searchCloseBtn.addEventListener('click', closeSearch);
   
     DOM.searchInput.addEventListener('input', () => {
       const q = DOM.searchInput.value.trim();
       STATE.searchQuery = q;
       renderLiveResults(q);
       renderMoviesGrid();
     });
   
     // Close on Escape
     document.addEventListener('keydown', e => {
       if (e.key === 'Escape') {
         if (STATE.searchOpen) closeSearch();
         if (DOM.movieModal.classList.contains('open')) closeModal();
       }
     });
   
     // Close search when clicking outside
     document.addEventListener('click', e => {
       if (
         STATE.searchOpen &&
         !DOM.searchBarWrap.contains(e.target) &&
         e.target !== DOM.searchToggleBtn
       ) {
         closeSearch();
       }
     });
   }
   
   function openSearch() {
     STATE.searchOpen = true;
     DOM.searchBarWrap.classList.add('open');
     DOM.searchBarWrap.setAttribute('aria-hidden', 'false');
     DOM.searchToggleBtn.setAttribute('aria-expanded', 'true');
     setTimeout(() => DOM.searchInput.focus(), 100);
   }
   
   function closeSearch() {
     STATE.searchOpen = false;
     DOM.searchBarWrap.classList.remove('open');
     DOM.searchBarWrap.setAttribute('aria-hidden', 'true');
     DOM.searchToggleBtn.setAttribute('aria-expanded', 'false');
     DOM.searchInput.value = '';
     STATE.searchQuery = '';
     DOM.searchResults.classList.remove('has-results');
     DOM.searchResults.innerHTML = '';
     renderMoviesGrid();
   }
   
   function renderLiveResults(query) {
     if (!query) {
       DOM.searchResults.classList.remove('has-results');
       DOM.searchResults.innerHTML = '';
       return;
     }
   
     const q = query.toLowerCase();
     const matches = MOVIES.filter(m =>
       m.title.toLowerCase().includes(q) ||
       m.genre.some(g => g.toLowerCase().includes(q)) ||
       m.director.toLowerCase().includes(q)
     ).slice(0, 6);
   
     if (!matches.length) {
       DOM.searchResults.classList.remove('has-results');
       DOM.searchResults.innerHTML = '';
       return;
     }
   
     DOM.searchResults.innerHTML = matches.map(m => `
       <div class="search-result-item" data-id="${m.id}" role="option" tabindex="0" aria-label="${m.title}">
         <img src="${m.poster}" alt="${m.title} poster" loading="lazy" />
         <div class="search-result-item__info">
           <div class="search-result-item__title">${highlight(m.title, query)}</div>
           <div class="search-result-item__meta">
             ${m.year} &middot; ${m.genre[0]}
             &middot; <span style="color:var(--clr-gold)">★ ${m.rating}</span>
           </div>
         </div>
       </div>
     `).join('');
   
     DOM.searchResults.classList.add('has-results');
   
     DOM.searchResults.querySelectorAll('.search-result-item').forEach(item => {
       const open = () => {
         closeSearch();
         openModal(item.dataset.id);
       };
       item.addEventListener('click', open);
       item.addEventListener('keydown', e => { if (e.key === 'Enter') open(); });
     });
   }
   
   
   /* ─── 8. GENRE PILLS ────────────────────────────────────────────── */
   function renderGenrePills() {
     const genres = getAllGenres();
     DOM.genrePills.innerHTML = genres.map(g => `
       <button
         class="genre-pill${g === STATE.activeGenre ? ' active' : ''}"
         data-genre="${g}"
         aria-pressed="${g === STATE.activeGenre}"
       >${g}</button>
     `).join('');
   
     DOM.genrePills.querySelectorAll('.genre-pill').forEach(pill => {
       pill.addEventListener('click', () => {
         STATE.activeGenre = pill.dataset.genre;
         renderGenrePills();
         renderMoviesGrid();
       });
     });
   }
   
   
   /* ─── 9. MOVIES GRID ────────────────────────────────────────────── */
   function renderMoviesGrid() {
     const movies = getFilteredMovies();
   
     if (!movies.length) {
       DOM.moviesGrid.innerHTML = '';
       DOM.emptyState.hidden = false;
       return;
     }
   
     DOM.emptyState.hidden = true;
   
     DOM.moviesGrid.innerHTML = movies.map((m, i) => `
       <article
         class="movie-card"
         data-id="${m.id}"
         role="listitem"
         style="animation-delay: ${Math.min(i * 40, 400)}ms"
         tabindex="0"
         aria-label="${m.title} (${m.year})"
       >
         <span class="movie-card__genre-tag">${m.genre[0]}</span>
         <span class="movie-card__fav-indicator${isFav(m.id) ? ' active' : ''}" aria-hidden="true">
           <i class="ph${isFav(m.id) ? '-fill' : ''} ph-heart"></i>
         </span>
   
         <img
           class="movie-card__poster"
           src="${m.poster}"
           alt="${m.title} poster"
           loading="lazy"
         />
   
         <div class="movie-card__overlay">
           <h3 class="movie-card__title">${m.title}</h3>
           <p class="movie-card__year">${m.year} &middot; ${m.runtime}</p>
           <div class="movie-card__rating">
             <i class="ph-fill ph-star"></i> ${m.rating}
           </div>
           <div class="movie-card__actions">
             <button class="movie-card__btn movie-card__btn--view" data-id="${m.id}" aria-label="View ${m.title}">
               <i class="ph ph-eye"></i> View
             </button>
             <button
               class="movie-card__btn movie-card__btn--fav${isFav(m.id) ? ' active' : ''}"
               data-id="${m.id}"
               aria-label="${isFav(m.id) ? 'Remove from favorites' : 'Add to favorites'}"
               aria-pressed="${isFav(m.id)}"
             >
               <i class="ph${isFav(m.id) ? '-fill' : ''} ph-heart"></i>
             </button>
           </div>
         </div>
       </article>
     `).join('');
   
     // Wire up card events
     DOM.moviesGrid.querySelectorAll('.movie-card').forEach(card => {
       // Click anywhere on card → open modal (except fav button)
       card.addEventListener('click', e => {
         if (e.target.closest('.movie-card__btn--fav')) return;
         openModal(card.dataset.id);
       });
       card.addEventListener('keydown', e => {
         if (e.key === 'Enter' && !e.target.closest('.movie-card__btn--fav')) {
           openModal(card.dataset.id);
         }
       });
     });
   
     DOM.moviesGrid.querySelectorAll('.movie-card__btn--fav').forEach(btn => {
       btn.addEventListener('click', e => {
         e.stopPropagation();
         toggleFavorite(btn.dataset.id);
       });
     });
   
     DOM.moviesGrid.querySelectorAll('.movie-card__btn--view').forEach(btn => {
       btn.addEventListener('click', e => {
         e.stopPropagation();
         openModal(btn.dataset.id);
       });
     });
   }
   
   function initSort() {
     DOM.sortSelect.addEventListener('change', () => {
       STATE.activeSort = DOM.sortSelect.value;
       renderMoviesGrid();
     });
   }
   
   DOM.clearSearchBtn.addEventListener('click', () => {
     closeSearch();
     STATE.activeGenre = 'All';
     renderGenrePills();
     renderMoviesGrid();
   });
   
   
   /* ─── 10. FAVORITES ─────────────────────────────────────────────── */
   function renderFavoritesGrid() {
     const favMovies = MOVIES.filter(m => STATE.favorites.includes(m.id));
   
     if (!favMovies.length) {
       DOM.favoritesGrid.innerHTML = '';
       DOM.favEmptyState.hidden = false;
       return;
     }
   
     DOM.favEmptyState.hidden = true;
   
     DOM.favoritesGrid.innerHTML = favMovies.map((m, i) => `
       <article
         class="fav-card"
         data-id="${m.id}"
         role="listitem"
         tabindex="0"
         style="animation-delay: ${i * 40}ms"
         aria-label="${m.title}"
       >
         <img src="${m.poster}" alt="${m.title}" loading="lazy" />
         <button
           class="fav-card__remove btn-icon"
           data-id="${m.id}"
           aria-label="Remove ${m.title} from favorites"
           title="Remove"
         >
           <i class="ph ph-x"></i>
         </button>
         <p class="fav-card__label">${m.title}</p>
       </article>
     `).join('');
   
     DOM.favoritesGrid.querySelectorAll('.fav-card').forEach(card => {
       card.addEventListener('click', e => {
         if (e.target.closest('.fav-card__remove')) return;
         openModal(card.dataset.id);
       });
       card.addEventListener('keydown', e => {
         if (e.key === 'Enter') openModal(card.dataset.id);
       });
     });
   
     DOM.favoritesGrid.querySelectorAll('.fav-card__remove').forEach(btn => {
       btn.addEventListener('click', e => {
         e.stopPropagation();
         toggleFavorite(btn.dataset.id);
       });
     });
   }
   
   DOM.clearFavBtn.addEventListener('click', () => {
     if (!STATE.favorites.length) return;
     STATE.favorites = [];
     saveFavorites();
     renderFavBadge();
     renderFavoritesGrid();
     renderStats();
     // Refresh card indicators
     MOVIES.forEach(m => updateCardFavIndicators(m.id));
     showToast('Favorites cleared', 'info');
   });
   
   
   /* ─── 11. STATS ─────────────────────────────────────────────────── */
   function renderStats() {
     const total     = MOVIES.length;
     const avgRating = (MOVIES.reduce((s, m) => s + m.rating, 0) / total).toFixed(1);
     const totalRevs = STATE.reviews.length;
     const totalFavs = STATE.favorites.length;
   
     // Most common genre across all movies
     const genreCount = {};
     MOVIES.forEach(m => m.genre.forEach(g => { genreCount[g] = (genreCount[g] || 0) + 1; }));
     const topGenre = Object.entries(genreCount).sort((a, b) => b[1] - a[1])[0]?.[0] || '—';
   
     // Highest rated
     const topRated = [...MOVIES].sort((a, b) => b.rating - a.rating)[0]?.title || '—';
   
     // Animate numbers counting up
     animateCount(DOM.statMovies,      0, total,      1200, v => String(v));
     animateCount(DOM.statAvgRating,   0, parseFloat(avgRating), 1200, v => v.toFixed(1));
     animateCount(DOM.statReviews,     0, totalRevs,  1000, v => String(v));
     animateCount(DOM.statFavorites,   0, totalFavs,  1000, v => String(v));
   
     DOM.statTopGenre.textContent = topGenre;
     DOM.statTopRated.textContent = topRated;
   }
   
   function animateCount(el, from, to, duration, format) {
     if (!el) return;
     const start = performance.now();
     function step(now) {
       const progress = Math.min((now - start) / duration, 1);
       const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
       const current = from + (to - from) * eased;
       el.textContent = format(current);
       if (progress < 1) requestAnimationFrame(step);
     }
     requestAnimationFrame(step);
   }
   
   
   /* ─── 12. REVIEW FORM ───────────────────────────────────────────── */
   function initReviewForm() {
     // Populate movie dropdown
     DOM.reviewMovie.innerHTML =
       '<option value="" disabled selected>— Select a film —</option>' +
       [...MOVIES].sort((a, b) => a.title.localeCompare(b.title))
         .map(m => `<option value="${m.id}">${m.title} (${m.year})</option>`)
         .join('');
   
     // Build star picker
     DOM.starPicker.innerHTML = Array.from({ length: 5 }, (_, i) => `
       <span
         class="star-picker__star"
         data-value="${i + 1}"
         role="radio"
         aria-label="${i + 1} star${i > 0 ? 's' : ''}"
         aria-checked="false"
         tabindex="${i === 0 ? 0 : -1}"
       >★</span>
     `).join('');
   
     const stars = DOM.starPicker.querySelectorAll('.star-picker__star');
   
     function setRating(val) {
       STATE.selectedRating = val;
       stars.forEach((s, i) => {
         const active = i < val;
         s.classList.toggle('active', active);
         s.setAttribute('aria-checked', active);
       });
     }
   
     stars.forEach(star => {
       star.addEventListener('click', () => setRating(Number(star.dataset.value)));
       star.addEventListener('mouseenter', () => {
         stars.forEach((s, i) => s.classList.toggle('active', i < Number(star.dataset.value)));
       });
       star.addEventListener('keydown', e => {
         if (e.key === 'Enter' || e.key === ' ') setRating(Number(star.dataset.value));
       });
     });
   
     DOM.starPicker.addEventListener('mouseleave', () => setRating(STATE.selectedRating));
   
     // Char counter
     DOM.reviewText.addEventListener('input', () => {
       DOM.charCount.textContent = DOM.reviewText.value.length;
     });
   
     // Submit
     DOM.submitReviewBtn.addEventListener('click', submitReview);
   }
   
   function validateReview() {
     let valid = true;
   
     const name  = DOM.reviewerName.value.trim();
     const movie = DOM.reviewMovie.value;
     const text  = DOM.reviewText.value.trim();
   
     DOM.nameError.textContent  = '';
     DOM.movieError.textContent = '';
     DOM.ratingError.textContent = '';
     DOM.textError.textContent  = '';
   
     if (!name) {
       DOM.nameError.textContent = 'Please enter your name.';
       valid = false;
     }
     if (!movie) {
       DOM.movieError.textContent = 'Please select a movie.';
       valid = false;
     }
     if (!STATE.selectedRating) {
       DOM.ratingError.textContent = 'Please select a star rating.';
       valid = false;
     }
     if (text.length < 20) {
       DOM.textError.textContent = 'Review must be at least 20 characters.';
       valid = false;
     }
   
     return valid;
   }
   
   function submitReview() {
     if (!validateReview()) return;
   
     const movieObj = MOVIES.find(m => m.id === DOM.reviewMovie.value);
   
     const review = {
       id:       `rv_${Date.now()}`,
       movieId:  DOM.reviewMovie.value,
       movie:    movieObj?.title || DOM.reviewMovie.value,
       author:   DOM.reviewerName.value.trim(),
       rating:   STATE.selectedRating,
       text:     DOM.reviewText.value.trim(),
       date:     new Date().toISOString(),
     };
   
     STATE.reviews.unshift(review);
     saveReviews();
   
     // Reset form
     DOM.reviewerName.value = '';
     DOM.reviewMovie.value  = '';
     DOM.reviewText.value   = '';
     DOM.charCount.textContent = '0';
     STATE.selectedRating = 0;
     DOM.starPicker.querySelectorAll('.star-picker__star').forEach(s => {
       s.classList.remove('active');
       s.setAttribute('aria-checked', 'false');
     });
   
     // Show inline success message briefly
     DOM.formSuccess.hidden = false;
     setTimeout(() => { DOM.formSuccess.hidden = true; }, 3000);
   
     renderReviewsList();
     renderStats();
     showToast('Review submitted!', 'success');
   }
   
   
   /* ─── 13. REVIEWS LIST ──────────────────────────────────────────── */
   function renderReviewsList() {
     if (!STATE.reviews.length) {
       DOM.reviewsList.innerHTML = '';
       DOM.reviewsEmptyState.hidden = false;
       return;
     }
   
     DOM.reviewsEmptyState.hidden = true;
   
     DOM.reviewsList.innerHTML = STATE.reviews.map((r, i) => `
       <article
         class="review-card"
         data-review-id="${r.id}"
         style="animation-delay: ${Math.min(i * 50, 300)}ms"
       >
         <div class="review-card__header">
           <div class="review-card__author-wrap">
             <div class="review-card__avatar">${getInitial(r.author)}</div>
             <div>
               <p class="review-card__author">${escapeHtml(r.author)}</p>
               <p class="review-card__movie">${escapeHtml(r.movie)}</p>
             </div>
           </div>
           <div class="review-card__stars">${renderStars(r.rating)}</div>
         </div>
         <p class="review-card__text">${escapeHtml(r.text)}</p>
         <p class="review-card__date">${formatDate(r.date)}</p>
         <button class="review-card__delete" data-review-id="${r.id}" aria-label="Delete this review">
           <i class="ph ph-trash"></i> Delete
         </button>
       </article>
     `).join('');
   
     DOM.reviewsList.querySelectorAll('.review-card__delete').forEach(btn => {
       btn.addEventListener('click', () => deleteReview(btn.dataset.reviewId));
     });
   }
   
   function deleteReview(id) {
     STATE.reviews = STATE.reviews.filter(r => r.id !== id);
     saveReviews();
     renderReviewsList();
     renderStats();
     showToast('Review deleted', 'info');
   }
   
   /** Prevent XSS from user input */
   function escapeHtml(str) {
     return String(str)
       .replace(/&/g, '&amp;')
       .replace(/</g, '&lt;')
       .replace(/>/g, '&gt;')
       .replace(/"/g, '&quot;')
       .replace(/'/g, '&#039;');
   }
   
   
   /* ─── 14. MODAL ─────────────────────────────────────────────────── */
   function openModal(movieId) {
     const movie = MOVIES.find(m => m.id === movieId);
     if (!movie) return;
   
     STATE.currentMovieId = movieId;
   
     // Poster
     DOM.modalPoster.src = movie.poster;
     DOM.modalPoster.alt = `${movie.title} poster`;
   
     // Rating stars + score
     DOM.modalStars.innerHTML = renderStars(Math.round(movie.rating));
     DOM.modalScore.textContent = movie.rating;
   
     // Text content
     DOM.modalGenre.textContent = movie.genre.join(' · ');
     DOM.modalTitle.textContent = movie.title;
     DOM.modalSynopsis.textContent = movie.synopsis;
   
     // Tags
     DOM.modalTags.innerHTML = [
       `<span class="modal__tag">${movie.year}</span>`,
       `<span class="modal__tag">${movie.runtime}</span>`,
       `<span class="modal__tag">${movie.language}</span>`,
       ...movie.genre.map(g => `<span class="modal__tag">${g}</span>`),
     ].join('');
   
     // Crew
     DOM.modalCrew.innerHTML = `
       <div class="modal__crew-item">
         <span class="modal__crew-label">Director</span>
         <span class="modal__crew-value">${movie.director}</span>
       </div>
       <div class="modal__crew-item">
         <span class="modal__crew-label">Cast</span>
         <span class="modal__crew-value">${movie.cast}</span>
       </div>
     `;
   
     // Fav button state
     updateModalFavBtn();
   
     // Wire review link to pre-select this movie in the form
     DOM.modalReviewBtn.addEventListener('click', () => {
       DOM.reviewMovie.value = movieId;
       closeModal();
     });
   
     // Movie-specific reviews
     const movieReviews = STATE.reviews.filter(r => r.movieId === movieId);
     if (movieReviews.length) {
       DOM.modalNoReviews.hidden = true;
       DOM.modalReviewsList.innerHTML = movieReviews.map(r => `
         <div class="modal__review-item">
           <p class="modal__review-author">
             ${escapeHtml(r.author)}
             <span class="modal__review-stars">${renderStars(r.rating)}</span>
           </p>
           <p class="modal__review-text">${escapeHtml(r.text)}</p>
         </div>
       `).join('');
     } else {
       DOM.modalNoReviews.hidden = false;
       DOM.modalReviewsList.innerHTML = '';
     }
   
     // Open
     DOM.movieModal.classList.add('open');
     DOM.movieModal.setAttribute('aria-hidden', 'false');
     document.body.style.overflow = 'hidden';
   
     // Focus trap
     setTimeout(() => DOM.modalCloseBtn.focus(), 50);
   }
   
   function closeModal() {
     DOM.movieModal.classList.remove('open');
     DOM.movieModal.setAttribute('aria-hidden', 'true');
     document.body.style.overflow = '';
     STATE.currentMovieId = null;
   }
   
   function updateModalFavBtn() {
     if (!STATE.currentMovieId) return;
     const fav = isFav(STATE.currentMovieId);
     DOM.modalFavBtn.innerHTML = fav
       ? '<i class="ph-fill ph-heart"></i> In Favorites'
       : '<i class="ph ph-heart"></i> Add to Favorites';
     DOM.modalFavBtn.classList.toggle('btn--ghost', fav);
     DOM.modalFavBtn.classList.toggle('btn--primary', !fav);
   }
   
   function initModal() {
     DOM.modalCloseBtn.addEventListener('click', closeModal);
   
     // Click outside modal panel to close
     DOM.movieModal.addEventListener('click', e => {
       if (e.target === DOM.movieModal) closeModal();
     });
   
     DOM.modalFavBtn.addEventListener('click', () => {
       if (STATE.currentMovieId) toggleFavorite(STATE.currentMovieId);
     });
   }
   
   
   /* ─── 15. HERO ──────────────────────────────────────────────────── */
   function initHero() {
     DOM.heroDetailsBtn.addEventListener('click', () => {
       openModal(DOM.heroDetailsBtn.dataset.movie);
     });
   
     DOM.heroFavBtn.addEventListener('click', () => {
       toggleFavorite(DOM.heroFavBtn.dataset.movie);
       const fav = isFav(DOM.heroFavBtn.dataset.movie);
       DOM.heroFavBtn.innerHTML = fav
         ? '<i class="ph-fill ph-heart"></i> In Favorites'
         : '<i class="ph ph-heart"></i> Add to Favorites';
     });
   
     // Sync hero fav button on load
     const heroId = DOM.heroFavBtn.dataset.movie;
     if (isFav(heroId)) {
       DOM.heroFavBtn.innerHTML = '<i class="ph-fill ph-heart"></i> In Favorites';
     }
   }
   
   
   /* ─── 16. FOOTER ────────────────────────────────────────────────── */
   function initFooter() {
     DOM.footerYear.textContent = new Date().getFullYear();
   
     const genres = getAllGenres().filter(g => g !== 'All');
     DOM.footerGenres.innerHTML = genres.map(g => `
       <li>
         <a href="#movies" data-genre="${g}">${g}</a>
       </li>
     `).join('');
   
     DOM.footerGenres.querySelectorAll('a[data-genre]').forEach(a => {
       a.addEventListener('click', e => {
         e.preventDefault();
         STATE.activeGenre = a.dataset.genre;
         renderGenrePills();
         renderMoviesGrid();
         document.querySelector('#movies').scrollIntoView({ behavior: 'smooth' });
       });
     });
   }
   
   
   /* ─── 17. SCROLL REVEAL ─────────────────────────────────────────── */
   function initScrollReveal() {
     const sections = document.querySelectorAll(
       '.genre-filter, .movies-section, .favorites-section, .stats-section, .reviews-section, .footer'
     );
   
     sections.forEach(el => el.classList.add('reveal'));
   
     const io = new IntersectionObserver((entries) => {
       entries.forEach(entry => {
         if (entry.isIntersecting) {
           entry.target.classList.add('visible');
           io.unobserve(entry.target);
         }
       });
     }, { threshold: 0.08 });
   
     sections.forEach(el => io.observe(el));
   }
   
   
   /* ─── 18. BOOTSTRAP ─────────────────────────────────────────────── */
   function init() {
     initNavbar();
     initSearch();
     initHero();
     renderGenrePills();
     renderMoviesGrid();
     initSort();
     renderFavoritesGrid();
     renderFavBadge();
     renderStats();
     initReviewForm();
     renderReviewsList();
     initModal();
     initFooter();
     initScrollReveal();
   }
   
   // Wait for DOM + Phosphor Icons
   if (document.readyState === 'loading') {
     document.addEventListener('DOMContentLoaded', init);
   } else {
     init();
   }