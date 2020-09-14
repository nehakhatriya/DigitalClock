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
  const min=date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes()
  const hour=date.getHours()
  const sec=date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds()
  expect(app.find('#time').text()).toEqual(`${hour}:${min}:${sec}`)
})

it('should display date when toggle button is clicked',()=>{
  let datee=new Date();
  const days=['mon','tue','wed','thur','fri','sat','sun']
  const day=days[datee.getDay()]
  const today=datee.getDate()
  const months=['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec']
  const month=months[datee.getMonth()]
  const year=datee.getFullYear()
  app.find("#togglebtn").simulate('click')
  expect(app.find('#date').text()).toEqual(`${day} ${today} ${month} ${year}`)
})
