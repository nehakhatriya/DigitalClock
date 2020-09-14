import React from 'react';
import { configure,shallow } from 'enzyme';
import App from './App';
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()})
const app=shallow(<App/>)

it('renders correctly', () => {
  expect(app).toMatchSnapshot();
});

it('should display current time',()=>{
  let date=new Date();
  expect(app.find('#time').text()).toEqual(`${date.toLocaleTimeString()}`)
})

it('should display date when toggle button is clicked',()=>{
  let date=new Date();
  app.find("#togglebtn").simulate('click')
  expect(app.find('#date').text()).toEqual(`${date.toLocaleDateString()}`)
})
