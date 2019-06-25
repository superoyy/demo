const {ipcMain} = require('electron');
const ejs = require('ejs');
const menu=require('../vo/menu');
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
        ejs.renderFile('./render/view/left-aside.ejs',{menuItems: menu.getMenuItems()},function(err,data){
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
  