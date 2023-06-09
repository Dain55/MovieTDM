import { headerCreate } from "./ui";
import { getData } from "./http";
let header = document.querySelector('header')
let body = document.body
let iframe = document.querySelector('iframe')
let movie_id = location.search.split('=').at(-1)
let favorite = document.querySelector('#favorite')

let located_data = JSON.parse(localStorage.getItem('favorites')) || []


getData(`/movie/${movie_id}`)
    .then(res => {console.log(res)})


getData(`/movie/${movie_id}/videos`)
    .then(res => {
        let video = res.data.results[Math.floor(Math.random() * res.data.results.length)]
        iframe.src = `https://www.youtube.com/embed/${video.key}`;
    })



 if (located_data.includes(movie_id)) {
    favorite.classList.add('liked')
 } else {
    favorite.classList.remove('liked')
 }

favorite.onclick = () => {

    if (located_data.includes(movie_id)) {
       located_data = located_data.filter(id => id !== movie_id)
       favorite.classList.remove('liked')
    } else {
       located_data.push(movie_id)
       favorite.classList.add('liked')
    }
    localStorage.setItem('favorites', JSON.stringify(located_data))
    
}




headerCreate(header)

getData('/movie/popular')
    .then(res => {
        console.log(res);
    })


getData(`/movie/${movie_id}`)
    .then(({ data }) => {
        body.style.backgroundImage = `url(${import.meta.env.VITE_BASE_IMG + data.backdrop_path})`

        let poster = document.querySelector('.first-section__poster')
        let loc = document.querySelector('.first-section__location-item_active')
        let title = document.querySelector('.first-section__title')
        let sub_title = document.querySelector('.first-section__sub-title')
        let desrc = document.querySelector('.first-section__txt')
        let rating = document.querySelector('.first-section__header-bottom-rating')
        let fav = document.querySelector('.first-section__header-bottom-txt')
        let rating_view = data.vote_average.toString().replaceAll('.', '').slice(0, 2)
        let year = document.querySelector('#year')
        let country = document.querySelector('#country')
        let tagline = document.querySelector('#tagline')
        let director = document.querySelector('#director')
        let scenario = document.querySelector('#scenario')
        let producer = document.querySelector('#producer')
        let operator = document.querySelector('#operator')
        let composer = document.querySelector('#composer')
        let art = document.querySelector('#art')
        let visual_effect = document.querySelector('#visual_effect')
        let genre = document.querySelector('#ganre')
        let profit = document.querySelector('#profit')
        let premiere_world = document.querySelector('#premiere_world')
        let premiere_RF = document.querySelector('#premiere_RF')
        let age_limit = document.querySelector('#age_limit')
        let duration = document.querySelector('#duration')

        loc.innerHTML = data.title
        title.innerHTML = data.original_title
        sub_title.innerHTML = data.original_title
        desrc.innerHTML = data.overview
        rating.firstElementChild.innerHTML = `Рейтинг ожиданий ${rating_view}%`
        fav.innerHTML = `В избранном у ${Math.round(data.popularity)} человек`
        year.innerHTML = data.release_date.split('-').at(0)
        country.innerHTML = ''
        tagline.innerHTML = data.title.split('.').at(0)
        reloadMovieCrews(data.production_countries, country)
        reloadMovieCrews(data.genres, genre)
        profit.innerHTML = data.revenue + '$'
        premiere_world.innerHTML = data.release_date
        premiere_RF.innerHTML = data.release_date
        if (data.adult === false) {
            age_limit.innerHTML = '16+'
        } else {
            age_limit.innerHTML = '18+'
        }
        duration.innerHTML = `${data.runtime} мин.`

        getData(`/movie/${movie_id}/credits`)
            .then(({ data }) => {
                let directors = data.crew.filter(el => el.known_for_department === 'Directing')
                let scenarios = data.crew.filter(el => el.known_for_department === 'Writing')
                let producers = data.crew.filter(el => el.known_for_department === 'Production')
                let operators = data.crew.filter(el => el.known_for_department === 'Visual Effects')
                let composers = data.crew.filter(el => el.known_for_department === 'Sound')
                let arts = data.crew.filter(el => el.known_for_department === 'Art')
                let visual_effects = data.crew.filter(el => el.known_for_department === 'Visual Effects')
                reloadMovieCrews(directors, director)
                reloadMovieCrews(scenarios, scenario)
                reloadMovieCrews(producers, producer)
                reloadMovieCrews(operators, operator)
                reloadMovieCrews(composers, composer)
                reloadMovieCrews(arts, art)
                reloadMovieCrews(visual_effects, visual_effect)
            })

        rating.lastElementChild.style.width = `${rating_view}%`
        poster.src = import.meta.env.VITE_BASE_IMG + data.poster_path

        console.log(data);
    })


function reloadMovieCrews(arr, place) {
    place.innerHTML = ''
    arr.forEach((el, idx) => {
        if (idx !== arr.length - 1) {
            if (el.name !== '' || false) {
                place.innerHTML += `${el.name}, `
            } else {
                place.innerHTML += 'Никого не найдено!'
            }
        } else {
            if (el.name !== '' || false) {
                place.innerHTML += `${el.name}`
            } else {
                place.innerHTML += 'Никого не найдено!'
            }
        }
    })
}

