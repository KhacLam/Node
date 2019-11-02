const AppError = require('./../utlis/appError');
const catchAsync = require('./../utlis/catchAsync');

exports.deleteOneDocument = Model => catchAsync(async(req, res, next) => {
    const documment = Model.findByIdAndDelete(req.params.id);

    if (!documment) return next(new AppError("No documment found with this ID", 404));

    res.status(200).json({
        status: 'success',
        message: 'Delete successfully!'
    })
})

exports.getAllDocument = Model => catchAsync(async(req, res, next) => {
    const documents = await Model.find();

    res.status(200).json({
        status: 'success',
        results: documents.length,
        data: {
            documents
        }
    });
})

exports.createOneDocument = Model => catchAsync(async(req, res, next) => {
    const newDocument = await Model.create(req.body);

    res.status(201).json({
        status: 'success',
        data: {
            newDocument
        }
    })
})