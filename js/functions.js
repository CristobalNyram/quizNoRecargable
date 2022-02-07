
//Extract the form
const form = document.getElementById('cuestionario_covid');

//get of all bottoms
var btnNext0 = document.getElementById('btn-next0');
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
var btnNext16_1 = document.getElementById('btn-next16_1');

var btnNext17 = document.getElementById('btn-next17');
var btnNext18 = document.getElementById('btn-next18');



//get of all boxes of questions
var box0 =document.getElementById('box0');
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
var box16_1 =document.getElementById('box16_1');

var box17 =document.getElementById('box17');
var box18 =document.getElementById('box18');
var box19 =document.getElementById('box19');

function changeVisibility(boxStay,boxNext)
{
    boxStay.style.display="none";
    boxNext.style.display="";

   
    
}



    /*


        btnNext0.addEventListener('click',function()
        {
            var nombreAlumno=document.getElementById('nombreAlumno').value;
            var apellidoPaAlumno=document.getElementById('apellidoPaAlumno').value;
            var apellidoMaAlumno=document.getElementById('apellidoMaAlumno').value;
            var generoAlumno =document.querySelector('input[name=GeneroAlumno]:checked').value;
            var edadAlumno =document.getElementById('edadAlumno').value;

            
            var matriculaAlumno=document.getElementById('MatriculaAlumno').value;
            var curpAlumno =document.getElementById('CurpAlumno').value;

           
           
            
            var programaEducativoAlumno=document.getElementById('programaEducativoAlumno').value;
            var cuatrimestreAlumno = document.getElementById('CuatrimestreAlumno').value;

            var numeroTelefono=document.getElementById('TelefonoAlumno').value;
            // 
            
            console.log(generoAlumno);

            // inicio de validacion de datos del alumno
           if(
            nombreAlumno===''|| apellidoPaAlumno==='' || apellidoMaAlumno===''|| matriculaAlumno===''|| curpAlumno===''|| numeroTelefono==='' || 
              programaEducativoAlumno===0 || edadAlumno === '' || cuatrimestreAlumno === 0 
           
           )
           {
               alertify.error('Los campos deben ser llenados,no puede dejar campos vacios.');
           

           }
           else
           {
                
                       
                var digitosPermiidoEnUnaCurp=18;
                var AnchoDeLaCurpRecibida= (curpAlumno.length);
                        //evaluamos la curp
                        if(AnchoDeLaCurpRecibida==digitosPermiidoEnUnaCurp)
                        {

                            // console.log(curpAlumno);
                            // console.log(Boolean(AnchoDeLaCurpRecibida==digitosPermiidoEnUnaCurp));
                              
                                //evaluamos el numero de telefono
                            if(numeroTelefono.length>=10)
                                {
                                    //  console.log(numeroTelefono.length);
                                    //evaluamos el la matricula
                                    if(matriculaAlumno.length >=12)
                                    {
                                        //evaluamos que seleccione algun programa educativo
                                            if(programaEducativoAlumno>=1)
                                            {
                                                    //evaluamos que el alumno seleccione un cuatrimestres
                                                    if(cuatrimestreAlumno>=1)
                                                    {


                                                        //evaluamos que el alumno no ingrese una edad irreal
                                                        if(edadAlumno >=14 & edadAlumno<= 70 )
                                                        {
                                                            changeVisibility( box0,box1);
                                                        }
                                                        else
                                                        {
                                                            alertify.error('La edad que ingreso en incorrecta.');
                                                        }
                                                        

                                                    }
                                                    else
                                                    {
                                                        alertify.error('Debe seleccionar el cuatrimestre en el que se encuentra.');

                                                    }

                                                //changeVisibility( box0,box1);
                                            }
                                            else
                                            {
                                                alertify.error('Debe seleccionar el programa educativo correspondite.');

                                            }
                                        // 

                                    }
                                    else
                                    {
                                        alertify.error('Error al ingresar la matricula');
                                    }

                                }
                                else
                                {
                                    // console.log(numeroTelefono.length);
                                    alertify.error('Erro en el campo de numero de telefono');

                                }
                        }
                        else
                        {
                            // console.log(curpAlumno.length);
                            // console.log(Boolean(AnchoDeLaCurpRecibida==digitosPermiidoEnUnaCurp));
                            
                            alertify.error('Tu CURP esta incorrecta');
                        }

                        //
           }
            // fin de validacion de datos del alumno

            
            
        



        })*/
    

         btnNext1.addEventListener('click',function(){



            var cuesRespuesta1 =document.querySelector('input[name=p1]:checked').value;


            if(cuesRespuesta1==1)
            {
                changeVisibility( box1,box2);
            }
            else
            {
                changeVisibility( box1,box3);
            }

            

         })
        btnNext2.addEventListener('click',function(){
                        var cuesRespuesta2 =document.querySelector('input[name=p2]:checked').value;
                        
                        changeVisibility( box2,box3);
                        
                    
         })

         btnNext3.addEventListener('click',function(){
                                
                                    var cuesRespuesta3 =document.querySelector('input[name=p3]:checked').value;



                                       
                                if(cuesRespuesta3==1)
                                 {
                                 changeVisibility( box3,box4);
                                

                                }
                                else
                                {
                                     changeVisibility( box3,box5);


                                }
                            
         })

         btnNext4.addEventListener('click',function(){
          var cuesRespuesta4 =document.querySelector('input[name=p4]:checked').value;
          changeVisibility( box4,box5);
                                            
                                        
         })

          btnNext5.addEventListener('click',function(){
          var cuesRespuesta5 =document.querySelector('input[name=p5]:checked').value;
         changeVisibility( box5,box6);
          })
          btnNext6.addEventListener('click',function(){
         var cuesRespuesta6 =document.querySelector('input[name=p6]:checked').value;
         changeVisibility( box6,box7);
          })  
                                                                
         btnNext7.addEventListener('click',function(){
         var cuesRespuesta7 =document.querySelector('input[name=p7]:checked').value;
         changeVisibility( box7,box8);   
         })  

        btnNext8.addEventListener('click',function(){
         var cuesRespuesta8 =document.querySelector('input[name=p8]:checked').value;
        changeVisibility( box8,box9);
        })  

         btnNext9.addEventListener('click',function(){
         var cuesRespuesta9 =document.querySelector('input[name=p9]:checked').value;
        changeVisibility( box9,box10);
         })  

        btnNext10.addEventListener('click',function(){
        var cuesRespuesta10 =document.querySelector('input[name=p10]:checked').value;
         changeVisibility( box10,box11);
         })  

          btnNext11.addEventListener('click',function(){
         var cuesRespuesta11 =document.querySelector('input[name=p11]:checked').value;
        changeVisibility( box11,box12);
        })  

         btnNext12.addEventListener('click',function(){
         var cuesRespuesta12 =document.querySelector('input[name=p12]:checked').value;
           changeVisibility( box12,box13);
          })  

        btnNext13.addEventListener('click',function(){
        var cuesRespuesta13 =document.querySelector('input[name=p13]:checked').value;
        changeVisibility( box13,box14); 
        })  


         btnNext14.addEventListener('click',function(){
    var cuesRespuesta14 =document.querySelector('input[name=p14]:checked').value;
    changeVisibility( box14,box15);
        })  

         btnNext15.addEventListener('click',function(){
            var cuesRespuesta15 =document.querySelector('input[name=p15]:checked').value;
            changeVisibility( box15,box16);
                     })  

            btnNext16.addEventListener('click',function(){
            var cuesRespuesta16 =document.querySelector('input[name=p16]:checked').value;
          
            if(cuesRespuesta16==1)
            {
                changeVisibility( box16,box16_1);
            }
            else
            {
                changeVisibility( box16,box17);
            }
                                                                                                                                                                    
            })


            btnNext16_1.addEventListener('click',function(){
                var comprobantePdfAlumno=document.getElementById('CombrobanteVacunaAlumno').value;                
                if(comprobantePdfAlumno==='')
                {
                    alertify.error('Suba su comprobante,por favor');

                }
                else
                {
                    changeVisibility( box16_1,box17);
                }
                

            })
                
                


            btnNext17.addEventListener('click',function(){
                                                                                                                                                                            
                                                                                                                                                                            var cuesRespuesta17 = document.querySelector('input[name=p17]:checked').value;

                                                                                                                                                                            if(cuesRespuesta17==1)
                                                                                                                                                                            {
                                                                                                                                                                                changeVisibility( box17,box18);
                                                                                                                                                                            }
                                                                                                                                                                            else
                                                                                                                                                                            {
                                                                                                                                                                                changeVisibility( box17,box19);

                                                                                                                                                                            }

                                                                                                                                                                            
                                                                                                                                                                            
                                                                                                                                                                        
            })

        btnNext18.addEventListener('click',function(){
            changeVisibility( box18,box19);                                                                                                                            
            })



            function sendDataForm()
            {
               

                let cuesRespuesta1 =document.querySelector('input[name=p1]:checked').value;
                let cuesRespuesta2 =document.querySelector('input[name=p2]:checked').value;
                let cuesRespuesta3 =document.querySelector('input[name=p3]:checked').value;
                let cuesRespuesta4 =document.querySelector('input[name=p4]:checked').value;
                let cuesRespuesta5 =document.querySelector('input[name=p5]:checked').value;
                let cuesRespuesta6 =document.querySelector('input[name=p6]:checked').value;
                let cuesRespuesta7 =document.querySelector('input[name=p7]:checked').value;
                let cuesRespuesta8 =document.querySelector('input[name=p8]:checked').value;
                let cuesRespuesta9 =document.querySelector('input[name=p9]:checked').value;
                let cuesRespuesta10 =document.querySelector('input[name=p10]:checked').value;
                let cuesRespuesta11 =document.querySelector('input[name=p11]:checked').value;
                let cuesRespuesta12 =document.querySelector('input[name=p12]:checked').value;
                let cuesRespuesta13 =document.querySelector('input[name=p13]:checked').value;
                let cuesRespuesta14 =document.querySelector('input[name=p14]:checked').value;
                let cuesRespuesta15 =document.querySelector('input[name=p15]:checked').value;
                let cuesRespuesta16 =document.querySelector('input[name=p16]:checked').value;
                let comprobantePdfAlumno=formData.get('CombrobanteVacunaAlumno');
                let cuesRespuesta17 =document.querySelector('input[name=p17]:checked').value;
                let cuesRespuesta18 =document.querySelector('#p18').value;

                let respuestas =
                [
                    cuesRespuesta1,
                    cuesRespuesta2,
                    cuesRespuesta3,
                    cuesRespuesta4,
                    cuesRespuesta5,
                    cuesRespuesta6,
                    cuesRespuesta7,
                    cuesRespuesta8,
                    cuesRespuesta9,
                    cuesRespuesta10,
                    cuesRespuesta11,
                    cuesRespuesta12,
                    cuesRespuesta13,
                    cuesRespuesta14,
                    cuesRespuesta15,
                    cuesRespuesta16,
                    cuesRespuesta17,
                    cuesRespuesta18
                ];

                



                
                
                //recogiendo las respuestas 
              
                // console.log(nombreAlumno);
                
                console.log(alumnoData,respuestas);
                debugger;
                // console.log(formulario);

            }



            function senDataAlumno()
            {
                
                let $form =document.querySelector('#dataAlumno');
                let formData = new FormData($form);
                
                let nombreAlumno= formData.get('nombreAlumno');
                let apellidoPaAlumnos = formData.get('apellidoPaAlumno');
                let apellidoMaAlumno=formData.get('apellidoMaAlumno');
                let generoAlumno =document.querySelector('input[name=GeneroAlumno]:checked').value;
                let edadAlumno=formData.get('edadAlumno');
                let matriculaAlumno=formData.get('MatriculaAlumno');
                let curpAlumno=formData.get('CurpAlumno');
                let programaEducativoAlumno =formData.get('programaEducativoAlumno');
                let cuatrimestreAlumno=formData.get('CuatrimestreAlumno');
                let numeroTelefono=formData.get('TelefonoAlumno');
                
    
            
           
                //dataAlumno
                let alumnoData=
                {
                    
                    "nombre" : nombreAlumno,
                    "apellidoPaterno": apellidoPaAlumnos,
                    "apellidoMaterno": apellidoMaAlumno,
                    "genero":generoAlumno,
                    "edad":edadAlumno,
                    "matricula":matriculaAlumno,
                    "curp":curpAlumno,
                    "programaEducativo":programaEducativoAlumno,
                    "cuatrimestre":cuatrimestreAlumno,
                    "numeroTelefono":numeroTelefono
                    
                   
                   
                };

                console.log(alumnoData)
                debugger;

            }




            

         
         





