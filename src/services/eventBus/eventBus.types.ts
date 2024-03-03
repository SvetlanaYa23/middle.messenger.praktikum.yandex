type CustomEventListener = (...args: any[]) => void;

type EventListeners = {
  [event: string]: CustomEventListener[];
};
