exports.readMovies = (req,res) =>{
    return res.status(200).json({
        success : true,
        message : "Read Movies"
    })
}

exports.getMovie = (req,res) =>{
    return res.status(200).json({
        success : true,
        message : "Detail Movie"
    })
}

exports.createMovie = (req,res) =>{
    return res.status(200).json({
        success : true,
        message : "Create Movie Successfully"
    })
}

exports.updateMovie = (req,res) =>{
    return res.status(200).json({
        success : true,
        message : "Update Movie Successfully"
    })
}

exports.deleteMovie = (req,res) =>{
    return res.status(200).json({
        success : true,
        message : "Delete Movie Successfully"
    })
}
