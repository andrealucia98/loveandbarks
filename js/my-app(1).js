// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'md', //ios, md, auto
    modalTitle: 'Framework7', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/list/',
    	url: 'list.html',
    	name: 'list',
  		},
		{
		path: '/menu/',
    	url: 'menu.html',
    	name: 'menu',
  		},
		{
		path: '/info/',
    	url: 'info.html',
    	name: 'info',
  		},
		
		{
		path: '/espresso/',
    	url: 'espresso.html',
    	name: 'espresso',
  		},
		
		
		
		
	]
});

// Export selectors engine
var $$ = Dom7;





 

