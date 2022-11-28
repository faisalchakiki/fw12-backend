const errorHandler = require('../helpers/errorHandler.helper');
const filter = require('../helpers/filter.helper');
const {
  //mengimport data dari models
  getListCast,
  readingCast,
  creatingCast,
  updatingCast,
  deletingCast,
  countAllCast
} = require("../models/cast.model");

//menjalankan model
exports.readAllCast = (req, res) => {
  const sortable = ['name', 'createdAll', 'updatedAt']
  filter(req.query, sortable, countAllCast,res,(filter, pageInfo)=>{
    getListCast(filter , (err, datas) => {
      // console.log(filter)
      if(err){
        // console.log(err)
        return errorHandler(err, res)
      }
      return res.status(200).json({
        success: true,
        message: "Success Fetch List",
        pageInfo,
        data: datas.rows,
      });
    });
  })
};

exports.getCast = (req, res) => {
  readingCast(req.param('id'), (err, result) => {
    if (err) {
      // console.log(err)
      return errorHandler(err, res)
      }
    return res.status(200).json({
      success: true,
      message: "Success Get Cast",
      data: result.rows
    })
  })
}

exports.createCast = (req, res) => {
  creatingCast(req.body ,(err, result) => {
    if (err) {
    // console.log(err)
    return errorHandler(err, res) 
    }
    return res.status(200).json({
      success: true,
      message: "Success Create Cast",
      results: result.rows[0],
    });
  });
};

exports.updateCast = (req, res) => {
  updatingCast(req.body, req.param('id'), (err, result) => {
    if(err){
      // console.log(err)
      return errorHandler(err ,res)
    }
    return res.status(200).json({
      success : true,
      message : "Success Update Cast",
      results: result.rows[0]
    })
  });
};

exports.deleteCast = (req, res) => {
  deletingCast(req.param("id"), (err, result)=>{
    if(err){
      // console.log(result)
      return errorHandler(err , res)
    }
    return res.status(200).json({
      success : true,
      message : "Delete Cast Success",
      results : result.rows[0] 
    })
  });
};
