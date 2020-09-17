import React from 'react';
import { configure,shallow,mount} from 'enzyme';
import App from './App';
import Adapter from 'enzyme-adapter-react-16'
import {MemoryRouter,Route} from 'react-router'
import Home from './Home'
configure({adapter: new Adapter()})

const component = shallow(<App/>);
let pathMap = component.find(Route).reduce((pathMap, route) => {
    const routeProps = route.props();
    pathMap[routeProps.path] = routeProps.component?routeProps.component:routeProps.render({});
    return pathMap;
}, {});

it('renders correctly', () => {
  const app=shallow(<App/>)
  expect(app).toMatchSnapshot();
});


it ('should display clock when routed to `/',()=>{
  expect(pathMap['/']).toBe(Home);
})

it ('should display `you choose projects when routed to `/projects',()=>{
  const Mockcom=(props)=>{
    return pathMap['/projects'];
  }
  const com=shallow(<Mockcom/>)
  console.log(com.debug())
  expect(com.find('p').text()).toBe("You Choose Projects")
})

it('should display `you choose services` when routed to /services`',()=>{
const MockCom=(props)=>{
  return pathMap['/services'];
}
const com=shallow(<MockCom/>)
expect(com.find('p').text()).toBe("You Choose Services")
})
it('should display `you choose contact` when routed to /contact`',()=>{
const MockCom=(props)=>{
  return pathMap['/contact'];
}
const com=shallow(<MockCom/>)
expect(com.find('p').text()).toBe("You Choose Contact")
})