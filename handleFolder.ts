import { existsSync, mkdirSync } from "fs";
import { userInfo } from "os";

export function handleFolderCreation() {
  const jlcd = userInfo().username;
  if (!existsSync("/Users/" + jlcd + "/Documents/ScreenshotArchive")) {
    mkdirSync("/Users/" + jlcd + "/Documents/ScreenshotArchive");
  }
}
