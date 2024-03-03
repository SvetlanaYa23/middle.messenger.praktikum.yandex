export interface IProps {
    events?: Record<string, (evt: EventTarget) => void>
}
