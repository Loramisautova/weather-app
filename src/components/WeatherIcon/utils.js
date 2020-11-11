import ClearSky from '../../assets/clear-sky.png';
import Clouds from '../../assets/clouds.png';

export const getImageFromIcon = (icon) => {
    switch (icon) {
        case '01d':
        case '01n':
            return ClearSky;
        case '04d':
        case '04n':
            return Clouds;
        /** ДРУГИЕ ВАРИАНТЫ */
        default:
            return null;
    }
};