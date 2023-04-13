function Avanzar(orientacion,pasos,final_x,final_y,filas,columnas)
{
    let pos_x=final_x;
    let pos_y=final_y;
    if(orientacion == 1){
        pos_y=pos_y+pasos;                     //avanza una posicion el auto
    }
    if(orientacion == 2){
        pos_x=pos_x-pasos;                     //avanza una posicion el auto
    }
    if(orientacion == 3){
        pos_y=pos_y-pasos;                    //avanza una posicion el auto
    }
    if(orientacion == 4){
        pos_x=pos_x+pasos;                //avanza una posicion el auto
    }
    if(pos_y>=columnas)
    {
        pos_y=pos_y-columnas;
    }
    if((pos_x>=0 && pos_x<filas) && (pos_y>=0 && pos_y<columnas))
    {
        return [pos_x,pos_y];
    }
    else{
        return [final_x,final_y];
    }
}

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
    var orientacion=-1;
    var comandos;
    const cardinales=["N","O","S","E"];
    var filas;
    var columnas;
    let entrada=cadena.split("/");
    var final_x;
    var final_y;
    if(entrada.length==1)
    {
        inicial_x=0;
        inicial_y=0;
        filas=5;
        columnas=5;
        comandos=cadena.split("");
        orientacion=1;
    }
    if(entrada.length==2)
    {
        let pos_x;
        let pos_y;
        let posicion_inicial=entrada[0].split(/,|(?=[NSOE])/); //expresion regular para obtener ["posx","posy","orientacion"]
        if(posicion_inicial.length<2){
            return "Error en los parametros";
        }
        if(posicion_inicial.length==2)
        {
            if(parseInt(posicion_inicial[0])>1 && parseInt(posicion_inicial[1])>1){
                let cantidad_filas=posicion_inicial[0];
                let cantidad_columnas=posicion_inicial[1];
                filas=parseInt(cantidad_filas);
                columnas=parseInt(cantidad_columnas);
                inicial_x=0;
                inicial_y=0;
                orientacion=1;
                let letras=entrada[1];
                comandos=letras.split("");
            }
            else{
                return "Error en los parametros";
            }
            
        }
        if(posicion_inicial.length>2)
        {
            filas=5;
            columnas=5;
            pos_x=posicion_inicial[0];
            pos_y=posicion_inicial[1];
            let letras=entrada[1];
            comandos=letras.split("");
            inicial_x=parseInt(pos_x);
            inicial_y=parseInt(pos_y);
            let cardinal=posicion_inicial[2];//guarda la letra de posciion inicial para buscarla en el verctor cardinales
            for(var i=0;i<4;i++)
            {
                if(cardinales[i]==cardinal)
                {
                    orientacion=i+1;
                }
            }
        }
    }
    if(entrada.length==3)
    {
        let pos_x;
        let pos_y;
        let cantidad_filas;
        let cantidad_columnas;
        let posicion_inicial=entrada[1].split(/,|(?=[NSOE])/);
        let tamanio=entrada[0].split(",");
        cantidad_filas=tamanio[0];
        cantidad_columnas=tamanio[1];
        filas=parseInt(cantidad_filas);
        columnas=parseInt(cantidad_columnas);
        if(posicion_inicial.length<=2)
        {
            return "Error en los parametros";
        }
        if(posicion_inicial.length>2)
        {
            pos_x=posicion_inicial[0];
            pos_y=posicion_inicial[1];
            let letras=entrada[2];
            comandos=letras.split("");
            inicial_x=parseInt(pos_x);
            inicial_y=parseInt(pos_y);
            let cardinal=posicion_inicial[2];//guarda la letra de posciion inicial para buscarla en el verctor cardinales
            for(var i=0;i<4;i++)
            {
                if(cardinales[i]==cardinal)
                {
                    orientacion=i+1;
                }
            }
        }
    }
    final_x=inicial_x;
    final_y=inicial_y;
    let superficie=CrearSuperficie(filas,columnas);
    superficie[inicial_x][inicial_y]=1;//posicion inicial
    for(var i=0;i<comandos.length;i++)
    {   if(comandos[i]=="A")
        {
            superficie[final_x][final_y]=0;
            let final_xy=Avanzar(orientacion,1,final_x,final_y,filas,columnas);
            final_x=final_xy[0];
            final_y=final_xy[1];
            superficie[final_x][final_y]=1;
        }
        if(comandos[i]=="J")
        {
            superficie[final_x][final_y]=0;
            let final_xy=Avanzar(orientacion,2,final_x,final_y,filas,columnas);
            final_x=final_xy[0];
            final_y=final_xy[1];
            superficie[final_x][final_y]=1;
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