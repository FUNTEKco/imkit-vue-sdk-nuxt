import { default as Message } from './message';
type Callbacks = {
    flexMessageInputSubmitted: (message: Message, value: string) => void;
};
export default Callbacks;
