# Flarum UiKit
[![latest version](https://img.shields.io/packagist/v/fof/ui-kit.svg)](https://packagist.org/packages/fof/ui-kit)
![mit license](https://img.shields.io/badge/license-MIT-green.svg)
[![downloads](https://img.shields.io/packagist/dt/fof/ui-kit)](https://packagist.org/packages/fof/ui-kit/stats)

[Flarum](https://flarum.org) UiKit with reusable frontend utilities for extension developers. (***Not An Extension***)

## Usage
Use the package's extender to register its resources.

**extend.php**
```php
return [
    new FoF\UiKit\Extend\Register,
];
```

**example.js**
```jsx
import ProgressBar from 'flarum/ui-kit/common/ProgressBar';
import Label from 'flarum/ui-kit/common/Label';
import LabelGroup from 'flarum/ui-kit/common/LabelGroup';
import Input from 'flarum/ui-kit/common/Input';

import DiscussionSearch from 'flarum/ui-kit/forum/DiscussionSearch';

/**
 * @param mini bool           small sized
 * @param alternate bool      works with backgrounds using control-bg background color
 * @param progress number     percentage
 * @param className string
 */
<ProgressBar fancy={true} mini={false} alternate={false} progress={93} />

/**
 * @param color string
 */
<Label color="red">Text</Label>

/**
 * Container for a group of labels
 */
<LabelGroup></LabelGroup>

/**
 * @param icon string         fontawesome icon
 * @param className string
 * ...attrs:    other attributes
 */
<Input icon="fas fa-user" className="Input--example"/>

/**
 * @param state GlobalSearchState
 * @param ignore number
 * @param onSelect (discussion: Discussion) => void
 */
<DiscussionSearch state={} ignore={485} onSelect={(discussion) => ...} />
```

## Installation
```ssh
$ composer require fof/ui-kit
```

## Updating
```ssh
$ composer update fof/ui-kit
```

## Links
* [GitHub](https://github.com/FriendsOfFlarum/ui-kit)
* [Packagist](https://packagist.org/packages/fof/ui-kit)

## License
The MIT License.
