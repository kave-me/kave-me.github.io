---
title: 'Why "height: 100%" not working correctly?'
date: '2021-04-09'
---

`height` and `with` are two of the most important styling tags in CSS, have it occurred to you try to use something like `height: 100%;` and you see no change afterwards but at the same time something like `height: 200px` works perfectly fine?


It happened a few times for me, at that point of time I didn't know by default the values of `heigth` is `auto`, which in most cases means stretch to fit the content, by the way if you are using a **percent** unit take a look at the parent element, check weather the parent element has a height of 0 or not, its obvious trying to use a percent unit on a child element that it's parent has height of 0 will not change anything.

A shorthand solution for some small projects of mine is to do the following at the top of my CSS.
```css
html,
body {
    height: 100%;
}
```
If you are asking yourself what is the parent of `html` tag as I asked myself a few times, the right answer might be it depends on `Window` object, so let's read more about it on [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window "MDN Web Docs")  😉.
