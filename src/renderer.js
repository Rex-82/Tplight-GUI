/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */

const switchOnOff = document.getElementById("switchOnOff");
// console.log(switchOnOff);

const cb = document.querySelector("#switchOnOff");
// console.log("was: ", cb.checked);

document.querySelector("#switchOnOff").addEventListener("click", async () => {
  // console.log("is: ", cb.checked);

  const status = await window.TPLINK.TPLightStatus();
  const onoff = status.light_state.on_off;
  // console.log("status1: ",status.light_state.on_off)
  if (cb.checked) {
    if (!onoff) {
      await switchLightOn(status.light_state.brightness);
      cb.checked = true;
    } else cb.checked = false;
  } else {
    if (onoff) {
      await switchLightOff();
      cb.checked = false;
    } else cb.checked = true;
  }
});

lightStatus();
deviceInfo();

async function deviceInfo() {
  const info = await window.TPLINK.TPLightStatus();
  document.querySelector("#infoTabIP").innerHTML = window.TPLINK.GetInfo();
  document.querySelector("#infoTabModel").innerHTML = info.model;
  // document.querySelector("#infoTabDeviceId").innerHTML = info.deviceId;
}

async function lightStatus() {
  const status = await window.TPLINK.TPLightStatus();
  const brigthness =
    status.light_state.brightness == undefined
      ? "off"
      : status.light_state.brightness;
  // console.log(brigthness);

  document.querySelector("#SliderValue").innerHTML = brigthness;
  document.querySelector("#switchSlider").value = brigthness;
  if (status.light_state.on_off == 1) {
    // console.log("ON");
    document.querySelector("#switchOnOff").checked = true;
    //add timer so user cant spam on-off
  } else {
    // console.log("OFF");
    document.querySelector("#switchOnOff").checked = false;
  }
}

document
  .querySelector("#switchSlider")
  .addEventListener("input", async (event) => {
    const SliderValue = event.target.value;
    document.querySelector("#SliderValue").innerHTML = SliderValue;

    if ((done = await window.TPLINK.TPLightStatus())) {
      brightness = parseInt(document.querySelector("#SliderValue").innerHTML);
      // console.log(brightness);
      window.TPLINK.TPLightOn(brightness);
      // console.log("state-in-slider: ", done);
      if (!cb.checked) {
        cb.checked = true;
      }
    }
  });

document.querySelector("#switchSlider").addEventListener("change", async () => {
  const done = await window.TPLINK.TPLightStatus();
  brightness = parseInt(document.querySelector("#SliderValue").innerHTML);
  // console.log(brightness);
  if (done) window.TPLINK.TPLightOn(brightness);
  // console.log("state-in-slider: ", done);
  if (!cb.checked) {
    cb.checked = true;
  }
});

document.querySelector("#statusButton").addEventListener("click", async () => {
  const status = await window.TPLINK.TPLightStatus();
  const brigthness = status.light_state.brightness;
  // console.log(brigthness);
  document.querySelector("#switchSlider").value = brigthness;
});
function switchLightOff() {
  window.TPLINK.TPLightOff();
  // console.log("light off");
}

function switchLightOn() {
  window.TPLINK.TPLightOn();
  // console.log("light on");
}

document.querySelector("#infoTabButton").addEventListener("click", () => {
  document.querySelector("#openedArrow").classList.toggle("hidden");
  document.querySelector("#closedArrow").classList.toggle("hidden");
  document.querySelector("#infoTab").classList.toggle("hidden");
});
