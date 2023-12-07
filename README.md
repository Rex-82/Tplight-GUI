<br/>
<p align="center">
  <a href="https://github.com/Rex-82/Tplight-App">
    <img src="https://cdn-icons-png.flaticon.com/512/3681/3681914.png" alt="Logo" width="80" height="80">
  </a>

  <h2 align="center">tplight control panel
</h2>

  <p align="center">
    A simple gui to control tplink lights with ease. Built with:
<br>
<br>
<a href="https://www.electronjs.org/"><img align="center" alt="Electron" width="40" height="40" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Electron_Software_Framework_Logo.svg/2048px-Electron_Software_Framework_Logo.svg.png"></a> 
<a href="https://tailwindcss.com/"><img align="center" alt="Tailwind" width="40" height="40" src="https://files.raycast.com/sjxs3pxsc6k63ju0fzv8l3cu4v90"></a>
    <br/>
    <br/>
  </p>
</p>

![Stargazers](https://img.shields.io/github/stars/Rex-82/Tplight-App?style=social) ![Issues](https://img.shields.io/github/issues/Rex-82/Tplight-App) ![License](https://img.shields.io/github/license/Rex-82/Tplight-App) 

## About The Project

This project also uses [tplink-lightbulb](https://github.com/konsumer/tplink-lightbulb) repository by [konsumer](https://github.com/konsumer/tplink-lightbulb/commits?author=konsumer) to control tplink lights with nodejs.

_Please note that everything you see below is subject to change._

## Getting Started

After cloning the repo, create an .env file in the root folder containing a LIGHT_IP variable as follow:
```sh
LIGHT_IP="192.168.1.1"
```
This is just an example, change the IP with the one of the device you want to control.

### Prerequisites

* node

```sh
npm install npm@latest -g
```
* vscode (or equivalent)

### Installation

1. Clone the repo

```sh
git clone https://github.com/Rex-82/Tplight-App.git
```

3. Install NPM packages

```sh
npm install
```

4. Enter light's ip in `.env` file

```JS
LIGHT_IP = 'enter your ip';
```

## Usage

Run with:
```sh
npm run dev
```
If DevTools are showing, in ``main.js`` file comment line:
```sh 
mainWindow.webContents.openDevTools();
``` 


## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.
* If you have suggestions for adding or removing projects, feel free to [open an issue](https://github.com/Rex-82/Tplight-App/issues/new) to discuss it, or directly create a pull request after you edit the *README.md* file with necessary changes.
* Please make sure you check your spelling and grammar.
* Create individual PR for each suggestion.

## License

Distributed under the GNU GPLv3 License. See [LICENSE](https://github.com/Rex-82/Tplight-App/blob/main/LICENSE.md) for more information.

## Acknowledgements

* [konsumer/tplink-lightbulb](https://github.com/konsumer/tplink-lightbulb)
