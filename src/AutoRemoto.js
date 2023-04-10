function Auto(cadena)
{
    const cardinales=["N","O","S","E"];
    let inicial_x=0;
    let inicial_y=0;
    let final_x=0;
    let final_y=0;
    let orientacion=1;
    const filas = 5;
    const columnas = 5;
    const superficie = [];

    //llenamos la matriz de superficie de 0
    for (let i = 0; i < filas; i++) {
        superficie[i] = [];
        for (let j = 0; j < columnas; j++) {
            superficie[i][j] = 0;
        }
    }
    superficie[inicial_x][inicial_y]=1;//posicion inicial por defecto
    let comandos=cadena.split("");
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
                final_x=final_x-1;                     //avanza una posicion el auto
                superficie[final_x][final_y]=1;//pone en 1 la posicion actual del auto
            }
            if(orientacion == 4 ){
                superficie[final_x][final_y]=0;//pone en 0 la posicion anterior del auto
                final_x=final_x+1;                     //avanza una posicion el auto
                superficie[final_x][final_y]=1;//pone en 1 la posicion actual del auto
            }
        
        }
        if(comandos[i]=="I")
        {
            orientacion=(orientacion%4)+1;
        }
        if(comandos[i]=="D")
        {
            const orientaciones=[4,3,2,1];
            const indice=orientaciones.indexOf(orientacion);
            if(indice!=-1)
            {
                const siguiente_indice=(indice+1)%4;
                orientacion=orientaciones[siguiente_indice];
            }
        }

    }
    let posicion_final=final_x.toString()+","+final_y.toString()+cardinales[orientacion-1];
    return posicion_final;
}

export default Auto;