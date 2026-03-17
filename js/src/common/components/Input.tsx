import Component, { ComponentAttrs } from 'flarum/common/Component';
import icon from 'flarum/common/helpers/icon';
import clsx from 'flarum/common/utils/classList';

export type InputAttrs = ComponentAttrs & {
  icon?: string;
  className?: string;
  parentClassName?: string;
} & HTMLInputElement;

export default class Input extends Component<InputAttrs> {
  view() {
    const { icon: iconName, parentClassName, className, ...inputAttrs } = this.attrs;

    return (
      <div className={clsx('UiKit-Input', parentClassName)}>
        {iconName && <span className="UiKit-Input-icon">{icon(iconName)}</span>}
        <input
          className={clsx(this.attrs.className, 'UiKit-FormControl', {
            hasIcon: !!iconName,
          })}
          {...inputAttrs}
        />
      </div>
    );
  }
}
