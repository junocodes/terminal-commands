const fs = require("fs");

// Creates a new file.
module.exports.touch = filename => {
  fs.openSync(`./${filename}`, "w");
  console.log("file has been created.");
};

// Creates a new directory.
module.exports.mkdir = dirname => {
  fs.mkdir(`./${dirname}`, { recursive: true }, err => {
    if (err) throw err;
    console.log("directory has been created.");
  });
};

// Console logs all files within root folder.
module.exports.ls = () => {
  fs.readdir("./", (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, "");
    if (err) throw err;
    console.log(filesToString);
  });
};
