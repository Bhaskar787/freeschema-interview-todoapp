import { getLocalStorageData } from "../user/login.service";

export async function getHeadingText() {
  return "The Semantic Concept Connection System framework";
}

export async function showAlert() {
  alert("This is an alert message!");
}

export async function checkLogin() {
  const profileData = await getLocalStorageData();

  if (profileData?.token && profileData?.userId) {
    return true;
  } else {
    return false;
  }
}