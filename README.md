# App instruction

this code - Main.js will show you everything

```js
    const {cartItems} = useContext(ShopContext);
    const [items, setItems] = useState([]);
    /* Fetch Data From Server*/
    useEffect(() => {
        fetch(API_URL, {
            mode: "cors",
            headers: {
                Authorization: API_KEY
            }
        }).then((res) => res.json()).then((data) => setItems(data.shop));
    }, [])

    return <>
        <main className='container content'>
            <div className='items'>
                {items.map((item, index) => (
                    <Item key={index}  {...item}  />
                ))}
            </div>
            <Cart {...cartItems} />
            <CartContent/>
        </main>
    </>
```


API_URL = 'https://fortniteapi.io/v2/shop?lang=en'.

but  it by direct call will show you - error and INVALID_API_KEY.

You need send your API_KEY.

That value in my .env.development file in root category.
```
REACT_APP_API_KEY=x..
```
##### I will have errror, rison - some nodes of pics there aren't 

the solution - in item.js

`displayAssets[0].full_background` change to `displayAssets[0]?.full_background`


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
