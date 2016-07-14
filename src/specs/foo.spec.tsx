import * as React from 'react';
import * as Radium from 'radium';



export interface SearchInputProps {};



@Radium
export class SearchInput extends React.Component<void, void> {
  render() {
    return (
      <div>SearchInput</div>
    );
  }
}


describe('Foo', function() {
  before(() => {
    this.component( <SearchInput /> )
  });
});
