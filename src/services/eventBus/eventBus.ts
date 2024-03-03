import './eventBus.types.ts';

export class EventBus {
    private listeners: EventListeners;
  
    constructor() {
      this.listeners = {};
    }
  
    on(event: string, callback: EventListener): void {
      if (!this.listeners[event]) {
        this.listeners[event] = [];
      }
  
      this.listeners[event].push(callback);
    }
  
    off(event: string, callback: EventListener): void {
      if (!this.listeners[event]) {
        throw new Error(`Нет события: ${event}`);
      }
  
      this.listeners[event] = this.listeners[event].filter(
        listener => listener !== callback
      );
    }
  
    emit(event: string, ...args: unknown[]): void {
      if (!this.listeners[event]) {
        throw new Error(`Нет события: ${event}`);
      }
      
      this.listeners[event].forEach(function(listener) {
        listener(...args);
      });
    }
  }
