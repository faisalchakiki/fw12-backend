const errorHandler = require('../helpers/errorHandler.helper');
const filter = require('../helpers/filter.helper');
const {
  //mengimport data dari models
  getListMovie,
  readingMovie,
  creatingMovie,
  updatingMovie,
  deletingMovie,
  countAllMovie,
} = require("../models/movie.model");

//menjalankan model
exports.readAllMovies = (req, res) => {
  const sortable = ['title', 'createdAll', 'updatedAt']
  console.log(req.userData)
  filter(req.query, sortable, countAllMovie,res,(filter, pageInfo)=>{
    getListMovie(filter,(err, datas) => {
      if(err){
        // console./log(err)
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

exports.getMovie = (req, res) => {
  readingMovie(req.param('id'), (err, result) => {
    if (err) {
      // console.log(err)
      return errorHandler(err, res)
      }
    return res.status(200).json({
      success: true,
      message: "Success Get Movie",
      data: result.rows
    })
  })
}

exports.createMovie = (req, res) => {
  creatingMovie(req.body ,(err, result) => {
    if (err) {
    // console.log(err)
    return errorHandler(err, res) 
    }
    return res.status(200).json({
      success: true,
      message: "Success Create Movie",
      results: result.rows[0],
    });
  });
};

exports.updateMovie = (req, res) => {
  updatingMovie(req.body, req.param('id'), (err, result) => {
    if(err){
      // console.log(err)
      return errorHandler(err ,res)
    }
    return res.status(200).json({
      success : true,
      message : "Success Update Movie",
      results: result.rows[0]
    })
  });
};

exports.deleteMovie = (req, res) => {
  deletingMovie(req.param("id"), (err, result)=>{
    if(err){
      // console.log(result)
      return errorHandler(err , res)
    }
    return res.status(200).json({
      success : true,
      message : "Delete Movie Success",
      results : result.rows[0] 
    })
  });
};
