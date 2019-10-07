var request = require("request");

var base_url_successful = "http://localhost:3001/download?earth_date=2015-6-3";
var base_url_unsuccessful = "http://localhost:3001/download";

var responseSuccessful = '{"Status":"successful","SavedImages":4}';
var responseUnsuccessful = '{"Status":"unsuccessful","message":"The date is null"}';

describe("download nasa images", function () {
  describe("GET /download", function () {

    it("returns status code 200", function () {
      request.get(base_url_successful, function (error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("returns successful", function () {
      request.get(base_url_successful, function (error, response, body) {
        expect(body).toBe(responseSuccessful);
        done();
      });
    });

    it("returns unsuccessful", function () {
      request.get(base_url_unsuccessful, function (error, response, body) {
        expect(body).toBe(responseUnsuccessful);
        done();
      });
    });

  });
});
