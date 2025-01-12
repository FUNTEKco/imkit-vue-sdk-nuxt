import { default as Message } from './message';
type Callbacks = {
    onMessageReceived: (message: Message) => void;
    flexMessageInputSubmitted: (message: Message, value: string) => void;
    onChatbotStateChange: (roomId: string, enabled: boolean) => Promise<boolean>;
};
export default Callbacks;
