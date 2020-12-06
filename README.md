# react-scroll-restorer

> Restore scroll positions on components after re-mount with a single hook.

[![NPM](https://img.shields.io/npm/v/react-scroll-restorer.svg)](https://www.npmjs.com/package/react-scroll-restorer)

## Install

```bash
npm install --save react-scroll-restorer
```

## Usage

### App.js

```jsx
import { ScrollRestorer } from 'react-scroll-restorer';

const App = () => {
  return <ScrollRestorer>
      {/* child components ... */}
  </ScrollRestorer>
}
```

### ChildComponent.js

```jsx
import { useScrollRestorer } from 'react-scroll-restorer';

// ChildComponent with scrollable content
const ChildComponent = () => {
  useScrollRestorer("unique-key");
  // "unique-key" has to be unique for each instance.
  // If you are using multiple instances, then pass
  // a unique key via props from parent component.

  return <div>
    {/* scrollable content ... */}
  </div>;
}
```

## License

MIT © [ahmednooor](https://github.com/ahmednooor)
