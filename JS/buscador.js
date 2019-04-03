
    const app = document.getElementById('root');
    const container = document.createElement('div');
    container.setAttribute('class', 'container');
    app.appendChild(container);//guarda todo lo que hay en el container en el root(div)
    var db = new loki('trasmilenio.db');
    var estaciones = db.addCollection('estaciones');//se crea la variable para que tenga dentro la base de datos llamada estaciones

    $.ajax({
      method: "POST",
      data: '{"resource_id":"d0775af7-1706-4404-8bea-387194287d73","q":"","filters":{},"limit":1000,"offset":0}',
      url: "http://datosabiertos.bogota.gov.co/api/3/action/datastore_search",

    })
      .done(function (data) {

        data.result.records.forEach(item => {
          estaciones.insert({
            Estacion: item.Name,
            Troncal: item.Corredor,
            Codigo: item.Id,
            LatLon: { Lat: item.Latitud, Lon: item.Longitud },
            Rutas:[]
          });
        });
        $("#title").html("Registro importados: " + data.result.records.length);//muestra la cantidad de datos importados de la base de datos externa
        
      });

    function Ver(data) {
      container.innerHTML = "";
      data.forEach(item => {
       const card = document.createElement('div');
        card.setAttribute('class', 'card');
        const h1 = document.createElement('h1');
        h1.textContent = item.Estacion;
        const p = document.createElement('p');
        p.textContent = item.Troncal;
        container.appendChild(card);
        card.appendChild(h1);
        card.appendChild(p);
        item.Rutas.forEach(ruta => 
        {
          const r = document.createElement('p');
          r.textContent = ruta.Ruta;
          card.appendChild(r);
        });
      });
    }


    function VerWhere() {
      estaciones.where(function (estacion) {
        if(estacion.Troncal=="Calle 80")
        {  
          estacion.Rutas = [{ Ruta: "J23" },{ Ruta: "B3" }];
        }
      });

      Ver(estaciones.find());//invoca la funcion anterior
    }

    function Buscar() {
     var resultado =  estaciones.find({'Troncal': document.getElementById('buscarTroncal').value});
      Ver(resultado);
      //return hs.htmlExpand(this, { contentId: 'troncalCaracas' } )
    }
