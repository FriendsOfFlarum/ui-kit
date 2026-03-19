import Search, { type SearchAttrs, SearchSource } from 'flarum/forum/components/Search';
import ItemList from 'flarum/common/utils/ItemList';
import type Discussion from 'flarum/common/models/Discussion';
export interface DiscussionSearchAttrs extends SearchAttrs {
    onSelect: (discussion: Discussion) => void;
    ignore: string;
}
export default class DiscussionSearch extends Search<DiscussionSearchAttrs> {
    view(): JSX.Element;
    selectResult(): void;
    sourceItems(): ItemList<SearchSource>;
}
