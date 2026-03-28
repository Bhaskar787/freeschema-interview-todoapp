import { updateAccessToken } from "mftsccs-browser";

export async function saveTolocalStorage(signinResponse) {
    let userProfile = {
      token: signinResponse?.data?.token,
      refreshToken: signinResponse?.data?.refreshtoken,
      email: signinResponse?.data?.email,
      userId: signinResponse?.data?.entity?.[0]?.userId,
      userConcept: signinResponse?.data?.userConcept,
      amcode: btoa(JSON.stringify(signinResponse?.data?.roles)),
    };
    updateAccessToken(userProfile.token);
  
    localStorage.setItem("profile", JSON.stringify(userProfile));
  
    return true;
}

export async function getLocalStorageData() {
  return new Promise((resolve) => {
    let dataFromLocalStorage = localStorage?.getItem("profile") || "";
    if (dataFromLocalStorage) {
      const profileData = JSON.parse(dataFromLocalStorage);
      resolve(profileData);
    } else {
      resolve();
    }
  });
}

export function getLocalUserId() {
  let dataFromLocalStorage = localStorage?.getItem("profile") || "";
  if (dataFromLocalStorage) {
    const profileData = JSON.parse(dataFromLocalStorage);
    return Number(profileData.userId);
  } 
  return 999;
}