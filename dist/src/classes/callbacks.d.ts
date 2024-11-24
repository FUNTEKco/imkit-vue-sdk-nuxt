import { default as Message } from './message';
type Callbacks = {
    flexMessageInputSubmitted: (message: Message, value: string) => void;
    onChatbotStateChange: (roomId: string, enabled: boolean) => Promise<boolean>;
};
export default Callbacks;
