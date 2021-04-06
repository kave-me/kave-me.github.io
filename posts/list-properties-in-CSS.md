---
title: 'How to use list-property in CSS?'
date: '2021-04-07'
---

`list-property` is a shorthand to apply list related styles, the value consist of 3 parts, **position**, **type** and **image**.

```css
list-style: inside square url("img/check.png");
/*
the firs value is Position
second one is Type
and third one is Image
*/
```
What is the meaning of **position** in `list-properties` context?

It means where to put bullet points, read more on [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-position "MDN Web Docs")
```css
list-style-position: inside;
```

List of some values you can use as **position**:
- `inside`
- `outside`
- `initial`
- `inherit`

What about the meaning of **type** in `list-properties`?

It means how the shape of bullet points are, read more on [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type "MDN Web Docs")
```css
list-style-type: square;
```
List of some values you can use as **type**:
- `disc`
- `circle`
- `square`
- `decimal`
- `georgian`
- `'-'`
  
 And finally what is the meaning of **image** in `list-properties` context?

As you see it's self-explanatory, you are going to use a value like `url( IMAGE_PATH )` to replace bullet points with an image of yours, read more on [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-image "MDN Web Docs")
```css
list-style-type: url("img/check.png");
```
List of some values you can use as **image**:
- `url('starsolid.gif')`
- `linear-gradient(to left bottom, red, blue)`

After all in 99% of the times we use the following:
```css
list-style: none;
```
