import Component, { ComponentAttrs } from 'flarum/common/Component';
import clsx from 'flarum/common/utils/classList';
import { Vnode } from 'mithril';

export interface LabelGroupAttrs extends ComponentAttrs {
  className?: string;
}

export default class LabelGroup extends Component<LabelGroupAttrs> {
  view(vnode: Vnode<LabelGroupAttrs, this>) {
    return <span className={clsx('UiKit-LabelGroup', this.attrs.className)}>{vnode.children}</span>;
  }
}
