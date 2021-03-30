export let collectionImg:string[]= ['/content_img_1.png','/content_img_2.png',
'/content_img_3.png','/content_img_4.png','/content_img_5.png',
'/content_img_6.png','/content_img_7.png','/content_img_8.png',
'/content_img_9.png','/content_img_10.png','/content_img_11.png',
'/content_img_12.png','/content_img_13.png','/content_img_14.png',
'/content_img_15.png','/content_img_16.png',]

export let today:any = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); 
let yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;

