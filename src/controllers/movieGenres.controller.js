const errorHandler = require('../helpers/errorHandler.helper')
const {
  //mengimport data dari models
  getListMovieGenre,
  readingMovieGenre,
  creatingMovieGenre,
  updatingMovieGenre,
  deletingMovieGenre,
} = require("../models/movieGenre.model");

//menjalankan model
exports.readAllMovieGenre = (req, res) => {
  getListMovieGenre((err, datas) => {
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

exports.getMovieGenre = (req, res) => {
  readingMovieGenre(req.param('id'), (err, result) => {
    if (err) {
      // console.log(err)
      return errorHandler(err, res)
      }
    return res.status(200).json({
      success: true,
      message: "Success Get MovieGenre",
      data: result.rows
    })
  })
}

exports.createMovieGenre = (req, res) => {
  creatingMovieGenre(req.body ,(err, result) => {
    if (err) {
    // console.log(err)
    return errorHandler(err, res) 
    }
    return res.status(200).json({
      success: true,
      message: "Success Create MovieGenre",
      results: result.rows[0],
    });
  });
};

exports.updateMovieGenre = (req, res) => {
  updatingMovieGenre(req.body, req.param('id'), (err, result) => {
    if(err){
      // console.log(err)
      return errorHandler(err ,res)
    }
    return res.status(200).json({
      success : true,
      message : "Success Update MovieGenre",
      results: result.rows[0]
    })
  });
};

exports.deleteMovieGenre = (req, res) => {
  deletingMovieGenre(req.param("id"), (err, result)=>{
    if(err){
      // console.log(result)
      return errorHandler(err , res)
    }
    return res.status(200).json({
      success : true,
      message : "Delete MovieGenre Success",
      results : result.rows[0] 
    })
  });
};
