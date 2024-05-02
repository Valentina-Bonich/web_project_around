export class UserInfo {
  constructor({ profileName, profileJob }) {
    this.userName = profileName;
    this.userJob = profileJob;
  }
  getUserInfo() {
    return {
      userName: this.profileName.textContent,
      userJob: this.profileJob.textContent,
    };
  }
  setUserInfo(profileName, profileJob) {
    this.userName.textContent = profileName;
    this.userJob.textContent = profileJob;
  }
}
