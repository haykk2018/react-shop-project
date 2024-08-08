# App instruction

API_URL = 'https://fortniteapi.io/v2/shop?lang=en'
getting data from link API_URL

### Haw app woks?

it sends functions to inside components by component arguments

```jsx
<Component func1={func1} func2={func2}/>
```

and after that they are call them from html element

```js
<tag onClick={() => func1(arg1, arg2)}>
```
or ( if there aren't args )
```js
<tag onClick={func1}>
```
if we send args by object
```js
<tag onClick={() => func1({val1, val2})}>
```
