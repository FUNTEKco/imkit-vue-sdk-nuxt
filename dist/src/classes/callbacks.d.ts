import { default as Message } from './message';
import { default as User } from './user';
type Callbacks = {
    onMessageReceived: (message: Message, sender: User) => void;
    flexMessageInputSubmitted: (message: Message, value: string) => void;
    flexMessageRatingSubmitted: (message: Message, rating: string) => void;
    onChatbotStateChange: (roomId: string, enabled: boolean) => Promise<boolean>;
};
export default Callbacks;
