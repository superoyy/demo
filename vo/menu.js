let menuItems=[
    {'id': '1','group':'Departments','name': 'M-1','upId': null,'url': 'javascript:viod(0)','icon': 'fa fa-sitemap fa-fw','order': 0,'status': 0,'desc':'简介1'},
    {'id': '11','group':null,'name': 'M-11','upId': '1','url': 'javascript:App.showTab("11")','icon': '','order': 0,'status': 0,'desc':'简介2'},
    {'id': '12','group':null,'name': 'M-12','upId': '1','url': 'javascript:App.showTab("12")','icon': '','order': 0,'status': 0,'desc':'简介3'},
    {'id': '2','group':'Reports','name': 'M-2','upId': null,'url': 'javascript:viod(0)','icon': 'fa fa-wrench fa-fw','order': 0,'status': 0,'desc':'简介4'},
    {'id': '21','group':null,'name': 'M-21','upId': '2','url': 'javascript:App.showTab("21")','icon': '','order': 0,'status': 0,'desc':'简介5'},
    {'id': '211','group':null,'name': 'M-211','upId': '21','url': 'javascript:App.showTab("211")','icon': '','order': 0,'status': 0,'desc':'简介6'},
    {'id': '3','group':'System','name': 'M3','upId': null,'url': 'javascript:viod(0)','icon': 'fa fa-sitemap fa-fw','order': 0,'status': 0,'desc':'简介7'}
  ];

 module.exports={
    setMenuItems: function (items){
        menuItems = items;
    },
    getMenuItems: function (){
        return menuItems;
    },
    getMenuItemById: function(id){
        menuItems.forEach((item)=>{
            if(item.id == id){
                return item;
            };
        });        
    }
}