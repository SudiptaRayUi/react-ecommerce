import React, { useState } from 'react'
import { IoCloudUploadOutline } from "react-icons/io5";
import { FaCircleExclamation } from "react-icons/fa6";
import { Form } from "react-bootstrap";

const AddCategory = () => {

  const [imgFile, setImgFile] = useState();

const handleUploadImg = (e) => {
  console.log(e.target.files);
  setImgFile(URL.createObjectURL(e.target.files[0]));
}

  return (
    <>
      <div className='content'>
        <div className='container-fluid'>
          <Form>
          <div className='panel_contentbox'>
                      <h5 className='box_title'>Add Category</h5>
                      <div className='panel_group'>
                        <div className='row'>
                          
                          <div className='col-lg-12 col-md-12 col-sm-12'>
                            <div className="mb-3">
                              <label className="form-label">Category Name (English)</label>
                              <input type="text" className="form-control" id="cateName" placeholder='Category Name' />
                            </div>
                          </div>
                          <div className='col-lg-12 col-md-12 col-sm-12'>
                            <div className="mb-3">
                              <label className="form-label">Slug (If you leave it empty, it will be generated automatically.)</label>
                              <input type="text" className="form-control" id="" placeholder='Slug' />
                            </div>
                          </div>
                          <div className='col-lg-12 col-md-12 col-sm-12'>
                            <div className="mb-3">
                              <label className="form-label">Title (Meta Tag)</label>
                              <input type="text" className="form-control" id="" placeholder='Title (Meta Tag)' />
                            </div>
                          </div>
                          <div className='col-lg-12 col-md-12 col-sm-12'>
                            <div className="mb-3">
                              <label className="form-label">Description (Meta Tag)</label>
                              <input type="text" className="form-control" id="" placeholder='Description (Meta Tag)' />
                            </div>
                          </div>
                          <div className='col-lg-12 col-md-12 col-sm-12'>
                            <div className="mb-3">
                              <label className="form-label">Keywords (Meta Tag)</label>
                              <input type="text" className="form-control" id="" placeholder='Keywords (Meta Tag)' />
                            </div>
                          </div>
                          <div className='col-lg-12 col-md-12 col-sm-12'>
                            <div className="mb-3">
                              <label className="form-label">Order</label>
                              <input type="number" className="form-control" id="" placeholder='Order' />
                            </div>
                          </div>
                        </div>

                        <div className='row'>
                          <div className='col-lg-12 col-md-12 col-sm-12'>
                            <h6 className='panel_title'>Parent Category</h6>
                            <div className="mb-3">
                            <select className="form-select" aria-label="Default select example">
                              <option selected>Select Category</option>
                              <option value="1">Category One</option>
                              <option value="2">Category Two</option>
                              <option value="3">Category Three</option>
                            </select>
                            </div>
                            <div className="mb-3">
                            <select className="form-select" aria-label="Default select example">
                              <option selected>None</option>
                              <option value="1">Sub Category One</option>
                              <option value="2">Sub Category Two</option>
                              <option value="3">Sub Category Three</option>
                            </select>
                            </div>
                            <div className="mb-3">
                            <select className="form-select" aria-label="Default select example">
                              <option selected>None</option>
                              <option value="1">Sub sub Category One</option>
                              <option value="2">Sub sub Category Two</option>
                              <option value="3">Sub sub Category Three</option>
                            </select>
                            </div>
                          </div>
                        </div>

                        <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12'>
                          <div className="mb-3">
                            <div className='row'>
                              <div className='col-sm-4 col-xs-12'><label>Visibility</label></div>
                              <div className='col-sm-4 col-xs-12'><Form.Check type="radio" label="Show" name="visibility_radio" id="" checked /></div>
                              <div className='col-sm-4 col-xs-12'><Form.Check type="radio" label="Hide" name="visibility_radio" id="" /></div>
                            </div>
                          </div>
                          <div className="mb-3">
                            <div className='row'>
                              <div className='col-sm-4 col-xs-12'><label>Show on Main Menu</label></div>
                              <div className='col-sm-4 col-xs-12'><Form.Check type="radio" label="Show" name="main_menu_radio" id="" checked /></div>
                              <div className='col-sm-4 col-xs-12'><Form.Check type="radio" label="Hide" name="main_menu_radio" id="" /></div>
                            </div>
                          </div>
                          <div className="mb-5">
                            <div className='row'>
                              <div className='col-sm-4 col-xs-12'><label>Show Image on Main Menu</label></div>
                              <div className='col-sm-4 col-xs-12'><Form.Check type="radio" label="Show" name="show_image_radio" id="" /></div>
                              <div className='col-sm-4 col-xs-12'><Form.Check type="radio" label="Hide" name="show_image_radio" id="" checked /></div>
                            </div>
                          </div>
                        </div>
                        <div className='col-lg-12 col-md-12 col-sm-12'>
                        <div className="mb-3">
                              <label className="form-label w-100">Image</label>
                              <div className='add_catimgbtn'><span>Upload Image</span><input type="file" className="form-control" id="" placeholder='Image' onChange={handleUploadImg} /></div>
                              <div className='add_cat_imgbox'><img src={imgFile} /></div>
                            </div>
                        </div>
                        </div>

                        <div className='row'>
                          <div className='col-lg-12 col-md-12 col-sm-12'>
                            <div className='btn_groupbox btn_right mt-5'><button className='btn btn-primary btn1'>Add Category</button></div>
                          </div>
                        </div>
                      </div>
          </div>
          </Form>
        </div>
      </div>
    </>
  )
}

export default AddCategory
