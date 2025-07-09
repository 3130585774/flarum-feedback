/// <reference types="mithril" />
import AdminPage, { AdminHeaderAttrs } from 'flarum/admin/components/AdminPage';
export default class FeedbackPage extends AdminPage {
    feedbacks: any[];
    loading: boolean;
    pageOffset: number;
    pageLimit: number;
    headerInfo(): AdminHeaderAttrs;
    oninit(vnode: any): void;
    loadFeedbacks(): void;
    prevPage(): void;
    nextPage(): void;
    content(): JSX.Element;
}
