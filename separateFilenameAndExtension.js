const path = require('path');

const separateFilenameAndExtension = (filepath) => {
  const filenameWithExtension = path.basename(filepath); // Get the filename with extension
  const extension = path.extname(filepath); // Get the extension including the dot
  const filename = filenameWithExtension.slice(0, -extension.length); // Remove the extension from the filename

  return {
    filename,
    extension,
  };
};

module.exports = { separateFilenameAndExtension };
