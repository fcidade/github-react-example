import React from 'react';
import renderer from 'react-test-renderer';
import Repo from './Repo';

it('Repository anchor should link to external page.', () => {
  const component = renderer.create(<Repo link='/users'/>);
  let tree = component.toJSON();
  console.log(tree);
  const [header] = tree.children;
  const [anchor] = header.children;
  expect(anchor.props.href).toEqual(expect.stringContaining('http'));
});
