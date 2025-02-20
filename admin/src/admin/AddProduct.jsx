import React from 'react'
import { IoCloudUploadOutline } from "react-icons/io5";
import { FaCircleExclamation } from "react-icons/fa6";

const AddProduct = () => {
  return (
    <>
      <div className='content'>
        <div className='container-fluid'>

          <div className='panel_contentbox'>
            <h5 className='box_title'>Add Product</h5>
            <div className='panel_group'>
              <div className='row'>
                <div className='col-lg-12 col-md-12 col-sm-12'>
                  <div className='image_upload_basebox'>
                    <div className='image_uploadbox'>
                    <div className='upload_imgwrap_base'>
                      <div className='upload_imgwrap'><span className='closebtn'>X</span><img src='' alt='img' /></div>
                      <div className='upload_imgwrap'><span className='closebtn'>X</span><img src='' alt='img' /></div>
                      <div className='upload_imgwrap'><span className='closebtn'>X</span><img src='' alt='img' /></div>
                      <div className='upload_imgwrap'><span className='closebtn'>X</span><img src='' alt='img' /></div>
                      <div className='upload_imgwrap'><span className='closebtn'>X</span><img src='' alt='img' /></div>
                      <div className='upload_imgwrap'><span className='closebtn'>X</span><img src='' alt='img' /></div>
                      <div className='upload_imgwrap'><span className='closebtn'>X</span><img src='' alt='img' /></div>
                      <div className='upload_imgwrap'><span className='closebtn'>X</span><img src='' alt='img' /></div>
                    </div>
                    <div className='center_uptxtbox'>
                    <IoCloudUploadOutline className='ic' />
                      <p>Drag and drop images here or Browse File </p>
                    </div>
                    <input type='file' className='hidden_input' />
                    </div>
                    <p className='notetxt'><FaCircleExclamation /> Products with good and clear images are sold faster!</p>
                  </div>
                </div>
                <div className='col-lg-12 col-md-12 col-sm-12'>
                  <div className="mb-3">
                    <label className="form-label">Category</label>
                    <select className="form-select" aria-label="Default select example">
                      <option selected>Select Category</option>
                      <option value="1">Category One</option>
                      <option value="2">Category Two</option>
                      <option value="3">Category Three</option>
                    </select>
                  </div>
                </div>
                <div className='col-lg-12 col-md-12 col-sm-12'>
                  <div className="mb-3">
                    <select className="form-select" aria-label="Default select example">
                      <option selected>Select Sub Category</option>
                      <option value="1">Sub Category One</option>
                      <option value="2">Sub Category Two</option>
                      <option value="3">Sub Category Three</option>
                    </select>
                  </div>
                </div>
                <div className='col-lg-12 col-md-12 col-sm-12'>
                  <div className="mb-3">
                    <select className="form-select" aria-label="Default select example">
                      <option selected>Select Sub sub Category</option>
                      <option value="1">Sub sub Category One</option>
                      <option value="2">Sub sub Category Two</option>
                      <option value="3">Sub sub Category Three</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-lg-12 col-md-12 col-sm-12'>
                  <h6 className='panel_title'>Details</h6>
                  <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" placeholder='Title' />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" id="description" rows="3" placeholder='Description' />
                  </div>
                </div>
              </div>
              
              <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                <div className="mb-3">
                  <label className="form-label">Stock</label>
                  <input type="number" className="form-control" id="" placeholder='Stock' />
                  </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                <div className="mb-3">
                  <label className="form-label">SKU (Product Code)</label>
                  <input type="text" className="form-control" id="" placeholder='SKU Code' />
                  </div>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-12'>
                <div className="mb-3">
                  <label className="form-label">Product Price</label>
                  <input type="number" className="form-control" id="" placeholder='Price' />
                  </div>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-12'>
                <div className="mb-3">
                  <label className="form-label">Discount Rate %</label>
                  <input type="number" className="form-control" id="" placeholder='5' />
                  </div>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-12'>
                <div className="mb-3">
                <label className="form-label">No Discount </label>
                  <div className="mb-3 form-check">
                    <input type="checkbox" id='checkDiscount' className="form-check-input" />
                    <label className="form-check-label" for="checkDiscount">No Discount</label>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                <div className="mb-3">
                  <p> Calculated Price (₹):   342 </p>
                  <p> You Will Earn (₹): 342 + Shipping Cost (Commission Rate:  0%) </p>
                </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-lg-12 col-md-12 col-sm-12'>
                  <h6 className='panel_title'>SEO</h6>
                  <div className="mb-3">
                    <label className="form-label">SEO Title</label>
                    <input type="text" className="form-control" id="seoTitle" placeholder='Seo Title' />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">SEO Description</label>
                    <input type="text" className="form-control" id="seoDescription" placeholder='Seo Description' />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">SEO Keywords</label>
                    <input type="text" className="form-control" id="seoKeywords" placeholder='Keywords (E.g. book, new, pencil)' />
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-lg-12 col-md-12 col-sm-12'>
                  <div className='btn_groupbox btn_right mt-5'><button className='btn btn-primary btn1'>Save Product</button></div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default AddProduct
