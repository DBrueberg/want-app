// Devin Brueberg
// CSC435 Adv Web App Development
// Want Application - Invoice.js
// April 9, 2021
// Last Edited (Initials, Date, Edits):
// DAB, 4/10/2021, Added in react-redux connect 
//  storage and created the general Invoice layout.
//  Added stylesheet.

// Using React library in order to build components 
// for the app and importing needed components
import {connect} from 'react-redux';
import {newInvoice, clearInvoices} from '../actions';
import {useEffect} from 'react';
import '../stylesheet/Invoice.css';

/**
 * The Invoice component will display an invoice of the current 
 * purchase. It will use React-Redux connect linked to Provider 
 * in order to hold invoice state
 * 
 * @param {*} props 
 * @returns 
 */
function Invoice(props) {
    // Using deconstruction to get the Redux state and actions from 
    // props
    const {invoices, user, onNewInvoice, onClearInvoices} = props;


    // This is the default company info that will be used to 
    // create the invoice
    const companyInfo = {
        name: "Want-App",
        address: "Fake St. NW",
        phone: "111-111-1111",
        email: "want-app@google.com",
        website: "https://want-app.herokuapp.com/"
    };


    // Same as componentWillUnmount(). This will clear the invoice
    // when the Invoice component is closed
    // ****** IF INVOICES NEED TO BE SAVED ALTER HERE ********
    // **** ALTERED TO NOT CLEAR INVOICES BUT USE THE LAST INVOICE 
    // PRODUCED. LEFT IN CODE BECAUSE PLANNING A CART CLEAR*******
    // useEffect(() => {
    //     return () => {
    //         onClearInvoices()
    //     }
    // }, []);


    // Temp table style to see the table border
    let tableStyle = {
        "border" : "2px solid black"
    };

    const isInvoice = invoices.length > 0;

    // Initializing a const to hold the highest index 
    // invoice in invoices to display
    const invoice = isInvoice ? 
        invoices[invoices.length - 1] : 
        invoices;

    const date = new Date(invoice.date);

   
    // Initializing the invoiceDate to display the mm/dd/yyyy 
    // date of the invoice. If there is no date, "no date" is 
    // displayed
    const invoiceDate = (isInvoice) ? 
        `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}` :
        "no date"

    
    // Initializing a invoiceItems that will display 
    // the invoiceItems in the invoice in a table row only 
    // if there are invoice items. Otherwise null will be returned
    const invoiceItems = isInvoice ?
        invoice.items.map((item, key) => 
        <tr key={key} className="invoiceItems" style={tableStyle}>
            <td>
                {item.name}
            </td>
            <td>
                {item.price}
            </td>
            <td>
                {item.quantity}
            </td>
            <td>
                {item.price}
            </td>
        </tr> 
    ) : null;


    // Initializing the invoiceTable that will 
    // display the completed invoice table for the 
    // invoice
    const invoiceTable = (
        <table className="invoiceTable">
            <thead>
                {/* The table headers */}
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Price
                    </th>
                    <th>
                        Quantity
                    </th>
                    <th>
                        Total
                    </th>
                </tr>
            </thead>

            <tbody>
                {/* The generated invoice items in table rows */}
                {invoiceItems}
            </tbody>

        </table>
    )


    // Initializing the invoiceInfo that will display both 
    // company and purchaser personal information for the 
    // invoice
    const invoiceInfo = (
        <ul className="invoiceInfo">
                <li className="invoiceInfoTopLeft">
                    <span className="invoiceBold">Invoice Number</span>
                    <ul>
                        <li>
                            {invoice.id}   
                        </li>
                    </ul>
                </li>
                <li className="invoiceInfoTopRight">
                    <span className="invoiceBold">Date</span>
                    <ul>
                        <li>
                            {invoiceDate}
                        </li>
                    </ul>
                </li>
                <li className="invoiceInfoBottomLeft">
                    <span className="invoiceBold">Customer Information</span>
                    <ul>
                        <li>
                            {user.userId}
                        </li>
                        <li>
                            {`${user.firstName} ${user.lastName}`}
                        </li>
                    </ul>
                </li>
                <li className="invoiceInfoBottomRight">
                    <span className="invoiceBold">Business Information</span>
                    <ul>
                        <li>
                            {companyInfo.name}
                        </li>
                        <li>
                            {companyInfo.address} 
                        </li>
                        <li>
                            {companyInfo.phone}  
                        </li>
                        <li>
                            {companyInfo.email} 
                        </li>
                        <li>
                            <a href={companyInfo.website} target="_blank">
                                {companyInfo.website}
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
    )

    // The displayInvoice element will display an invoice if there is 
    // one or "No Invoices if there is not"
    const displayInvoice = isInvoice ?
        <div>
            <h1>
                Invoice
            </h1>

            <div className="invoiceFlexContainer">
                    {/* Displaying the business and user specific 
                    invoice information */}
                    {invoiceInfo}
                <div className="invoice">

                    {/* Displaying the table with all of the invoice 
                    data in a table format */}
                    {invoiceTable}
                    
                    {/* Displaying the total amount in $ of the purchase */}
                    <span className="invoiceTotal">
                        Total: ${parseFloat(invoice.total).toFixed(2)} 
                    </span>
                </div>    
            </div>
            

            {/* This order was purchased in full so letting the user know */}
            <h2>
                Your order has been paid in full
            </h2>
        </div> :
        <h1>
            No Invoices
        </h1>
    
    return (
        <div className="Invoice">

            {/* Will display an invoice if there is one */}
            {displayInvoice}

        </div>

    )
}

// Mapping the redux store states to props
const mapStateToProps = state => 
    ({
        invoices: [...state.invoices],
        user: {...state.user}
    })

// Mapping the state actions to props
const mapDispatchToProps = dispatch => 
    ({
        // This method will add a new invoice to invoices
        onNewInvoice(total, items) {
            dispatch(newInvoice(total, items))
        }, 
        // This method will clear all invoices in state
        onClearInvoices() {
            dispatch(clearInvoices())
        }
    })

// Exporting the connect wrapped Invoice component
export default connect(mapStateToProps, mapDispatchToProps)(Invoice);