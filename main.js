// Modules to control application life and create native browser window
const {app,BrowserWindow,ipcMain} = require('electron');
const ejs = require('ejs');
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    //width: 1024, 
    //height: 768
    webPreferences: {
      webSecurity: false,
      nodeIntegration: true
    }
  });

  mainWindow.webContents.openDevTools({
    mode: 'bottom'
  });
  
  mainWindow.loadFile('./render/index.html');
  mainWindow.maximize();
 

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  });

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

//监听与渲染进程的通信
ipcMain.on('main-controller', (event, arg) => {
  switch(arg){
    case 'exit':
      app.quit();//退出程序
      break;
    case 'm_header':
      ejs.renderFile('./render/view/header.ejs',{},function(err,data){
        if(err){
          console.debug(err);
        }else{
          event.returnValue = data;
        }
      });
      break;
    case 'm_content':
      ejs.renderFile('./render/view/content.ejs',{},function(err,data){
        if(err){
          console.debug(err);
        }else{
          event.returnValue = data;
        }
      });
      break;
    case 'm_aside_left':
      ejs.renderFile('./render/view/left-aside.ejs',{},function(err,data){
        if(err){
          console.debug(err);
        }else{
          event.returnValue = data;
        }
      });
      break;            
    case 'm_footer':
      ejs.renderFile('./render/view/footer.ejs',{},function(err,data){
        if(err){
          console.debug(err);
        }else{
          event.returnValue = data;
        }
      });
      break;            
    case 'm_quick_sidebar':
      ejs.renderFile('./render/view/quick-sidebar.ejs',{},function(err,data){
        if(err){
          console.debug(err);
        }else{
          event.returnValue = data;
        }
      });
      break;            
    }
});
