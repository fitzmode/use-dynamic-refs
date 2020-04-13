import * as React from 'react'

const map = new Map<string, React.RefObject<unknown>>();

const setRef = (key:string):React.RefObject<unknown> | void => {
  if(!key) return console.warn(`useDynamicRefs: Cannot set ref without key `);
  const ref = React.createRef()
  map.set(key,ref)
  return ref;
}

const getRef = (key:string):React.RefObject<unknown> | undefined | void  => {
  if(!key) return console.warn(`useDynamicRefs: Cannot get ref without key`);
  return map.get(key)
}

 const useDynamicRefs = () => {
  return [getRef, setRef]
}

export default useDynamicRefs;