import Vue from 'vue'

Vue.prototype.$isFromIpad = () => {
  if(process.browser){
    // iPadOS対応iPad判定
    const isFromIpad =
      navigator.platform == "iPad" ||
      (navigator.platform == "MacIntel" &&
      navigator.userAgent.indexOf("Safari") != -1 &&
      navigator.userAgent.indexOf("Chrome") == -1 &&
      navigator.standalone !== undefined)
    return isFromIpad
  }
}
