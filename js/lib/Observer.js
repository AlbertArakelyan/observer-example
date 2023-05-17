class Observer {
  constructor() {
    this.observers = [];
  }

  subscribe(func) {
    this.observers.push(func);
  }

  unsubscribe(func) {
    this.observers = this.observers.filter((observer) => observer !== func);
  }

  dispatch(data) {
    this.observers.forEach((observer) => {
      observer(data);
    });
  }
}

export default new Observer;