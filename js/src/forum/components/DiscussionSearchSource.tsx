import app from 'flarum/forum/app';
import highlight from 'flarum/common/helpers/highlight';
import { type SearchSource } from 'flarum/forum/components/Search';
import type Discussion from 'flarum/common/models/Discussion';
import Button from 'flarum/common/components/Button';

export default class DiscussionSearchSource implements SearchSource {
  protected readonly results = new Map<string, Discussion[]>();
  protected readonly onSelect: (discussion: Discussion) => void;
  protected readonly ignore: string;

  constructor(onSelect: (discussion: Discussion) => void, ignore: string) {
    this.onSelect = onSelect;
    this.ignore = ignore;
  }

  async search(rawQuery: string): Promise<void> {
    const query = this.normalizeQuery(rawQuery);

    this.results.set(query, []);

    if (!query) {
      m.redraw();
      return;
    }

    try {
      const results = this.isIdQuery(query) ? await this.searchById(query) : await this.searchByQuery(query);
      this.results.set(query, results);
    } catch {
      this.results.set(query, []);
    } finally {
      m.redraw();
    }
  }

  view(rawQuery: string) {
    const query = this.normalizeQuery(rawQuery);
    const results = this.results.get(query) ?? [];

    return results.map((discussion) => {
      const discussionId = discussion.id();
      if (!discussionId) return null;

      return (
        <li key={discussionId} className="DiscussionSearchResult" data-index={`discussions${discussionId}`}>
          <Button onclick={() => this.onSelect(discussion)}>
            <div className="DiscussionSearchResult-id">{discussionId}</div>
            <div className="DiscussionSearchResult-title">{highlight(discussion.title(), query)}</div>
          </Button>
        </li>
      );
    });
  }
  protected async searchById(id: string): Promise<Discussion[]> {
    if (id === this.ignore) return [];

    const discussion = await app.store.find<Discussion>('discussions', id);
    return discussion ? [discussion] : [];
  }

  protected async searchByQuery(query: string): Promise<Discussion[]> {
    const results = await app.store.find<Discussion[]>('discussions', {
      filter: { q: query },
      page: { limit: this.limit() },
    });

    return results.filter((discussion) => discussion.id() !== this.ignore);
  }

  protected isIdQuery(query: string): boolean {
    return /^\d+$/.test(query);
  }

  protected normalizeQuery(query: string): string {
    return query.trim().toLowerCase();
  }

  protected limit(): number {
    return 3;
  }
}
