import {configure} from 'enzyme';
import configureStore from "redux-mock-store";
import Adapter from 'enzyme-adapter-react-16';
import { getFestivalData } from "../modules/FestivalDataActions";
import FestivalDataReducer from "../modules/FestivalDataReducer";

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
    },
    {
      "name": "Small Night In",
      "bands": [
        {
          "name": "Squint-281",
          "recordLabel": "Outerscope"
        },
        {
          "name": "Yanke East",
          "recordLabel": "MEDIOCRE Music"
        },
        {
          "name": "Wild Antelope",
          "recordLabel": "Marner Sis. Recording"
        },
        {
          "name": "The Black Dashes",
          "recordLabel": "Fourth Woman Records"
        },
        {
          "name": "Green Mild Cold Capsicum",
          "recordLabel": "Marner Sis. Recording"
        }
      ]
    },
    {
      "name": "Trainerella",
      "bands": [
        {
          "name": "Manish Ditch",
          "recordLabel": "ACR"
        },
        {
          "name": "Adrian Venti",
          "recordLabel": "Monocracy Records"
        },
        {
          "name": "Wild Antelope",
          "recordLabel": "Still Bottom Records"
        },
        {
          "name": "YOUKRANE",
          "recordLabel": "Anti Records"
        }
      ]
    },
    {
      "name": "Twisted Tour",
      "bands": [
        {
          "name": "Auditones",
          "recordLabel": "Marner Sis. Recording"
        },
        {
          "name": "Summon",
          "recordLabel": "Outerscope"
        },
        {
          "name": "Squint-281"
        }
      ]
    },
    {
      "bands": [
        {
          "name": "Critter Girls",
          "recordLabel": "ACR"
        },
        {
          "name": "Propeller",
          "recordLabel": "Pacific Records"
        }
      ]
    }
  ]
configure({adapter:new Adapter()});

const users = [
    {
        "firstName": "Nicholas",
        "lastName" : "Thomas",
        "age": 42,
        "email": "nicholas.thomas@gmail.com"
    },
    {
        "firstName": "Elvin",
        "lastName" :"Martin",
        "age": 32,
        "email": "martin.elvin@gmail.com"
    },
    {
        "firstName": "Jass",
        "lastName" :"Base",
        "age": 22,
        "email": "jass.base@gmail.com"
    }
];
describe("ACTIONS: customerActions",()=>{
    const mockStore = configureStore();
    const store = mockStore();
    beforeEach(()=>{
        store.clearActions();
    });

    test("ACTION: GET_FESTIVAL_DATA",()=>{
        store.dispatch(getFestivalData());
        expect(store.getActions()).toMatchSnapshot();
    })
   
});

describe("REDUCER: FestivalDataReducer",()=>{
    test("GET_FESTIVAL_DATA",()=>{
        expect(FestivalDataReducer(undefined,getFestivalData(data))).toMatchSnapshot();
    })
})



