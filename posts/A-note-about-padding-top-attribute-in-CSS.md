---
title: 'Weired behavior using padding-top CSS attribute'
date: '2021-04-11'
---

Let's begin with the following code snippet:

```html 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    
    <style>
        body,html{
            height: 100%;
            background-color: red;
        }
        .container{
            width: 500px;
            heigth: 300px
            background-color: green;
        }
        .child{
            width: 10%;
            background-color: blue;
        }
    </style>
    
</head>
<body>
    <div class="container">
        <div class="child">
        </div>
    </div>
</body>
</html>
```

Suppose you are trying to style the child element to make a square using **percent unit**, what came into your mind?  to me, maybe `width: 10%; height: var(--ten-percent-of-container);` and trying to calculate the variable!

The important note about padding-top that I recently discovered is if you use a percent unit it will calculate it depending on its container **width value**, So one solution to the above question could be using these attributes to style the child element `width: 10%; padding-top: 10%;`
