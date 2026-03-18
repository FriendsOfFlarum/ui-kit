import Component, { ComponentAttrs } from 'flarum/common/Component';
import { Vnode } from 'mithril';
export interface LabelGroupAttrs extends ComponentAttrs {
    className?: string;
}
export default class LabelGroup extends Component<LabelGroupAttrs> {
    view(vnode: Vnode<LabelGroupAttrs, this>): JSX.Element;
}
