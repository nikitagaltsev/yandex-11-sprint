import Card from './Card.js'
import CardList from './CardList.js'
import FormValidator from './FormValidator.js'
import UserInfo from './UserInfo.js'
import Popup from './Popup.js'
import Api from './Api.js'
import ImagePopup from './ImagePopup.js'
import "./pages/index.css";

(function () {
  const placesContainer = document.querySelector('.places-list');
  const template = document.querySelector('#place-template').content;
  const formPlace = document.forms.place;
  const formPerson = document.forms.profile;

  const userPhoto = document.querySelector('.user-info__photo');
  const userInfoName = document.querySelector('.user-info__name');
  const userInfoJob = document.querySelector('.user-info__job');
  const inputPersonName = formPerson.elements.name;
  const inputPersonJob = formPerson.elements.about;
  const inputPlaceName = formPlace.elements.name;
  const inputPlaceLink = formPlace.elements.link;

  const userId = {
    id: '',
  };

  const popupPerson = new Popup(document.querySelector('.popup_person'));
  const popupPlace = new Popup(document.querySelector('.popup_place'));
  const popupImage = new ImagePopup(document.querySelector('.popup_image'));

  const userInfo = new UserInfo(userInfoName, userInfoJob, inputPersonName, inputPersonJob);

  const cardList = new CardList(placesContainer);

  const personValidity = new FormValidator(formPerson);
  const placeValidity = new FormValidator(formPlace);
  personValidity.setEventListeners();
  placeValidity.setEventListeners();

  const serverUrl = NODE_ENV === 'dev' ? 'http://praktikum.tk/cohort11' : 'https://praktikum.tk/cohort11';

  const api = new Api({
    baseUrl: serverUrl,
    headers: {
      authorization: 'f0b46149-76a0-417e-b09a-86d55af63e4b',
      'Content-Type': 'application/json'
    }
  })



  //Функции
  function openImagePopup(imageUrl) {
    popupImage.open(imageUrl);
  }


  function deleteCard(cardId) {
    return api.deleteCard(cardId)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
    .catch(err => {
      console.log(err);
    })
  }


  //Инфа о пользователе
  api.getUserInfo()
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
  .then(result => {
    userId.id = result._id;
    userPhoto.setAttribute('style', `background-image: url(${result.avatar})`);
    userInfo.setUserInfo(result.name, result.about);
    userInfo.updateUserInfo();
  })
  .catch(error => {
    console.log(error);
  })

  //Отрендерить начальные карточки
  api.getInitialCards()
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
  .then(result => {
    const cardElements = result.map(cardData => new Card(cardData, template, openImagePopup, deleteCard, userId.id).create());
    cardList.render(cardElements);
  })
  .catch(err => {
    console.log(err);
  })


  document.querySelector('.user-info__edit-button').addEventListener('click', e => {
    userInfo.updateUserInputs();
    popupPerson.open();
    personValidity.resetErrors();
    personValidity.setSubmitButtonState();
    
  });

  formPerson.addEventListener('submit', event => {
    event.preventDefault();
    api.editUserInfo(inputPersonName.value, inputPersonJob.value)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then(result => {
      userInfo.setUserInfo(result.name, result.about);
      userInfo.updateUserInfo();
      formPerson.reset();
      popupPerson.close();
    })
    .catch(err => {
      console.log(err);
    })
  })


  document.querySelector('.user-info__button').addEventListener('click', e => {
    popupPlace.open();
    formPlace.reset();
    placeValidity.resetErrors();
    placeValidity.setSubmitButtonState(true);
  });

  formPlace.addEventListener('submit', event => {
    event.preventDefault();
    /**
     * Отлично!
     * Реализовано добавление карточки.
     */
    api.addCard(inputPlaceName.value, inputPlaceLink.value)
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then(result => {
      console.log(result)
      cardList.addCard(new Card(result, template, openImagePopup, deleteCard, userId.id).create());
      popupPlace.close();
    })
    .catch(err => {
      console.log(err)
    })
  })

})();


/** Попытался сделать  6 заданий, больше не успеваю, защита диплома на носу :(
 * Но я обязательно вернусь к доп. заданиям!!
*/

/**
 * Привет! У вас получилась очень хорошая и аккуратная работа, функционал работает в соответствии с проектным
 * заданием без очевидных багов.
 *
 * Что понравилось:
 *  - Порядок в коде.
 *  - Корректная работа с асинхронным кодом.
 *  - Сделаны 3 дополнительных задания.
 *  - В цепочке промисов присутствует catch, обрабатываются ошибки путем вывода их в консоль.
 *
 * Что надо исправить для того, чтобы работа была принята:
 *  - Согласно заданию, аватар также должен подгружаться на страницу с сервера --исправил
 *  - Закрывайте модальные окна и удаляйте карточку из DOM только после того, как был получен успешный
 *    ответ от сервера. 
 *  - Используйте идентификатор пользователя, полученный из результата выполнения запроса getUserInfo. --исправил
 *  - Все комментарии в коде, отмеченные как "Надо исправить".
 */

/**
 * 9-ый спринт, 2-ая итерация
 * Супер, большинство замечаний проработаны и исправлены, по поводу удаления карточки оставил подробный
 * комментарий в Card.js.
 * Успехов!
 */