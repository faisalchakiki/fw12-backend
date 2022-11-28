const errorHandler = require("../helpers/errorHandler.helper");
const filter = require("../helpers/filter.helper");
const {
  //mengimport data dari models
  getListSubscriber,
  readingSubscriber,
  creatingSubscriber,
  updatingSubscriber,
  deletingSubscriber,
  countAllSubscriber,
} = require("../models/subscriber.model");

//menjalankan model
exports.readAllSubscriber = (req, res) => {
  const sortable = ['email', 'createdAll', 'updatedAt']
  filter(req.query, sortable, countAllSubscriber,res,(filter, pageInfo)=>{
    getListSubscriber(filter,(err, datas) => {
      if (err) {
        // console./log(err)
        return errorHandler(err, res);
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

exports.getSubscriber = (req, res) => {
  readingSubscriber(req.param("id"), (err, result) => {
    if (err) {
      // console.log(err)
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Success Get Subscriber",
      data: result.rows,
    });
  });
};

exports.createSubscriber = (req, res) => {
  creatingSubscriber(req.body, (err, result) => {
    if (err) {
      // console.log(err)
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Success Create Subscriber",
      results: result.rows[0],
    });
  });
};

exports.updateSubscriber = (req, res) => {
  updatingSubscriber(req.body, req.param("id"), (err, result) => {
    if (err) {
      // console.log(err)
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Success Update Subscriber",
      results: result.rows[0],
    });
  });
};

exports.deleteSubscriber = (req, res) => {
  deletingSubscriber(req.param("id"), (err, result) => {
    if (err) {
      // console.log(result)
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Delete Subscriber Success",
      results: result.rows[0],
    });
  });
};
