const express = require('express');
const router = express.Router();
const services = require('../core/services');
const helpers = require('../core/helpers');

/**
 * @api {get} /download Download NASA Images
 * @apiName DownloadImages
 * @apiDescription This endpoint will find all images in from NASA based on the date sent
 * @apiGroup Download
 *
 * @apiParam (query) {String} earth_date
 *
 * @apiExample {curl} Example usage:
 *   curl -X GET -H "Content-Type: application/json" http://localhost:3001/download?earth_date=2015-6-3
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "Status":"successful",
 *      "SavedImages":4
 *    }
 */

router.get('/download', (req, res) => {

  let date = req.query.earth_date;
  let imageDetails;


  if (date != null) {
    var downloadPromise = services.downloadImages(date);

    downloadPromise.then(function (result) {

      imageDetails = result;
      console.log("Initialized user details", imageDetails);

      helpers.saveImages(imageDetails.photos);

      res.status(200).send({
        Status: 'successful',
        SavedImages: imageDetails.photos.length
      });

    }, function (err) {

      console.log(err);

      res.status(500).send({
        message: err,
      });

    })
  }
  else {
    res.status(500).send({
      Status: 'unsuccessful',
      message: 'The date is null',
    });
  }

});

module.exports = router;