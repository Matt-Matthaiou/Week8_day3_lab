import React from "react";
import PosterContainer from "../containers/PosterContainer";
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme';



describe('PosterContainer', () =>{
    configure({ adapter: new Adapter()});
    let container;
    beforeEach(() => {
        container = shallow(< PosterContainer />); 
      });

    it('Should contain a login message', ()=>
    {
        const nameInput = container.find('#login-message')
        expect(nameInput.text()).toEqual('Welcome to Poster Shop')

    })

    
})

