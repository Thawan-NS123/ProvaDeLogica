function criarRetangulo(base, altura){
 
    for(let lin = 1; lin <= altura ; lin++)
    {
        for (let col = 1; col <= base; col++)
        {
            process.stdout.write('* ')
        }
        console.log();
    }   
}

console.log(criarRetangulo(2,5));