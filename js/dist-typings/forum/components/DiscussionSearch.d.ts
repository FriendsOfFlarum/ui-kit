/// <reference types="mithril" />
import Search, { SearchAttrs } from 'flarum/forum/components/Search';
import ItemList from 'flarum/common/utils/ItemList';
import type Discussion from "flarum/common/models/Discussion";
export interface DiscussionSearchAttrs extends SearchAttrs {
    onSelect: (discussion: Discussion) => void;
    ignore: number;
}
export default class DiscussionSearch<T extends DiscussionSearchAttrs> extends Search<T> {
    view(): JSX.Element;
    sourceItems(): ItemList<unknown>;
}
