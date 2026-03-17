import Component, { ComponentAttrs } from 'flarum/common/Component';
import clsx from 'flarum/common/utils/classList';

export interface ProgressBarAttrs extends ComponentAttrs {
  className?: string;
  mini?: boolean;
  fancy?: boolean;
  alternate?: boolean;
  progress: number;
}

export default class ProgressBar extends Component<ProgressBarAttrs> {
  view() {
    return (
      <div
        className={clsx('UiKit-ProgressBar', this.attrs.className, {
          'UiKit-ProgressBar--mini': this.attrs.mini,
          'UiKit-ProgressBar--fancy': this.attrs.fancy,
          'UiKit-ProgressBar--alternate': this.attrs.alternate,
        })}
      >
        <div className="UiKit-ProgressBar-bar" style={{ width: `${this.getProgress()}%` }} />
      </div>
    );
  }

  getProgress() {
    return this.attrs.progress;
  }
}
