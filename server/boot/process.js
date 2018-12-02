'use strict';

const fs = require('fs');
const path = require('path');
const config = require('../config.json');

module.exports = function(app) {
  console.log('Processing Queue...');

  let queueDir = config.queue_directory;
  let fileDir = config.file_directory;

  fs.readdir(queueDir, (err, files) => {
    if (err) {
      console.log(err);
      return false;
    }
    // Read extensions
    files.forEach(filename => {
      let ext = filename.split('.').pop();
      let name = filename.split('.')[0];

      if (config.accepted_extensions.includes(ext)) {
        // Do the thing
        let data = {
          'name': name,
          'path': path.join(fileDir, filename),
          'caption': filename,
        };

        app.models.Image.create(data, (err, record) => {
          console.log(record);
          let srcFilepath = path.join(queueDir, filename);
          let destFilepath =
            path.join('client', fileDir, record.id + '.' + ext);

          fs.rename(srcFilepath, destFilepath, (err) => {
            if (err) {
              return false;
            }
          });
        });
      } else {
        console.log('Unaccepted File:', filename);
      }
    });
  });
};
