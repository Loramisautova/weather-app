import ClearSky from '../../assets/clear-sky.png';
import Clouds from '../../assets/clouds.png';
import Rain from '../../assets/rain.png';
import FewCloudsDay from '../../assets/few-clouds-day.png';
import FewCloudsNight from '../../assets/few-clouds-night.png';
import ScatteredClouds from '../../assets/scattered-clouds.png';
import ShowerRain from '../../assets/shower-rain.png';
import ThunderstormDay from '../../assets/thunderstorm-day.png';
import ThunderstormNight from '../../assets/thunderstorm-night.png';
import SnowDay from '../../assets/snow-day.png';
import SnowNight from '../../assets/snow-night.png';
import Mist from '../../assets/mist.png';

export const getImageFromIcon = (icon) => {
    switch (icon) {
        case '01d':
        case '01n':
            return ClearSky;
        case '02d':
            return FewCloudsDay;
        case '02n':
            return FewCloudsNight;
        case '03d':
        case '03n':
            return ScatteredClouds;
        case '04d':
        case '04n':
            return Clouds;
        case '09d':
        case '09n':
            return ShowerRain;
        case '10d':
        case '10n':
            return Rain;
        case '11d':
            return ThunderstormDay;
        case '11n':
            return ThunderstormNight;
        case '13d':
            return SnowDay;
        case '13n':
            return SnowNight;
        case '50d':
        case '50n':
            return Mist;
        default:
            return null;
    }
};