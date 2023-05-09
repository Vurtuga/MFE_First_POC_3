import XButton from './components/XButton.vue';
import { default as UI_Helpers} from './helpers/helper';

/* const components = {
    XButton
}; */

// create a plugin object with an install method
/* const UI_Components = {
    install(Vue) {
        // loop through the components object
        for (const name in components) {
        // check if the component has a valid name
        if (components.hasOwnProperty(name)) {
            // get the component definition
            const component = components[name];
            // register the component globally with Vue
            Vue.component(name, component);
        }
        }
    }
}; */
// create a function that takes an array of components and returns a plugin object
/* function createPlugin(components) {
    return {
        install(Vue) {
        // loop through the components array
        for (const component of components) {
            // register the component globally with Vue
            Vue.component(component.name, component);
        }
        }
    };
} */
  
  // create an array of components you want to share
 /*  const myComponents = [XButton]; */
  
  // export the plugin object created by the function

  /* const UI_Components = createPlugin(myComponents); */

// export the plugin object as the default export
export default {UI_Components , UI_Helpers};