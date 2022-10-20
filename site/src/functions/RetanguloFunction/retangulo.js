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

export async function criarRetanguloCirc(base, altura){

    let array = []
 
    for(let col = 1; col <= altura ; col++)
    {

        for (let lin = 1; lin <= base; lin++)
        {
            array.push('° ')
        }

        array.push(<br></br>)
    }   

    return array
}

export async function criarRetanguloSquare(base, altura){

    let array = []
 
    for(let col = 1; col <= altura ; col++)
    {

        for (let lin = 1; lin <= base; lin++)
        {
            array.push('■ ')
        }

        array.push(<br></br>)
    }   

    return array
}

export async function criarRetanguloImage(base, altura){

    let array = []
 
    for(let col = 1; col <= altura ; col++)
    {

        for (let lin = 1; lin <= base; lin++)
        {
            array.push(<img className="mundial" src='/foto.png' alt='imagem' />)
        }

        array.push(<br></br>)
    }   

    return array
}