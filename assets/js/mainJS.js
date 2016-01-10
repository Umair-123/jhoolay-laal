$(document).ready(function(){
    $('#myBtn').on('click',function(){
   
        $("#myModal").modal();
    });
    $("#SignupBtn").on('click',function(){
        $("#SignupModal").modal();
    });
    $("#stars-Id").rating();
});




var app=angular.module('business',[]);
app.controller('businessController',function(){
	this.bizobj=jsone;
	this.starfunc=function()
	{
		angular.element($('#input-id')).rating();
	};
});
app.controller('panelController',function(){
	this.tab=1;
	this.selectTab=function(setTab){
		this.tab=setTab;
	};
	this.isSelected=function(checkTab){
		return this.tab===checkTab;
	};
});
app.directive('panelController',function(){
	this.tab=1;
	this.selectTab=function(setTab){
		this.tab=setTab;
	};
	this.isSelected=function(checkTab){
		return this.tab===checkTab;
	};
});
var jsone=[
{
	businessName:'burger-king',
	Address:'Multan Chungi',
	Ratings:'3.0',
	pic:'assets/img/dummy/burger-king.jpg',
	Description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco.',
	reviews:[
			{
				stars:'3.0',
				Comment:'its allright'
			},
			{
				stars:'4.0',
				Comment:'its good'
			}
	]
},
{
	businessName:'Shaukat-Khanam',
	Address:'Pindi Chowk',
	Ratings:'4.0',
	pic:"assets/img/dummy/shaukat-khanam.jpg" ,
	Description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia quis nostrud exercitation ullamco.',
	reviews:[
			{
				stars:'3.0',
				Comment:'its allright'
			},
			{
				stars:'4.0',
				Comment:'its good'
			}
		]
}
];