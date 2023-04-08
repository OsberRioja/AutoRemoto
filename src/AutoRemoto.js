function Auto(cadena)
{
    let inicial_x=0;
    let inicial_y=0;
    let final_x=0;
    let final_y=0;
    let orientacion="N";
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
            if(final_x<filas-1 && final_y<columnas-1)//verifica que este dentro de los limites
            {
                superficie[final_x][final_y]=0;//pone en 0 la posicion anterior del auto
                final_y++;                     //avanza una posicion el auto
                superficie[final_x][final_y]=1;//pone en 1 la posicion actual del auto
            }
        }
        if(comandos[i]=="I")
        {
            orientacion="O";
        }
    }
    let posicion_final=final_x.toString()+","+final_y.toString()+orientacion;
    return posicion_final;
}

export default Auto;