import Search, { SearchAttrs, SearchSource } from 'flarum/forum/components/Search';
import ItemList from 'flarum/common/utils/ItemList';
import DiscussionSearchSource from './DiscussionSearchSource';
import type Discussion from 'flarum/common/models/Discussion';

export interface DiscussionSearchAttrs extends SearchAttrs {
  onSelect: (discussion: Discussion) => void;
  ignore: string;
  className?: string;
}

export default class DiscussionSearch extends Search<DiscussionSearchAttrs> {
  view() {
    this.hasFocus = true;

    const vdom = super.view();

    // @ts-ignore
    vdom.attrs.className = `UiKit-Search ${this.state.getValue() && 'open'} ` + vdom.attrs.className.replace(/(focused|open)/g, '');

    return vdom;
  }

  selectResult() {
    if (this.searchTimeout) clearTimeout(this.searchTimeout);

    this.loadingSources = 0;

    const actionable = this.getItem(this.index).find('button, a').get(0);

    if (this.searchState.getValue() && actionable) {
      actionable.click();
    } else {
      this.clear();
    }

    this.$('input').trigger('blur');
  }

  sourceItems() {
    const items = new ItemList<SearchSource>();

    items.add(
      'discussions',
      new DiscussionSearchSource((discussion: Discussion) => {
        this.state.setValue(discussion.title());
        this.attrs.onSelect(discussion);
      }, this.attrs.ignore)
    );

    return items;
  }
}
