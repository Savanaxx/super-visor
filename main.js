const { app, BrowserWindow, Menu, Tray, Notification} = require('electron')
const path = require('path')
let isQuiting;
app.on('before-quit', function () {
  isQuiting = true;
});

function createWindow () {
    const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, '/ikona.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: false,
      nodeIntegration: true
    }
  });
  win.loadFile('index.html')
  win.maximize()
  win.removeMenu()
  app.setAppUserModelId(app.name)
  win.on('close', function (event) {
    if (!isQuiting) {
      event.preventDefault();
      win.hide();
      event.returnValue = false;
    }
  });
  const menu = Menu.buildFromTemplate([
    {label: "Zakończ", role: 'quit'}
  ])
  tray = new Tray(path.join(__dirname, '/ikona.png'));
  tray.setToolTip("SuperVisor");
  tray.setContextMenu(menu);
  tray.on('click', function() {
    win.show();
  })
};

app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})