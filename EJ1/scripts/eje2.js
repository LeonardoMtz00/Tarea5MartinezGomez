let cal1=0,cal2=0,cal3=0,resu=0;
        cal1 = window.prompt("Introduce la primera calificación","0");
        cal1=parseInt(cal1);

        cal2 = window.prompt("Introduce la segunda calificación","0");
        cal2=parseInt(cal2);
        
        cal3 = window.prompt("Introduce la tercera calificación","0");
        cal3=parseInt(cal3);0

        resu=(cal1+cal2+cal3)/3;
        
        if(resu>=7){
            document.write(`<br/> <br/>El alumno tiene un promedio de: ${resu} <br/> Su calificacion es APROBATORIA` );
        }else{
            document.write(`<br/> <br/>El alumno tiene un promedio de: ${resu} <br/> Su calificacion es REPROBATORIA` );
        }