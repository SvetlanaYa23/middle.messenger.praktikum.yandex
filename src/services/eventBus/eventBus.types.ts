type CustomEventListener = (...args: unknown[]) => void;

type EventListeners = {
  [event: string]: CustomEventListener[];
};
