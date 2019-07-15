import { shallow } from 'enzyme';
import * as React from 'react';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import  FestivalData  from '../FestivalData';

configure({adapter:new Adapter()});

let data =[
    {
      "name": "LOL-palooza",
      "bands": [
        {
          "name": "Jill Black",
          "recordLabel": "Fourth Woman Records"
        },
        {
          "name": "Werewolf Weekday",
          "recordLabel": "XS Recordings"
        },
        {
          "name": "Frank Jupiter",
          "recordLabel": "Pacific Records"
        },
        {
          "name": "Winter Primates",
          "recordLabel": ""
        }
      ]
    }
]

describe('<FestivalData />', () => {
  it('renders a button and a bash count', () => {
     let component = shallow(<FestivalData data={data}/>);
     expect(component).toMatchSnapshot();
  });
})