export class Dispatcher {
    constructor(){
        this.listeners = [];
    }
    dispatch(action){
        this.listeners.forEach(listener=>listener(action));
    }
    register(listener){
        this.listeners.push(listener);
    }
}