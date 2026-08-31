import { default as User } from '../classes/user';
/**
 * Render a plain-text composer body into the contenteditable HTML the input
 * expects: HTML-escape the text, turn known `@userId` mentions into
 * non-editable embedded chips, and convert newlines to `<br>`.
 *
 * Shared by the paste handler (useAttachmentUpload.onPaste) and the
 * edit-message hydration path (ChatRoom) so both produce identical markup.
 * Unknown mentions (no matching user) are left as their original matched text.
 */
export declare const renderMentionsToHtml: (text: string, users: Record<string, User>) => string;
