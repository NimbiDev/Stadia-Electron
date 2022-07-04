// Modules to control application life and create native browser window
const { app } = require("electron");
const path = require("path");
const { menubar } = require("menubar");

const mb = menubar({
  browserWindow: {
    width: 1280,
    height: 768,
    resizable: true,
    movable: true,
    minimizable: true,
    maximizable: true,
    center: true,
    closable: true,
    fullscreen: false,
    fullscreenable: true,
    hasShadow: true,
    autoHideMenuBar: true,
    frame: true
  },
  preloadWindow: true,
  icon: path.join(__dirname, "./MenuIcon.png"),
  webPreferences: {
    partition: "persist:googlestadia",
    webgl: true,
  },
});


mb.app.commandLine.appendSwitch(
  "disable-backgrounding-occluded-windows",
  "true"
);

mb.on("ready", () => {
  console.log("app is ready");

  win = mb.window;
  // win.openDevTools();

  // First URL
  win.loadURL("https://stadia.google.com/");
  win.setBackgroundColor('#333333')
  win.once('ready-to-show', () => {
    win.show()
  });
});

// mb.on('after-create-window', () => {});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

