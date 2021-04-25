// Devin Brueberg
// CSC435 Adv Web App Development
// Want Application - shoppingCartTest.test.js
// April 25, 2021
// Last Edited (Initials, Date, Edits):

// Importing in needed modules/files
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Product from '../component/Product';

// Configuring adapater for Enzyme
configure({ adapter: new Adapter() });

// Wrapper for the <ShoppingCart /> page
const wrapper = shallow(<Product/>);

// Verifying <ShoppingCart /> components are displaying correctly
describe("<Product /> UI Component", () => {
    // Did the main div render
    it("renders Product div", () => 
        expect(
            wrapper
                .find('div.Product')
                .length
        ).toBe(1)
    )

    // Did the product image div render
    it("renders productImage", () => 
        expect(
            wrapper
                .find('div.productImage')
                .length
        ).toBe(1)
    )

    // Did the product info ul render
    it("renders productInfo ul", () => 
        expect(
            wrapper
                .find('ul.productInfo')
                .length
        ).toBe(1)
    )

    // Did the product input form render
    it("renders productInput form", () => 
        expect(
            wrapper
                .find('form.productInput')
                .length
        ).toBe(1)
    )
})