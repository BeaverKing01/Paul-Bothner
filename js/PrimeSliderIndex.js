// JavaScript Document


var path0 = new Array(); 

// LIST OF IMAGES 
path0[0] = "pics/prime/1.png"; 
path0[1] = "pics/prime/2.png"; 
path0[2] = "pics/prime/3.png"; 
path0[3] = "pics/prime/4.png";
path0[4] = "pics/prime/5.png";
path0[5] = "pics/prime/6.png";
path0[6] = "pics/prime/7.png";

function swapImage0() 
{ 
x = Math.floor(Math.random() * path0.length);
document.slidev.src = path0[x]; 
setTimeout("swapImage0()",300000); 
} 

var i = 0; var path = new Array(); 

// LIST OF IMAGES 
path[0] = { img:"pics/banner/1a.png", link: "1"};
path[1] = { img:"pics/banner/1b.png", link: "2"};
path[2] = { img:"pics/banner/1c.png", link: "3"};
path[3] = { img:"pics/banner/1d.png", link: "4"};

function swapImage() 
{ 
	document.slide.src = path[i].img; 
	document.getElementById('link_for_img1').href = path[i].link;
	if(i < path.length - 1) i++; 
	else i = 0; 
	setTimeout(swapImage,6000); 
} 


var k = 0; var path2 = new Array(); 

// LIST OF IMAGES WITH PATHS
path2[0] = { img:"pics/banner/2a.png", link: "5"};
path2[1] = { img:"pics/banner/2b.png", link: "6"};
path2[2] = { img:"pics/banner/2c.png", link: "7"};
path2[3] = { img:"pics/banner/2d.png", link: "8"};


function swapImage2() 
{ 
    document.slider.src = path2[k].img; 
    document.getElementById('link_for_img').href = path2[k].link;
    if(k < path2.length - 1) k++; 
    else k = 0; 
    setTimeout(swapImage2,6000); 
} 


var l = 0; var path3 = new Array(); 

// LIST OF IMAGES 
path3[0] = { img:"pics/banner/3a.png", link: "9"};
path3[1] = { img:"pics/banner/3b.png", link: "10"};
path3[2] = { img:"pics/banner/3c.png", link: "11"};
path3[3] = { img:"pics/banner/3d.png", link: "12"};

function swapImage3() 
{ 
document.slidea.src = path3[l].img;
document.getElementById('link_for_img2').href = path3[l].link; 
if(l < path3.length - 1) l++; 
else l = 0; 
setTimeout(swapImage3,6000); 
} 


var m = 0; var path4 = new Array(); 

// LIST OF IMAGES 
path4[0] = { img:"pics/banner/4a.png", link: "13"}; 
path4[1] = { img:"pics/banner/4b.png", link: "14"}; 
path4[2] = { img:"pics/banner/4c.png", link: "15"};
path4[3] = { img:"pics/banner/4d.png", link: "16"};

function swapImage4() 
{ 
document.slidem.src = path4[m].img;
 document.getElementById('link_for_img3').href = path4[m].link;
if(m < path4.length - 1) m++; 
else m = 0; 
setTimeout(swapImage4,6000); 
} 


var n = 0; var path5 = new Array(); 

// LIST OF IMAGES 
path5[0] = { img:"pics/banner/5a.png", link: "17"}; 
path5[1] = { img:"pics/banner/5b.png", link: "18"};
path5[2] = { img:"pics/banner/5c.png", link: "19"};
path5[3] = { img:"pics/banner/5d.png", link: "20"};

function swapImage5() 
{ 
document.sliden.src = path5[n].img;
document.getElementById('link_for_img4').href = path5[n].link; 
if(n < path5.length - 1) n++; 
else n = 0; 
setTimeout("swapImage5()",6000); 
} 


