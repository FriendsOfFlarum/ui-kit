import Component, { ComponentAttrs } from 'flarum/common/Component';
import clsx from 'flarum/common/utils/classList';
import { Vnode } from 'mithril';

export interface LabelAttrs extends ComponentAttrs {
  color?: string;
  className?: string;
}

export default class Label extends Component<LabelAttrs> {
  view(vnode: Vnode<LabelAttrs, this>) {
    const { color, className } = this.attrs;

    return (
      <span
        className={clsx('UiKit-Label', className, {
          colored: !!color,
        })}
        style={color ? { backgroundColor: `#${color}` } : undefined}
      >
        <span className="UiKit-Label-text">{vnode.children}</span>
      </span>
    );
  }
}
