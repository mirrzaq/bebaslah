 nama = 'mirza';
  usia = '7';

let biodata = document.getElementById('biodata');

  function bebas(){
    let generasi;
    if(  usia < 9){
        generasi = "masih bocil wak";
    }else if(usia > 10 &&  usia < 20){
        generasi = "masih muda wak";
    }else if ( usia > 21 && usia < 40){
        generasi = "udah dewasa wak";
    }else if (usia > 41){
        generasi = "udah tua oi";
    }else{
    console.log('3 Nama saya '+ nama +', usia saya ' +usia)
  }
  return biodata.innerHTML = generasi;
}
  bebas();

