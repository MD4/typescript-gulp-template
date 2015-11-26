export {Shape} from './shapes/Shape';
export {Square} from './shapes/Square';
export {Circle} from './shapes/Circle';

// in-browser export to window
if (window) {
    window['template'] = this;
}
