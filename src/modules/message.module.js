import {Module} from '@/core/module';

export class MessageModule extends Module {
  constructor(name, type) {
    super(name, type);
    this.messageElement = document.createElement('p');
    this.loaderElement = document.createElement('div');
    this.loaderElement.className = 'loader';
  }

  showLoader() {
    document.body.append(this.loaderElement);
  }

  removeLoader() {
    this.loaderElement.remove();
  }

  showMessage(message) {
    this.messageElement.className = 'message message-show';
    this.messageElement.textContent = message;
    if (!document.querySelector('.message')) {
      document.body.append(this.messageElement);
    };
  }

  hideMessage = () => {
    if (!this.messageElement.classList.contains('message-hide')) {
      this.messageElement.classList.remove('message-show');
      this.messageElement.classList.add('message-hide');
    }
  };

  getPosition() {
    return new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject));
  }

  async getWeather() {
    try {
      const currentPosition = await this.getPosition();
      const {latitude, longitude} = currentPosition.coords;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=ru&units=metric&appid=ef12f9016561b2c37507904eb87ad04b`;
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.log('ERROR', error);
      return {error: true};
    }
  }

  async getStringWeather() {
    const weather = await this.getWeather();
    if (weather.error) return 'Что-то пошло не так:( Для доступа к погоде необходим доступ к геолокации и интернет';
    const parse = {
      name: weather.name,
      status: weather.weather[0].description,
      temp: Math.floor(weather.main.temp),
      feelsLike: Math.floor(weather.main.feels_like),
    };
    return `В ${parse.name} сейчас ${parse.status}, ${parse.temp}°C (ощущается как ${parse.feelsLike}°C)`;
  }

  trigger() {
    this.showLoader();
    this.getStringWeather().then((weather) => {
      this.removeLoader();
      this.showMessage(weather);
      setTimeout(this.hideMessage, 5000);
    });
  }
}
