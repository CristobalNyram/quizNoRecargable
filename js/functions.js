
//Extract the form
const form = document.getElementById('cuestionario_covid');

//get of all bottoms
var btnNext1 = document.getElementById('btn-next1');
var btnNext2 = document.getElementById('btn-next2');
var btnNext3 = document.getElementById('btn-next3');
var btnNext4 = document.getElementById('btn-next4');
var btnNext5 = document.getElementById('btn-next5');
var btnNext6 = document.getElementById('btn-next6');
var btnNext7 = document.getElementById('btn-next7');
var btnNext8 = document.getElementById('btn-next8');
var btnNext9 = document.getElementById('btn-next9');
var btnNext10 = document.getElementById('btn-next10');
var btnNext11 = document.getElementById('btn-next11');
var btnNext12 = document.getElementById('btn-next12');
var btnNext13 = document.getElementById('btn-next13');
var btnNext14 = document.getElementById('btn-next14');
var btnNext15 = document.getElementById('btn-next15');
var btnNext16 = document.getElementById('btn-next16');
var btnNext17 = document.getElementById('btn-next17');
var btnNext18 = document.getElementById('btn-next18');


//get of all boxes of questions
var box1 =document.getElementById('box1');
var box2 =document.getElementById('box2');
var box3 =document.getElementById('box3');
var box4 =document.getElementById('box4');
var box5 =document.getElementById('box5');
var box6 =document.getElementById('box6');
var box7 =document.getElementById('box7');
var box8 =document.getElementById('box8');
var box9 =document.getElementById('box9');
var box10 =document.getElementById('box10');
var box11 =document.getElementById('box11');
var box12 =document.getElementById('box12');
var box13 =document.getElementById('box13');
var box14 =document.getElementById('box14');
var box15 =document.getElementById('box15');
var box16 =document.getElementById('box16');
var box17 =document.getElementById('box17');
var box18 =document.getElementById('box18');
var box19 =document.getElementById('box19');

function changeVisibility(boxStay,boxNext)
{
    boxStay.style.display="none";
    boxNext.style.display="";

    
}





var cuestionarioFormData= new FormData(form);

form.addEventListener('submit',function(event)
{

    //with this funtion stop the bottom "siguiente"
     event.preventDefault();

         btnNext1.addEventListener('click',function(event){
            console.log("envias");

            changeVisibility( box1,box2);
          

                    btnNext2.addEventListener('click',function(event){
                        changeVisibility( box2,box3);
                        
                    
                    })

                            btnNext3.addEventListener('click',function(event){
                                changeVisibility( box3,box4);
                                
                            
                            })

                                        btnNext4.addEventListener('click',function(event){
                                            changeVisibility( box4,box5);
                                            
                                        
                                        })

                                                    btnNext5.addEventListener('click',function(event){
                                                        changeVisibility( box5,box6);
                                                        
                                                    
                                                    })

                                                                btnNext6.addEventListener('click',function(event){
                                                                    changeVisibility( box6,box7);
                                                                    
                                                                
                                                                })  
                                                                
                                                                            btnNext7.addEventListener('click',function(event){
                                                                                changeVisibility( box7,box8);
                                                                                
                                                                            
                                                                            })  

                                                                                    btnNext8.addEventListener('click',function(event){
                                                                                        changeVisibility( box8,box9);
                                                                                        
                                                                                    
                                                                                    })  

                                                                                            btnNext9.addEventListener('click',function(event){
                                                                                                changeVisibility( box9,box10);
                                                                                                
                                                                                            
                                                                                            })  

                                                                                            btnNext10.addEventListener('click',function(event){
                                                                                                changeVisibility( box10,box11);
                                                                                                
                                                                                            
                                                                                            })  

                                                                                                        btnNext11.addEventListener('click',function(event){
                                                                                                            changeVisibility( box11,box12);
                                                                                                            
                                                                                                        
                                                                                                        })  
                                                                                                                btnNext12.addEventListener('click',function(event){
                                                                                                                    changeVisibility( box12,box13);
                                                                                                                    
                                                                                                                
                                                                                                                })  

                                                                                                                            btnNext13.addEventListener('click',function(event){
                                                                                                                                changeVisibility( box13,box14);
                                                                                                                                
                                                                                                                            
                                                                                                                            })  


                                                                                                                                        btnNext14.addEventListener('click',function(event){
                                                                                                                                            changeVisibility( box14,box15);
                                                                                                                                            
                                                                                                                                        
                                                                                                                                        })  

                                                                                                                                        btnNext15.addEventListener('click',function(event){
                                                                                                                                            changeVisibility( box15,box16);
                                                                                                                                            
                                                                                                                                        
                                                                                                                                        })  

                                                                                                                                        btnNext16.addEventListener('click',function(event){
                                                                                                                                            changeVisibility( box16,box17);
                                                                                                                                            
                                                                                                                                        
                                                                                                                                        })  
                                                                                                                                                btnNext17.addEventListener('click',function(event){
                                                                                                                                                    changeVisibility( box17,box18);
                                                                                                                                                    
                                                                                                                                                
                                                                                                                                                })

                                                                                                                                                        btnNext18.addEventListener('click',function(event){
                                                                                                                                                            changeVisibility( box18,box19);
                                                                                                                                                            
                                                                                                                                                        
                                                                                                                                                        })





            

         
         })



});



