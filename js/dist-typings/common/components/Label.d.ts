import Component, { ComponentAttrs } from 'flarum/common/Component';
import { Vnode } from 'mithril';
export interface LabelAttrs extends ComponentAttrs {
    color?: string;
    className?: string;
}
export default class Label extends Component<LabelAttrs> {
    view(vnode: Vnode<LabelAttrs, this>): JSX.Element;
}
