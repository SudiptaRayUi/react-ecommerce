import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router';
import { TiPlus } from "react-icons/ti";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

const Categories = () => {
  return (
    <>
      <div className='content'>
        <div className='container-fluid'>
        <div className='panel_contentbox'>
            <div className='titleBox'>
              <h5 className='box_title'> Categories </h5>
              <Link className='btn btn-primary btn1' to="/admin/add-category"><TiPlus /> Add Category</Link>
            </div>
            <div className='panel_group'>

              <div className='category_panel_base'>
                <div className='category_panel_group'>
                <div className='panel panel_default category_item'>
                  <div className='panel_heading'>
                    <div className='panel_leftpt'><IoMdArrowDropright /> Featured</div>
                    <div className='panel_rightpt'>
                      <label class="label bg-teal">Featured</label>
                      <label class="label bg-danger">Hidden</label>
                      <div className='group__btn'>
                        <Link className='btn btn-sm'>Edit</Link>
                        <Link className='btn btn-sm'><RiDeleteBin6Line /></Link>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                <div className='category_panel_group'>
                <div className='panel panel_default category_item'>
                  <div className='panel_heading'>
                    <div className='panel_leftpt'><IoMdArrowDropright /><IoMdArrowDropdown /> Skincare</div>
                    <div className='panel_rightpt'>
                      <label class="label bg-warning">Main Menu</label>
                      <label class="label bg-olive">Visible</label>
                      <div className='group__btn'>
                        <Link className='btn btn-sm'>Edit</Link>
                        <Link className='btn btn-sm'><RiDeleteBin6Line /></Link>
                      </div>
                    </div>
                  </div>
                  <div className='panel-collapse collapse'>
                    <div className='panel_body nested_sortable'>
                    <div className='category_panel_group'>
                      <div className='panel panel_default category_item'>
                        <div className='panel_heading'>
                          <div className='panel_leftpt'><IoMdArrowDropright /> Face Wash</div>
                          <div className='panel_rightpt'>
                            <label class="label bg-warning">Main Menu</label>
                            <label class="label bg-olive">Visible</label>
                            <div className='group__btn'>
                              <Link className='btn btn-sm'>Edit</Link>
                              <Link className='btn btn-sm'><RiDeleteBin6Line /></Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='category_panel_group'>
                      <div className='panel panel_default category_item'>
                        <div className='panel_heading'>
                          <div className='panel_leftpt'><IoMdArrowDropright /> Face Moisturizer</div>
                          <div className='panel_rightpt'>
                            <label class="label bg-warning">Main Menu</label>
                            <label class="label bg-olive">Visible</label>
                            <div className='group__btn'>
                              <Link className='btn btn-sm'>Edit</Link>
                              <Link className='btn btn-sm'><RiDeleteBin6Line /></Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
                </div>  
                <div className='category_panel_group'>
                <div className='panel panel_default category_item'>
                  <div className='panel_heading'>
                    <div className='panel_leftpt'><IoMdArrowDropright /> Shop By Category</div>
                    <div className='panel_rightpt'>
                      <label class="label bg-warning">Main Menu</label>
                      <label class="label bg-olive">Visible</label>
                      <div className='group__btn'>
                        <Link className='btn btn-sm'>Edit</Link>
                        <Link className='btn btn-sm'><RiDeleteBin6Line /></Link>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Categories
