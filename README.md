# UIHarness Radium Test with TypeScript
Failing when decorating a class with `@Radium`:

```js
@Radium
export class SearchInput extends React.Component<void, void> {
  render() {
    return (
      <div>SearchInput</div>
    );
  }
}
```

Fails the same way when using a higher-order component:

```js
const SearchInputHoc = Radium(SearchInput);
```

Errors out with:

![error](https://cloud.githubusercontent.com/assets/185555/16830475/558089ee-49f3-11e6-89f0-12596e45ce72.png)




## Run
    npm install
    npm start



---
### License: MIT
