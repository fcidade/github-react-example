import React from 'react';
import renderer from 'react-test-renderer';
import Repo from './Repo';

it('Repository anchor should link to external page.', () => {
  const component = renderer.create(<Repo link='http://google.com'/>);
  let tree = component.toJSON();
  const [header] = tree.children;
  const [anchor] = header.children;
  expect(anchor.props.href).toEqual(expect.stringContaining('http'));
});
