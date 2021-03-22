import React from 'react';
import { shallow } from 'enzyme';

import Dashboard from '../../components/Dashboard';


test('should set up expense dashboard page', () =>{
    const wrapper = shallow(<Dashboard />);

    expect(wrapper).toMatchSnapshot();
});
