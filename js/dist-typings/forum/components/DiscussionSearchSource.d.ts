import { type SearchSource } from 'flarum/forum/components/Search';
import type Discussion from 'flarum/common/models/Discussion';
export default class DiscussionSearchSource implements SearchSource {
    protected readonly results: Map<string, Discussion[]>;
    protected readonly onSelect: (discussion: Discussion) => void;
    protected readonly ignore: string;
    constructor(onSelect: (discussion: Discussion) => void, ignore: string);
    search(rawQuery: string): Promise<void>;
    view(rawQuery: string): (JSX.Element | null)[];
    protected searchById(id: string): Promise<Discussion[]>;
    protected searchByQuery(query: string): Promise<Discussion[]>;
    protected isIdQuery(query: string): boolean;
    protected normalizeQuery(query: string): string;
    protected limit(): number;
}
