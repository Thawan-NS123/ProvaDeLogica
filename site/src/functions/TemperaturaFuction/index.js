
export async function situacaoFebre(temperatura){

    let msg = "";
    
    if (temperatura >= 41) {
        msg = 'Hipertermia';
    }

    if(temperatura >= 39.6 && temperatura < 41){
       msg = 'Febre Alta'
    }

    if(temperatura >= 37.6 && temperatura < 39.6){
        msg = 'Febre'
     }
    
    if(temperatura >= 36 && temperatura < 37.6){
        msg = 'Normal'
    }
    
    if(temperatura < 36 )
       msg = 'Hipotermia'

       return msg;
 }
