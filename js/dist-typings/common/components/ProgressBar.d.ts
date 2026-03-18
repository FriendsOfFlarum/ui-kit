import Component, { ComponentAttrs } from 'flarum/common/Component';
export interface ProgressBarAttrs extends ComponentAttrs {
    className?: string;
    mini?: boolean;
    fancy?: boolean;
    alternate?: boolean;
    progress: number;
}
export default class ProgressBar extends Component<ProgressBarAttrs> {
    view(): JSX.Element;
    getProgress(): number;
}
