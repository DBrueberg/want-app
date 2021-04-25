// Devin Brueberg
// CSC435 Adv Web App Development
// Want Application - shoppingCartTest.test.js
// April 25, 2021
// Last Edited (Initials, Date, Edits):

// Importing in needed modules/files
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ShoppingCart from '../page/ShoppingCart';

// Configuring adapater for Enzyme
configure({ adapter: new Adapter() });

// Wrapper for the <ShoppingCart /> page
const wrapper = shallow(<ShoppingCart/>);

// Verifying <ShoppingCart /> components are displaying correctly
describe("<ShoppingCart /> UI Component", () => {
    // Did the main div render
    it("renders ShoppingCart div", () => 
        expect(
            wrapper
                .find('div.ShoppingCart')
                .length
        ).toBe(1)
    )

    // Did the header for the main div render
    it("renders header", () => 
        expect(
            wrapper
                .find('h1')
                .length
        ).toBe(1)
    )

    // Did the shopping cart cards render
    it("renders shoppingCartCards", () => 
        expect(
            wrapper
                .find('div.shoppingCartCards')
                .length
        ).toBe(1)
    )
})