const fs = require("fs");
const pdfParse = require("pdf-parse");
const path = require("path");

exports.entries_list = function (req, res) {
  res.send("<h1>Not yet implemented: show a list of guest book entries.</h1>");
  db.getAllEntries();
};

exports.landing_page = function (req, res) {
  res.render("index");
};
exports.display_worksheets = function (req, res) {
  const files = fs.readdirSync("./public/pdfs/activities").map((name) => {
    return {
      name: path.basename(name, ".pdf"),
      url: `/pdfs/activities/${name}`,
    };
  });
  res.render("worksheets", {
    files: files,
  });
};
exports.display_written = function (req, res) {
  res.render("written");
};
exports.display_dances = function (req, res) {
  res.render("dance");
};
exports.display_animate = function (req, res) {
  res.render("animate");
};
exports.display_code = function (req, res) {
  const files = fs.readdirSync("./public/pdfs/code").map((name) => {
    return {
      name: path.basename(name, ".pdf"),
      url: `/pdfs/code/${name}`,
    };
  });
  const exten = fs.readdirSync("./public/pdfs/exten").map((name) => {
    return {
      name: path.basename(name, ".pdf"),
      url: `/pdfs/exten/${name}`,
    };
  });
  console.log(files);
  console.log(exten);
  res.render("code", {
    files: files,
    exten: exten,
  });
};
exports.display_video = function (req, res) {
  res.render("video");
};
exports.display_diagrams = function (req, res) {
  res.render("diagrams");
};
exports.display_about = function (req, res) {
  res.render("about");
};
exports.display_pilling = function (req, res) {
  var data = fs.readFileSync("./public/pdfs/diagrams.pdf");
  res.contentType("application/pdf");
  res.send(data);
};
exports.display_about = function (req, res) {
  res.render("about");
};
exports.display_contact = function (req, res) {
    res.render("contact");
  };

exports.logout = function (req, res) {
  req.logout();
  res.redirect("/");
};
