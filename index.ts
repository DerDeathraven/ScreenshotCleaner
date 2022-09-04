import { readdirSync, renameSync, unlinkSync } from "fs";
import { userInfo } from "os";
import { handleFolderCreation } from "./handleFolder";
import { getPositivNumber } from "./helper";
const jlcd = userInfo().username;
handleFolderCreation();
var desktop = readdirSync("/Users/" + jlcd + "/Desktop");
desktop = desktop.filter((file) => {
  if (file.match(/Screenshot/)) return file;
});
console.log(`Found ${desktop.length} files on the Desktop`);

desktop.forEach((file) => {
  const fileArr = file.split(" ");
  const dateNow = new Date();
  const fileDate = new Date(fileArr[1]);
  if (
    dateNow.getDay() > fileDate.getDay() ||
    dateNow.getMonth() > fileDate.getMonth()
  ) {
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
console.log(
  `Found ${getPositivNumber(
    archive.length - desktop.length
  )} files in the Archive`
);
archive.forEach((file) => {
  const fileArr = file.split(" ");
  const dateNow = new Date();
  const fileDate = new Date(fileArr[1]);
  if (dateNow.getMonth() > fileDate.getMonth()) {
    unlinkSync("/Users/" + jlcd + "/Documents/ScreenshotArchive/" + file);
  }
});
