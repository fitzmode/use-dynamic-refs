# React use-dynamic-refs

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/use-dynamic-refs.svg)](https://www.npmjs.com/package/use-dynamic-refs) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-dynamic-refs
```

## Usage

```tsx
import React, { useEffect } from 'react';
import useDynamicRefs from 'use-dynamic-refs';

const Example = () =>  {
  const foo = ['random_id_1', 'random_id_2'];
  const [getRef, setRef] =  useDynamicRefs();

  useEffect(() => {
    // Get ref for specific ID 
    const id1 = getRef('random_id_1');
    console.log(id1)
  }, [])

    return ( 
      <>
        {/* Simple set ref. */}
        <span ref={setRef('random_id_3')}></span>

         {/*  Set refs dynamically in Array.map() */}
        { foo.map((eachId, idx) => (
          <div ref={setRef(eachId)}> Hello {each} </div>))}
      </>
    )
}

export default Example;
```

## License

MIT © [fitzmode](https://github.com/fitzmode)
