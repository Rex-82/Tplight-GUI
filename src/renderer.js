/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */

const switchOnOff = document.getElementById("switchOnOff");
console.log(switchOnOff);

const cb = document.querySelector("#switchOnOff");
console.log("was: ", cb.checked);

document.querySelector("#switchOnOff").addEventListener("click", () => {
  console.log("is: ", cb.checked);
  if (cb.checked) {
    switchLightOn();
  } else {
    switchLightOff();
  }
});

lightStatus();

async function lightStatus() {
  const status = await window.TPLINK.TPLightStatus();
  if (status.light_state.on_off == 1) {
    console.log("ON");
    document.querySelector("#switchOnOff").checked = true;
  } else {
    console.log("OFF");
    document.querySelector("#switchOnOff").checked = false;
  }
}

async function switchLightOff() {
  console.log("light off, ", window.TPLINK.TPLightOff());
}

async function switchLightOn() {
  console.log("light on, ", window.TPLINK.TPLightOn());
}
