import { readdirSync, renameSync, unlinkSync } from "fs";
import { userInfo } from "os";
import { handleFolderCreation } from "./handleFolder";
const jlcd = userInfo().username;
handleFolderCreation();
var desktop = readdirSync("/Users/" + jlcd + "/Desktop");
desktop = desktop.filter((file) => {
  if (file.match(/Screenshot/)) return file;
});
desktop.forEach((file) => {
  const fileArr = file.split(" ");
  const dateNow = new Date();
  const fileDate = new Date(fileArr[1]);
  if (dateNow.getDay() > fileDate.getDay()) {
    renameSync(
      "/Users/" + jlcd + "/Desktop/" + file,
      "/Users/" + jlcd + "/Documents/ScreenshotArchive/" + file
    );
  }
});

var archive = readdirSync("/Users/" + jlcd + "/Documents/ScreenshotArchive");
archive = archive.filter((file) => {
  if (file.match(/Screenshot/)) return file;
});
archive.forEach((file) => {
  const fileArr = file.split(" ");
  const dateNow = new Date();
  const fileDate = new Date(fileArr[1]);
  if (dateNow.getMonth() > fileDate.getMonth()) {
    unlinkSync("/Users/" + jlcd + "/Documents/ScreenshotArchive/" + file);
  }
});
