import React from 'react'
import {shallow,configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Layout from './Layout'

configure({adapter:new Adapter})
const layout=shallow(<Layout/>)

it ('renders correctly',()=>{
    expect(layout).toMatchSnapshot();
})

it('contains navigation bar containing `Home` `Projects` `Services` `Contact` ' ,()=>{

expect(layout.find('#home')).toHaveLength(1)
expect(layout.find('#projects')).toHaveLength(1)
expect(layout.find('#services')).toHaveLength(1)
expect(layout.find('#contact')).toHaveLength(1)

})