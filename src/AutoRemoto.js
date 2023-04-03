function Auto(comando)
{
    let pos_inicial="0,0N";
    let pos_final;
    if(comando=="")
    {
        pos_final=pos_inicial;
    }
    if(comando=="A")
    {
        pos_final="0,1N"
    }
    return pos_final;
}

export default Auto;