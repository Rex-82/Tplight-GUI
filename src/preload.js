/**
 * The preload script runs before. It has access to web APIs
 * as well as Electron's renderer process modules and some
 * polyfilled Node.js functions.
 *
 * https://www.electronjs.org/docs/latest/tutorial/sandbox
 */
const { contextBridge } = require("electron");
const TPLSmartDevice = require("tplink-lightbulb");
const { Store } = require("electron-store");
const { resolve } = require("path");
const { config } = require("dotenv");
config({ path: resolve(__dirname, "..", ".env") });

contextBridge.exposeInMainWorld("TPLINK", {
  TPLightOn: (brightness) => {
    const light = new TPLSmartDevice(process.env.LIGHT_IP);

    light
      .power(true, 500, { brightness: brightness })
      .then((status) => {
        // console.log("status: ", status);
      })
      .catch((err) => console.error(err));
  },

  TPLightOff: () => {
    const light = new TPLSmartDevice(process.env.LIGHT_IP);
    light
      .power(false, 500)
      .then((status) => {
        // console.log("status: ", status);
      })
      .catch((err) => console.error(err));
  },

  TPLightStatus: () => {
    return new Promise((resolve, reject) => {
      const light = new TPLSmartDevice(process.env.LIGHT_IP);
      light
        .info()
        .then((info) => {
          console.log("info: ", info);
          resolve(info);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  GetInfo: () => {
    return process.env.LIGHT_IP;
  },
});
