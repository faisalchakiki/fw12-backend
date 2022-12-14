const errorHandler = require('../helpers/errorHandler.helper');
const filter = require('../helpers/filter.helper');
const {
  //mengimport data dari models
  getListGenre,
  readingGenre,
  creatingGenre,
  updatingGenre,
  deletingGenre,
  countAllGenre,
} = require("../models/genre.model");

//menjalankan model

exports.readAllGenre = (req, res) => {
  const sortable = ['name', 'createdAll', 'updatedAt']
  filter(req.query, sortable, countAllGenre,res,(filter, pageInfo)=>{
    getListGenre(filter,(err, datas) => {
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

exports.getGenre = (req, res) => {
  readingGenre(req.param('id'), (err, result) => {
    if (err) {
      // console.log(err)
      return errorHandler(err, res)
      }
    return res.status(200).json({
      success: true,
      message: "Success Get Genre",
      data: result.rows
    })
  })
}

exports.createGenre = (req, res) => {
  creatingGenre(req.body ,(err, result) => {
    if (err) {
    // console.log(err)
    return errorHandler(err, res) 
    }
    return res.status(200).json({
      success: true,
      message: "Success Create Genre",
      results: result.rows[0],
    });
  });
};

exports.updateGenre = (req, res) => {
  updatingGenre(req.body, req.param('id'), (err, result) => {
    if(err){
      // console.log(err)
      return errorHandler(err ,res)
    }
    return res.status(200).json({
      success : true,
      message : "Success Update Genre",
      results: result.rows[0]
    })
  });
};

exports.deleteGenre = (req, res) => {
  deletingGenre(req.param("id"), (err, result)=>{
    if(err){
      // console.log(result)
      return errorHandler(err , res)
    }
    return res.status(200).json({
      success : true,
      message : "Delete Genre Success",
      results : result.rows[0] 
    })
  });
};
