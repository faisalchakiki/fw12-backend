const errorHandler = require('../helpers/errorHandler.helper')
const {
  //mengimport data dari models
  getListCastMovie,
  readingCastMovie,
  creatingCastMovie,
  updatingCastMovie,
  deletingCastMovie,
} = require("../models/castMovie.model");

//menjalankan model
exports.readAllCastMovie = (req, res) => {
  getListCastMovie((err, datas) => {
    if(err){
      // console./log(err)
      return errorHandler(err, res)
    }
    return res.status(200).json({
      success: true,
      message: "Success Fetch List",
      data: datas.rows,
    });
  });
};

exports.getCastMovie = (req, res) => {
  readingCastMovie(req.param('id'), (err, result) => {
    if (err) {
      // console.log(err)
      return errorHandler(err, res)
      }
    return res.status(200).json({
      success: true,
      message: "Success Get CastMovie",
      data: result.rows
    })
  })
}

exports.createCastMovie = (req, res) => {
  creatingCastMovie(req.body ,(err, result) => {
    if (err) {
    // console.log(err)
    return errorHandler(err, res) 
    }
    return res.status(200).json({
      success: true,
      message: "Success Create CastMovie",
      results: result.rows[0],
    });
  });
};

exports.updateCastMovie = (req, res) => {
  updatingCastMovie(req.body, req.param('id'), (err, result) => {
    if(err){
      // console.log(err)
      return errorHandler(err ,res)
    }
    return res.status(200).json({
      success : true,
      message : "Success Update CastMovie",
      results: result.rows[0]
    })
  });
};

exports.deleteCastMovie = (req, res) => {
  deletingCastMovie(req.param("id"), (err, result)=>{
    if(err){
      // console.log(result)
      return errorHandler(err , res)
    }
    return res.status(200).json({
      success : true,
      message : "Delete CastMovie Success",
      results : result.rows[0] 
    })
  });
};
