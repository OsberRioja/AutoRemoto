function GirarDerecha(orientacion)
{
    const orientaciones=[4,3,2,1];
    const indice=orientaciones.indexOf(orientacion);
    if(indice!=-1)
    {
        const siguiente_indice=(indice+1)%4;
        orientacion=orientaciones[siguiente_indice];
    }
    return orientacion;
}

function GirarIzquierda(orientacion)
{
    orientacion=(orientacion%4)+1;
    return orientacion;
}

function CrearSuperficie(filas,columnas)
{
    let matriz=[];
    for (let i = 0; i < filas; i++) {
        matriz[i] = [];
        for (let j = 0; j < columnas; j++) {
            matriz[i][j] = 0;
        }
    }
    return matriz;
}

function Auto(cadena)
{
    var inicial_y;
    var inicial_x;
    var comandos;
    const cardinales=["N","O","S","E"];
    const filas = 5;
    const columnas = 5;
    let entrada=cadena.split("/");
    var final_x=0;
    var final_y=0;
    if(entrada.length>=2)
    {
        let x=entrada[0];
        let letras=entrada[1];
        comandos=letras.split("");
        inicial_y=0;
        inicial_x=parseInt(x);    
    }else if(entrada.length==1)
    {
        inicial_x=0;
        inicial_y=0;
        comandos=cadena.split("");
    }
    let superficie=CrearSuperficie(filas,columnas);
    let orientacion=1;
    superficie[inicial_x][inicial_y]=1;//posicion inicial por defecto
    for(var i=0;i<comandos.length;i++)
    {   if(comandos[i]=="A")
        {
            if(orientacion == 1 && final_y < columnas-1){
                superficie[final_x][final_y]=0;//pone en 0 la posicion anterior del auto
                final_y++;                     //avanza una posicion el auto
                superficie[final_x][final_y]=1;//pone en 1 la posicion actual del auto
            }
            if(orientacion == 2 && final_x > 0 ){
                superficie[final_x][final_y]=0;//pone en 0 la posicion anterior del auto
                final_x--;                     //avanza una posicion el auto
                superficie[final_x][final_y]=1;//pone en 1 la posicion actual del auto
            }
            if(orientacion == 3 && final_y>0){
                superficie[final_x][final_y]=0;//pone en 0 la posicion anterior del auto
                final_y--;                     //avanza una posicion el auto
                superficie[final_x][final_y]=1;//pone en 1 la posicion actual del auto
            }
            if(orientacion == 4 && final_x<filas-1){
                superficie[final_x][final_y]=0;//pone en 0 la posicion anterior del auto
                final_x++;                     //avanza una posicion el auto
                superficie[final_x][final_y]=1;//pone en 1 la posicion actual del auto
            }
        }
        if(comandos[i]=="I")
        {
            orientacion=GirarIzquierda(orientacion);
        }
        if(comandos[i]=="D")
        {
            orientacion=GirarDerecha(orientacion);
        }

    }
    let posicion_final=final_x.toString()+","+final_y.toString()+cardinales[orientacion-1];
    return posicion_final;
}

export default Auto;