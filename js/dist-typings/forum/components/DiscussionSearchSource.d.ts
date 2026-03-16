import type Mithril from 'mithril';
import Search from 'flarum/forum/components/Search';
import type Discussion from 'flarum/common/models/Discussion';
export default class DiscussionSearchSource implements Search {
    protected results: Map<string, unknown[]>;
    protected onSelect: (discussion: Discussion) => void;
    protected ignore: number;
    constructor(onSelect: (discussion: Discussion) => void, ignore: number);
    search(query: string): Promise<void | never[]>;
    view(query: string): Mithril.Children;
}
