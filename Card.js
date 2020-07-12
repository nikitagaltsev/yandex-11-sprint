class Card {
  constructor(cardData, template, openImageCallback, deleteCard, userId) {
    this.cardData = cardData;
    this.name = cardData.name;
    this.link = cardData.link;
    this.likes = cardData.likes
    this.template = template;
    this.openImageCallback = openImageCallback;
    this.openImageCallback = this.openImageCallback.bind(this);
    this.like = this.like.bind(this);
    this.remove = this.remove.bind(this);
    this.deleteCard = deleteCard;
    this.userId = userId;
  }

  like(event) {
    event.target.classList.toggle('place-card__like-icon_liked');
  }

  remove(event) {
    this._view.querySelector('.place-card__like-icon').removeEventListener('click', this.like);
    this._view.querySelector('.place-card__delete-icon').removeEventListener('click', this.remove);
    this._view.querySelector('.place-card__image').removeEventListener('click', this.onImageClick);
    event.stopPropagation();
    this._view.remove();
  }

  onImageClick = () => {
    this.openImageCallback(this.link);
  }

  create() {
    this._view = this.template.cloneNode(true).children[0];
    this._view.querySelector('.place-card__name').textContent = this.name;
    this._view.querySelector('.place-card__image').setAttribute('style', `background-image: url(${this.link})`);
    this._view.querySelector('.place-card__like-icon').addEventListener('click', this.like);
    this._view.querySelector('.place-card__image').addEventListener('click', this.onImageClick);
    /**
     * Отлично!
     * Отображается количество лайков.
     */
    this._view.querySelector('.place-card__like-counter').textContent = this.likes.length;

    if (this.cardData.owner._id === this.userId) {
      this._view.querySelector('.place-card__delete-icon').style.display = 'block';
      this._view.querySelector('.place-card__delete-icon').addEventListener('click', event => {
        const answer = window.confirm('Что, вот прям удалить?');
        if (answer) {
          this.deleteCard(this.cardData._id)
          .then(() => this.remove(event))
          .catch(err => console.log(err));
           
          this.deleteCard(this.cardData._id);
          this.remove(event);
        }
        event.stopPropagation();
      });
    }

    return this._view;
  }
}