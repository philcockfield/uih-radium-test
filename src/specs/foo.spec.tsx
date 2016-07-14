import * as React from 'react';
import * as Radium from 'radium';




@Radium
export class SearchInput extends React.Component<void, void> {
  render() {
    return (
      <div>SearchInput</div>
    );
  }
}

const SearchInputHoc = Radium(SearchInput);


describe('Foo', function() {
  before(() => {
    this
      .component( <SearchInput /> )
      // .component( <SearchInputHoc /> )
  });
});
