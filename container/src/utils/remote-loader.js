export class remoteLoader {
    //---- Properties ---------
    cache;
    //---- constructor ---------
    constructor () {
        console.log ('remoteLoader loaded');
        this.cache = [];
    }
    
    //---- methods ---------
    loadScope = (url, scope) => {
        if (this.cache[url + scope]) {
            return this.cache[url + scope];
        }  
        const element = document.createElement ('script');
        const promise = new Promise ( (resolve, reject) => {
            element.src = url;
            element.type = 'text/javascript';
            element.async = true;
            element.onload = () => resolve (window [scope]);
            element.onerror = reject;
        });
        document.head.appendChild (element);
        promise.finally ( () => document.head.removeChild (element));
        this.cache[url + scope] = promise;
        return promise;
    }

    loadModule = async (url, scope, module) => {
        try {
            const container = await this.loadScope (url, scope);
            await __webpack_init_sharing__ ('default');
            await container.init (__webpack_share_scopes__.default);
            const factory = await container.get (module);
            return factory ();
        } catch (error) {
            console.error ('Error loading module:', error);
            throw error;
        }
    }
}

