import XButton from './components/XButton.vue';
import { default as UI_Helpers} from './helpers/helper';

/* // create a function that takes an array of components and returns a plugin object
function createPlugin(components) {
    return {
        install(Vue) {
        // loop through the components array
            for (const component of components) {
                // register the component globally with Vue
                Vue.component(component.name, component);
            }
        }
    };
}
const myComponents = [XButton];

const UI_Components = createPlugin(myComponents); */

export { XButton ,UI_Helpers};