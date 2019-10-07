const download = require('image-downloader')
const fs = require('fs');

exports.saveImages = (photos) => {

  photos.forEach(function (entry) {
    console.log(entry.img_src);
    _downloadImage(entry.img_src, entry.earth_date);
  });

};

function _downloadImage(imageUri, date) {

  var imageRepoPath = './nasa_images/'+date;

  if (!fs.existsSync(imageRepoPath)) {
    fs.mkdirSync(imageRepoPath);
  }

  const options = {
    url: imageUri,
    dest: imageRepoPath
  }

  download.image(options)
    .then(({ filename, image }) => {
      console.log('Saved to', filename)
    })
    .catch((err) => console.error(err))
}
