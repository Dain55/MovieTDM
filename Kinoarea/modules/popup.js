export function modalToggle(which) {
    let popup = document.querySelector('.popup')
    let inners = popup.querySelectorAll('.popup__inner')
    if (popup.classList.contains('visible')) {
        popup.classList.remove('visible')
        popup.firstElementChild.classList.remove('visible')
    } else {
        popup.classList.add('visible')
        popup.firstElementChild.classList.add('visible')
    }

    if (which) {
        for (let item of inners) {
            if (item.dataset.popup === which) {
                item.classList.add('visible')
            } else {
                item.classList.remove('visible')
            }
        }
    }
}

export function reloadPopup(place) {
    place.innerHTML += `
    <div class="popup">
		<div class="popup__body">
			<div class="popup__close-area" data-popup_close></div>
			<div class="popup__content">
				<div class="popup__inner" data-popup="search">
					<img class="popup__close-btn" data-popup_close src="/public/icons/popup-close.svg" alt="icon">
					<div class="popup__search">
						<input class="popup__search-inp" type="text" placeholder="Введите название фильма или актёра">
						<img class="popup__search-filter-icon" src="/public/icons/filter.svg" alt="icon">
						<button class="popup__search-btn">
							<img class="popup__search-icon" src="/public/icons/search.svg" alt="icon">
						</button>
					</div>
					<div class="popup__search-wrapper popup__search-wrapper_movie"></div>
					<div class="popup__search-wrapper popup__search-wrapper_person"></div>
                </div>
				<div class="popup__inner" data-popup="sign-in">
					<img class="popup__close-btn" data-popup_close src="/public/icons/popup-close.svg" alt="icon">
					<h1 class="popup__title">Войти</h1>
					<form class="popup__form" action="#">
						<input class="popup__form-item popup__form-item_inp" type="txt"
							placeholder="Логин, почта или телефон">
						<input class="popup__form-item popup__form-item_inp" type="password" placeholder="Ваш пароль">
						<button class="popup__form-item popup__form-item_btn popup__form-item_btn-yellow"
							type="submit">Войти</button>
						<button class="popup__form-item popup__form-item_btn popup__form-item_btn-blue"
							type="submit">Зарегистрироваться</button>
					</form>
					<a class="popup__link popup__link_blue" href="#">Восстановить пароль</a>
					<div class="popup__share">
						<div class="popup__share-item">
							<img class="popup__share-img" src="/public/icons/share/vk.svg" alt="icon">
						</div>
						<div class="popup__share-item">
							<img class="popup__share-img" src="/public/icons/share/fb.svg" alt="icon">
						</div>
						<div class="popup__share-item">
							<img class="popup__share-img" src="/public/icons/share/g.svg" alt="icon">
						</div>
						<div class="popup__share-item">
							<img class="popup__share-img" src="/public/icons/share/tw.svg" alt="icon">
						</div>
					</div>
				</div>
				<div class="popup__inner" data-popup="log-in">
					<img class="popup__close-btn" data-popup_close src="/public/icons/popup-close.svg" alt="icon">
					<h1 class="popup__title">Зарегистрироваться</h1>
					<form class="popup__form" action="#">
						<input class="popup__form-item popup__form-item_inp" type="txt" placeholder="Имя">
						<input class="popup__form-item popup__form-item_inp" type="txt" placeholder="Фамилия">
						<input class="popup__form-item popup__form-item_inp" type="txt" placeholder="Придумайте логин">
						<input class="popup__form-item popup__form-item_inp" type="txt" placeholder="Придумайте пароль">
						<input class="popup__form-item popup__form-item_inp" type="txt" placeholder="Повторите пароль">
						<input class="popup__form-item popup__form-item_inp" type="txt"
							placeholder="Номер телефона или e-mail">
						<label class="popup__form-item popup__form-item_label">
							<input class="popup__form-item popup__form-item_checkbox" type="checkbox">
							<p class="popup__txt">Соглашаюсь на условия <a class="popup__link popup__link_yellow"
									href="#">политики конфиденциальности</a></p>
						</label>
						<label class="popup__form-item popup__form-item_label">
							<input class="popup__form-item popup__form-item_checkbox" type="checkbox">
							<p class="popup__txt">Соглашаюсь на обработку персональных данных</p>
						</label>
						<button class="popup__form-item popup__form-item_btn popup__form-item_btn-yellow"
							type="submit">Зарегистрироваться</button>
					</form>
				</div>
				<div class="popup__inner" data-popup="res-pwd">
					<img class="popup__close-btn" data-popup_close src="/public/icons/popup-close.svg" alt="icon">
					<h1 class="popup__title">Восстановить пароль</h1>
					<form class="popup__form" action="#">
						<input class="popup__form-item popup__form-item_inp" type="txt" placeholder="Почта или номер телефона">
						<div class="popup__form-item popup__form-item_double">
							<button class="popup__form-item popup__form-item_btn popup__form-item_btn-blue"
								type="reset">Отправить</button>
							<input class="popup__form-item popup__form-item_inp" type="text"
								placeholder="Полученный код">
						</div>
						<button class="popup__form-item popup__form-item_btn popup__form-item_btn-yellow"
							type="submit">Далее</button>
					</form>
				</div>
				<div class="popup__inner" data-popup-popup="res-pwd-two">
					<img class="popup__close-btn" data-popup_close src="/public/icons/popup-close.svg" alt="icon">
					<h1 class="popup__title">Восстановить пароль</h1>
					<form class="popup__form" action="#">
						<input class="popup__form-item popup__form-item_inp" type="txt" placeholder="Придумайте новый пароль">
						<input class="popup__form-item popup__form-item_inp" type="txt" placeholder="Подтвердите новый пароль">
						<button class="popup__form-item popup__form-item_btn popup__form-item_btn-yellow"
							type="submit">Готово!</button>
					</form>
				</div>
			</div>
		</div>
	</div>
    `

}