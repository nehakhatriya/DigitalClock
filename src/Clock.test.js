import React from 'react';
import { configure,shallow } from 'enzyme';
import Clock from './Clock';
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()})
const clock=shallow(<Clock/>)

it('renders correctly', () => {
  expect(clock).toMatchSnapshot();
})

it('should display current time',()=>{
  let date=new Date();
  expect(clock.find('#time').text()).toEqual(`${date.toLocaleTimeString()}`)
})

it('should display date when toggle button is clicked',()=>{
  let date=new Date();
  clock.find("#togglebtn").simulate('click')
  expect(clock.find('#date').text()).toEqual(`${date.toLocaleDateString()}`)
})
