const errorHandler = require('../helpers/errorHandler.helper');
const filter = require('../helpers/filter.helper');
const {
  //mengimport data dari models
  getListCinema,
  readingCinema,
  creatingCinema,
  updatingCinema,
  deletingCinema,
  countAllCinema,
} = require("../models/cinema.model");

//menjalankan model
exports.readAllCinema = (req, res) => {
  const sortable = ['name', 'createdAll', 'updatedAt']
  filter(req.query, sortable, countAllCinema,res,(filter, pageInfo)=>{
    getListCinema(filter ,(err, datas) => {
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

exports.getCinema = (req, res) => {
  readingCinema(req.param('id'), (err, result) => {
    if (err) {
      // console.log(err)
      return errorHandler(err, res)
      }
    return res.status(200).json({
      success: true,
      message: "Success Get Cinema",
      data: result.rows
    })
  })
}

exports.createCinema = (req, res) => {
  creatingCinema(req.body ,(err, result) => {
    if (err) {
    // console.log(err)
    return errorHandler(err, res) 
    }
    return res.status(200).json({
      success: true,
      message: "Success Create Cinema",
      results: result.rows[0],
    });
  });
};

exports.updateCinema = (req, res) => {
  updatingCinema(req.body, req.param('id'), (err, result) => {
    if(err){
      // console.log(err)
      return errorHandler(err ,res)
    }
    return res.status(200).json({
      success : true,
      message : "Success Update Cinema",
      results: result.rows[0]
    })
  });
};

exports.deleteCinema = (req, res) => {
  deletingCinema(req.param("id"), (err, result)=>{
    if(err){
      // console.log(result)
      return errorHandler(err , res)
    }
    return res.status(200).json({
      success : true,
      message : "Delete Cinema Success",
      results : result.rows[0] 
    })
  });
};
