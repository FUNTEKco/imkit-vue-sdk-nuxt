import { Dayjs } from 'dayjs';
declare const toLocaleString: (seconds: number, t: (str: string) => string, locale: string, now?: Dayjs) => string;
export default toLocaleString;
