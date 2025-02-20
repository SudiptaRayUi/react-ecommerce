import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { createPopper } from '@popperjs/core';

const Prodects = () => {
  return (
    <>
      <div className='content'>
        <div className='container-fluid'>
          <div className='panel_contentbox'>
            <h5 className='box_title'>Prodects page</h5>
            <div className='panel_group'>

              <div className='table-responsive'>
                <table className='table list_table'>
                  <tbody>
                    <tr>
                      <th><input type="checkbox" className="form-check-input" /></th>
                      <th>ID</th>
                      <th>Product</th>
                      <th>SKU</th>
                      <th>Product Type</th>
                      <th>Category</th>
                      <th>User</th>
                      <th>Stock</th>
                      <th>Page View</th>
                      <th>Date</th>
                      <th>Option</th>
                    </tr>
                    <tr>
                      <td><input type="checkbox" className="form-check-input" /></td>
                      <td>1326</td>
                      <td><div className='product_listview'><div className='product_imgbox'></div> <p className='product_name'>Mango</p></div></td>
                      <td>PM006</td>
                      <td>Fruit</td>
                      <td>Fruit</td>
                      <td>Won</td>
                      <td><span className='outstock instock'>In Stock (100)</span></td>
                      <td>5</td>

                      <td>08-02-2025</td>
                      <td>
                        <Dropdown>
                          <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Select an option
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#">View</Dropdown.Item>
                            <Dropdown.Item href="#">Edit</Dropdown.Item>
                            <Dropdown.Item href="#">Delete</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>

    
                        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Prodects
