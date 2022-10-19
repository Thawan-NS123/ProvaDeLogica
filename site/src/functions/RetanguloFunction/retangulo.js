export async function criarRetangulo(base, altura){

    let array = []
 
    for(let col = 1; col <= altura ; col++)
    {

        for (let lin = 1; lin <= base; lin++)
        {
            array.push('* ')
        }

        array.push(<br></br>)
    }   

    return array
}



console.log(criarRetangulo(3,5));