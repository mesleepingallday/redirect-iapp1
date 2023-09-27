let devices = {
  IOS: "https://apps.apple.com/vn/app/ivirse-app/id6446141074",
  Android: "https://play.google.com/store/apps/details?id=com.ivirse.wallet",
  others: "other device",
};

let deviceType = () => {
  if (navigator.userAgent.match(/Android/i)) {
    return "Android";
  } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
    return "IOS";
  } else {
    return "others";
  }
};

window.onload = () => {
  window.location.href = devices[deviceType()];
};
