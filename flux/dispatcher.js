export class Dispatcher {
    constructor(){
        this.listeners = [];
    }

    // Dispatch of Action to Store
    dispatch(action){
        this.listeners.forEach(listener=>listener(action));
    }

    // Registering Function of Store 
    register(listener){
        this.listeners.push(listener);
    }
}