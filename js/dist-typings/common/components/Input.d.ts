import Component, { ComponentAttrs } from 'flarum/common/Component';
export type InputAttrs = ComponentAttrs & {
    icon?: string;
    className?: string;
    parentClassName?: string;
} & HTMLInputElement;
export default class Input extends Component<InputAttrs> {
    view(): JSX.Element;
}
