var posBus = (function(){
    var posStart = 0;
    var pos = 0;
    var previosPos = 0;
    var increase = 0;
    var stages = 1;
    function changePos(newPos){
        //debugger;
        previosPos = pos;
        pos = (newPos * increase) + (parseInt((increase / 2)) - 40);
    }
    function setIncrease(newIncrease){
        increase = newIncrease;
    }
    function setStages(nStages){
        stages = nStages;
    }
    function setPrevious(previous){
        previosPos = previous;
    }
    function setStart(start){
        posStart = start;
    }
    return{
        getValue: function(){
            return pos;
        },
        getPreciousPos: function(){
            return previosPos;
        },
        getMovement: function(){
            return increase;
        },
        getStages: function(){
            return stages;
        },
        getStart: function(){
            return posStart;
        },
        move: function(newPos){
            changePos(newPos);
        },
        setIncrease: function(valueIncrease){
            setIncrease(valueIncrease);
        },
        setStages: function(stages){
            setStages(stages);
        },
        setPrevious: function(previous){
            setPrevious(previous);
        },
        setStart: function(start){
            setStart(start);
        }
    }
})();

var infoTrunck = [];
var trunks = [];
var posTroncal;

function fillStages(){
    //A
    infoTrunck.push({name: "Caracas", inicio: "Calle 76",
        fin: "Calle 19", longitud: "8.0 Km", url: "img/Troncales/Caracas.jpg"});
    var stages = [];
    stages.push({name: "Calle 76", url: "img/Estaciones/caracas/Calle_76.jpg"});
    stages.push({name: "Calle 72", url: "img/Estaciones/caracas/Calle_72.jpg"});
    stages.push({name: "Flores", url: "img/Estaciones/caracas/Flores.jpg"});
    stages.push({name: "Calle 63", url: "img/Estaciones/caracas/Calle_63.jpg"});
    stages.push({name: "Calle 57", url: "img/Estaciones/caracas/Calle_57.jpg"});
    stages.push({name: "Marly", url: "img/Estaciones/caracas/Marly.jpg"});
    stages.push({name: "Calle 45", url: "img/Estaciones/caracas/Calle_45.jpg"});
    stages.push({name: "AV. 39", url: "img/Estaciones/caracas/Av_39.jpg"});
    stages.push({name: "Profamilia", url: "img/Estaciones/caracas/"});
    stages.push({name: "Calle 26", url: "img/Estaciones/caracas/Calle_26.jpg"});
    stages.push({name: "Calle 22", url: "img/Estaciones/caracas/Calle_22.jpg"});
    stages.push({name: "Calle 19", url: "img/Estaciones/caracas/Calle_19.jpg"});
    stages.push({name: "AV Jimenez", url: "img/Estaciones/caracas/Av_Jimenez.jpg"});
    stages.push({name: "Tercer Milenio", url: "img/Estaciones/caracas/Tercer_Milenio.jpg"});    
    trunks.push(stages);
    //B
    infoTrunck.push({name: "Autopista Norte", inicio: "Terminal", 
        fin: "Héroes", longitud: "12.0 Km", url: "img/Troncales/Caracas.jpg"});
    stages = [];
    stages.push({name: "Terminal", url: "img/Estaciones/autonorte/Terminal.jpg"});
    stages.push({name: "Calle 187", url: "img/Estaciones/autonorte/CL_187.jpg"});
    stages.push({name: "Portal del Norte", url: "img/Estaciones/autonorte/Portal_Norte.jpg"});
    stages.push({name: "Toberín", url: "img/Estaciones/autonorte/Toberin.jpg"});
    stages.push({name: "Cardio Infantil", url: "img/Estaciones/autonorte/Cardio_Infantil.jpg"});
    stages.push({name: "Mazurén", url: "img/Estaciones/autonorte/Mazuren.jpg"});
    stages.push({name: "Calle 146", url: "img/Estaciones/autonorte/Calle_146.jpg"});
    stages.push({name: "Calle 142", url: "img/Estaciones/autonorte/Calle_142.jpg"});
    stages.push({name: "Alcalá", url: "img/Estaciones/autonorte/Alcala.jpg"});
    stages.push({name: "Prado", url: "img/Estaciones/autonorte/Prado.jpg"});
    stages.push({name: "Calle 127", url: "img/Estaciones/autonorte/Calle_127.png"});
    stages.push({name: "Pepe Sierra", url: "img/Estaciones/autonorte/Pepe_Sierra.png"});
    stages.push({name: "Calle 106", url: "img/Estaciones/autonorte/Calle_106.jpg"});
    stages.push({name: "Calle 100", url: "img/Estaciones/autonorte/Calle_100.jpg"});
    stages.push({name: "Virrey", url: "img/Estaciones/autonorte/Virrey.jpg"});
    stages.push({name: "Calle 85", url: "img/Estaciones/autonorte/Calle_85.jpg"});
    stages.push({name: "Héroes", url: "img/Estaciones/autonorte/Heroes.jpg"});
    trunks.push(stages);
    //C
    infoTrunck.push({name: "Avenida Suba", inicio: "Portal de Suba",
        fin: "San Martín", longitud: "9.5 Km", url: "img/Troncales/Suba.jpg"});
    stages = [];
    stages.push({name: "Portal de Suba", url: "img/Estaciones/suba/Portal_Suba.jpeg"});
    stages.push({name: "La campiña", url: "img/Estaciones/suba/Campina.jpeg"});
    stages.push({name: "Suba - TV 91", url: "img/Estaciones/suba/Suba_TV_91.jpeg"});
    stages.push({name: "21 Ángeles", url: "img/Estaciones/suba/21_Angeles.jpeg"});
    stages.push({name: "Gratamira", url: "img/Estaciones/suba/Gratamira.jpeg"});
    stages.push({name: "Suba - AV. Boyacá", url: "img/Estaciones/suba/suba_av_boyaca.jpeg"});
    stages.push({name: "Nizza - CL 127", url: "img/Estaciones/suba/Niza_CL_127.jpeg"});
    stages.push({name: "Humedal Córdoba", url: "img/Estaciones/suba/Humedal_Cordoba.jpeg"});
    stages.push({name: "Shaio", url: "img/Estaciones/suba/Shaio.jpeg"});
    stages.push({name: "Puente Largo", url: "img/Estaciones/suba/Puente_Largo.jpeg"});
    stages.push({name: "Suba - CL 100", url: "img/Estaciones/suba/CL_100.jpeg"});
    stages.push({name: "Suba - CL 95", url: "img/Estaciones/suba/CL_95.jpeg"});
    stages.push({name: "Rionegro", url: "img/Estaciones/suba/Rio_Negro.jpeg"});
    stages.push({name: "San Martín", url: "img/Estaciones/suba/San_Martin.jpeg"});
    trunks.push(stages);
    //D
    infoTrunck.push({name: "Calle 80", inicio: "Portal de la 80",
        fin: "Polo", longitud: "7.5 Km", url: "img/Troncales/Calle80.jpg"});
    stages = [];
    stages.push({name: "Portal de la 80", url: "img/Estaciones/calle_80/Portal_80.jpg"});
    stages.push({name: "Quirigua", url: "img/Estaciones/calle_80/Quirigua.jpg"});
    stages.push({name: "Carrera 90", url: "img/Estaciones/calle_80/Carrera_90.jpg"});
    stages.push({name: "Avenida Cali", url: "img/Estaciones/calle_80/Avenida_Cali.jpg"});
    stages.push({name: "Granja - Carrera 77", url: "img/Estaciones/calle_80/Granja_Carrera_77.jpg"});
    stages.push({name: "Minuto de Dios", url: "img/Estaciones/calle_80/Minuto_de_Dios.jpg"});
    stages.push({name: "Boyacá", url: "img/Estaciones/calle_80/Boyaca.jpg"});
    stages.push({name: "Ferias", url: "img/Estaciones/calle_80/Ferias.jpg"});
    stages.push({name: "Avenida 68", url: "img/Estaciones/calle_80/Avenida_68.jpg"});
    stages.push({name: "Carrera 53", url: "img/Estaciones/calle_80/Carrera_53.jpg"});
    stages.push({name: "Carrera 47", url: "img/Estaciones/calle_80/Carrera_47.jpg"});
    stages.push({name: "Escuela Militar", url: "img/Estaciones/calle_80/Escuela_Militar.jpg"});
    stages.push({name: "Polo", url: "img/Estaciones/calle_80/Polo.jpg"});
    trunks.push(stages);
    //E
    infoTrunck.push({name: "NQS Central", inicio: "La Castellana",
        fin: "Tygua - San José", longitud: "11.5 Km", url: "img/Troncales/NQSCentral.jpg"});
    stages = [];
    stages.push({name: "La Castellana", url: "img/Estaciones/NQS_central/Castellana.jpg"});
    stages.push({name: "NQS - Calle 75", url: "img/Estaciones/NQS_central/NQS_Calle_75.jpg"});
    stages.push({name: "AV. Chile", url: "img/Estaciones/NQS_central/AV_Chile.jpg"});
    stages.push({name: "Simón Bolivar", url: "img/Estaciones/NQS_central/Simon_Bolivar.jpg"});
    stages.push({name: "Coliseo", url: "img/Estaciones/NQS_central/Movistar_Arena.png"});
    stages.push({name: "Campín - U. Antonio Nariño", url: "img/Estaciones/NQS_central/Campin_U_Antonio_Narino.jpg"});
    stages.push({name: "U. Nacional", url: "img/Estaciones/NQS_central/U_Nacional.png"});
    stages.push({name: "AV. El dorado", url: "img/Estaciones/NQS_central/AV_El_Dorado.jpg"});
    stages.push({name: "CAD", url: "img/Estaciones/NQS_central/CAD.jpg"});
    stages.push({name: "Paloquemao", url: "img/Estaciones/NQS_central/Paloquemao.jpg"});
    stages.push({name: "Ricaurte (NQS)", url: "img/Estaciones/NQS_central/Ricaurte.png"});
    stages.push({name: "Guatoque - Veraguas", url: "img/Estaciones/NQS_central/Guatoque_Veraguas.jpg"});
    stages.push({name: "Tygua - San José", url: "img/Estaciones/NQS_central/Tygua_San_Jose.jpg"});
    trunks.push(stages);
    //F
    infoTrunck.push({name: "Avenida las Américas", inicio: "Portal de las Américas",
        fin: "Avenida Jimenez", longitud: "12.5 Km", url: "img/Troncales/Americas.jpg"});
    stages = [];
    stages.push({name: "Portal de las Américas", url: "img/Estaciones/americas/Portal_Americas.jpg"});
    stages.push({name: "Patio Bonito", url: "img/Estaciones/americas/Patio_Bonito.jpg"});
    stages.push({name: "Biblioteca Tintal", url: "img/Estaciones/americas/Biblioteca_Tintal.jpg"});
    stages.push({name: "Transversal 86", url: "img/Estaciones/americas/Transversal_86.jpg"});
    stages.push({name: "Banderas", url: "img/Estaciones/americas/Banderas.jpg"});
    stages.push({name: "Mandalay", url: "img/Estaciones/americas/Mandalay.jpg"});
    stages.push({name: "Mundo Aventura", url: "img/Estaciones/americas/Mundo_Aventura.jpg"});
    stages.push({name: "Marsella", url: "img/Estaciones/americas/Marsella.jpg"});
    stages.push({name: "Pradera", url: "img/Estaciones/americas/Pradera.jpg"});
    stages.push({name: "Américas - KR 53A", url: "img/Estaciones/americas/Cra_53_A.jpg"});
    stages.push({name: "Puente Aranda", url: "img/Estaciones/americas/Puente_Aranda.jpg"});
    stages.push({name: "Carrera 43", url: "img/Estaciones/americas/Cra_43.jpg"});
    stages.push({name: "Zona Industrial", url: "img/Estaciones/americas/Zona_Industrial.jpg"});
    stages.push({name: "CDS - Carrera 32", url: "img/Estaciones/americas/Cra_32.jpg"});
    stages.push({name: "Ricaurte (CL 13)", url: "img/Estaciones/americas/Ricaurte.jpg"});
    stages.push({name: "San Facon - KR 22", url: "img/Estaciones/Camericas/Cra_22.jpg"});
    stages.push({name: "De la Sabana", url: "img/Estaciones/americas/Sabana.jpg"});
    stages.push({name: "AV. Jimenez", url: "img/Estaciones/americas/Av_Jimenez.jpg"});
    trunks.push(stages);
    //G
    infoTrunck.push({name: "NQS Sur", inicio: "Comuneros",
        fin: "San Mateo", longitud: "13.0 Km", url: "img/Troncales/NQSSur.jpg"});

    stages = [];
    stages.push({name: "Comuneros", url: "img/Estaciones/NQS_sur/Comuneros.jpg", address: "AV. NQS - CL 5"});
    stages.push({name: "Santa Isabel", url: "img/Estaciones/NQS_sur/Santa_Isabel.jpg"});
    stages.push({name: "SENA", url: "img/Estaciones/NQS_sur/SENA.jpg"});
    stages.push({name: "NQS - CL 30 S", url: "img/Estaciones/NQS_sur/NQS_Calle_30.jpg"});
    stages.push({name: "NQS - CL 38A S", url: "img/Estaciones/NQS_sur/NQS_Calle_38_A.jpg"});
    stages.push({name: "General Santander", url: "img/Estaciones/NQS_sur/General_Santander.png"});
    stages.push({name: "Alquería", url: "img/Estaciones/NQS_sur/Alqueria.jpg"});
    stages.push({name: "Venecia", url: "img/Estaciones/NQS_sur/Venecia.jpg"});
    stages.push({name: "Sevillana", url: "img/Estaciones/NQS_sur/Sevillana.jpg"});
    stages.push({name: "Madelena", url: "img/Estaciones/NQS_sur/Madelena.jpg"});
    stages.push({name: "Perdomo", url: "img/Estaciones/NQS_sur/Perdomo.jpg"});
    stages.push({name: "Portal del Sur", url: "img/Estaciones/NQS_sur/Portal_Sur.jpg"});
    stages.push({name: "Bosa", url: "img/Estaciones/NQS_sur/Bosa.jpg"});
    stages.push({name: "La Despensa", url: "img/Estaciones/NQS_sur/Despensa.jpg"});
    stages.push({name: "León XIII", url: "img/Estaciones/NQS_sur/Leon_XIII.jpg"});
    stages.push({name: "Terreros - Hospital C.V.", url: "img/Estaciones/NQS_sur/Terreros.jpg"});
    stages.push({name: "San Mateo", url: "img/Estaciones/NQS_sur/San_Mateo.jpg"});
    trunks.push(stages);
    //H1
    infoTrunck.push({name: "Caracas Sur (Usme)", inicio: "Hospital",
        fin: "Portal de Usme", longitud: "10.0 Km", url: "img/Troncales/CaracasSur.jpg"});
    stages = [];
    stages.push({name: "Hospital", url: "img/Estaciones/caracas_sur/Hospital.jpg"});
    stages.push({name: "Hortúa", url: "img/Estaciones/caracas_sur/Hortua.jpg"});
    stages.push({name: "Nariño", url: "img/Estaciones/caracas_sur/Narino.jpg"});
    stages.push({name: "Fucha", url: "img/Estaciones/caracas_sur/Fucha.jpg"});
    stages.push({name: "Restrepo", url: "img/Estaciones/caracas_sur/Restrepo.jpg"});
    stages.push({name: "Olaya", url: "img/Estaciones/caracas_sur/Olaya.jpg"});
    stages.push({name: "Quiroga", url: "img/Estaciones/caracas_sur/Quiroga.jpg"});
    stages.push({name: "Calle 40 S", url: "img/Estaciones/caracas_sur/Calle_40_Sur.jpg"});
    stages.push({name: "Santa Lucia", url: "img/Estaciones/caracas_sur/Santa_Lucia.jpg"});
    stages.push({name: "Socorro", url: "img/Estaciones/caracas_sur/Socorro.jpg"});
    stages.push({name: "Consuelo", url: "img/Estaciones/caracas_sur/Consuelo.jpg"});
    stages.push({name: "Molinos", url: "img/Estaciones/caracas_sur/Molinos.jpg"});
    stages.push({name: "Portal Usme", url: "img/Estaciones/caracas_sur/Portal_Usme.jpg"});
    trunks.push(stages);
    //H2
    infoTrunck.push({name: "Caracas Sur (Tunal)", inicio: "Biblioteca",
        fin: "Portal del Tunal", longitud: "6.75 Km", url: "img/Troncales/CaracasTunalSur.jpg"});
    stages = [];
    stages.push({name: "Biblioteca", url: "img/Estaciones/caracas_sur/Biblioteca.jpg"});
    stages.push({name: "Parque", url: "img/Estaciones/caracas_sur/Parque.jpg"});
    stages.push({name: "Portal Tunal", url: "img/Estaciones/caracas_sur/Portal_Tunal.jpg"});
    trunks.push(stages);
    //J
    infoTrunck.push({name: "Eje Ambiental", inicio: "Museo del Oro",
        fin: "Universidades", longitud: "1.5 Km", url: "img/Troncales/EjeAmbiental.jpg"});
    stages = [];
    stages.push({name: "Musueo del Oro", url: "img/Estaciones/eje_ambiental/Museo_Oro.jpg"});
    stages.push({name: "Aguas", url: "img/Estaciones/eje_ambiental/Aguas.jpg"});
    trunks.push(stages);
    //K
    infoTrunck.push({name: "Avenida el Dorado", inicio: "Portal el Dorado",
        fin: "Centro Memoria", longitud: "11.0 Km", url: "img/Troncales/Calle26.jpg"});
    stages = [];
    stages.push({name: "Portal el Dorado", url: "img/Estaciones/calle_26/CAN.jpg"});
    stages.push({name: "Modelia", url: "img/Estaciones/calle_26/Modelia.jpg"});
    stages.push({name: "Normandía", url: "img/Estaciones/calle_26/Normandia.jpg"});
    stages.push({name: "AV. Rojas", url: "img/Estaciones/calle_26/AV_Rojas.jpg"});
    stages.push({name: "El Tiempo - Maloka", url: "img/Estaciones/calle_26/Tiempo_Maloka.jpg"});
    stages.push({name: "Salitre - El Greco", url: "img/Estaciones/calle_26/Salitre_Greco.jpg"});
    stages.push({name: "CAN", url: "img/Estaciones/calle_26/CAN.jpg"});
    stages.push({name: "Gobernación", url: "img/Estaciones/calle_26/Gobernacion.jpg"});
    stages.push({name: "Quinta Paredes", url: "img/Estaciones/calle_26/Quinta_Paredes.jpg"});
    stages.push({name: "Corferias", url: "img/Estaciones/calle_26/Corferias.jpg"});
    stages.push({name: "Ciudad Universitaria", url: "img/Estaciones/calle_26/Ciudad_Universitaria.jpg"});
    stages.push({name: "Concejo de Bogota", url: "img/Estaciones/calle_26/Concejo_Bogota.jpg"});
    stages.push({name: "Centro Memoria", url: "img/Estaciones/calle_26/Centro_Memoria.jpg"});
    stages.push({name: "Universidades", url: "img/Estaciones/eje_ambiental/Aguas.jpg"});
    trunks.push(stages);
    //L
    infoTrunck.push({name: "Carrera Décima", inicio: "San Diego",
        fin: "Portal 20 de Julio", longitud: "6.5 Km", url: "img/Troncales/CarreraDecima.jpg"});
    stages = [];
    stages.push({name: "San Diego", url: "img/Estaciones/carrera_10/San_Diego.jpg"});
    stages.push({name: "Las Nieves", url: "img/Estaciones/carrera_10/Nieves.jpg"});
    stages.push({name: "San Victorino", url: "img/Estaciones/carrera_10/San_Victorino.jpg"});
    stages.push({name: "Bicentenario", url: "img/Estaciones/carrera_10/Bicentenario.jpg"});
    stages.push({name: "Hospitales", url: "img/Estaciones/carrera_10/San_bernando.jpg"});
    stages.push({name: "Policarpa", url: "img/Estaciones/carrera_10/Policarpa.jpg"});
    stages.push({name: "Ciudad Jardín - UAN", url: "img/Estaciones/carrera_10/Ciudad_Jardin.jpg"});
    stages.push({name: "AV. 1° Mayo", url: "img/Estaciones/carrera_10/AV_1_Mayo.jpg"});
    stages.push({name: "Country Sur", url: "img/Estaciones/carrera_10/Country_Sur.jpg"});
    stages.push({name: "Portal 20 de Julio", url: "img/Estaciones/carrera_10/Portal_20_Julio.jpg"});
    trunks.push(stages);
    //M
    infoTrunck.push({name: "Carrera Séptima", inicio: "Museo Nacional",
        fin: "Museo Nacional", longitud: "0.5 Km", url: "img/Troncales/CarreraSeptima.jpg"});
    stages = [];
    stages.push({name: "Museo Nacional", url: "img/Estaciones/carrera_7/Museo_Nacional.jpg"});
    trunks.push(stages);
}

function showTroncal(pos){
    document.getElementById("troncal").style.display = "block";
    posBus.setStages(trunk.find({Name: pos}).Stages.length);
    posBus.setStages(trunks[pos].length);
    posTroncal = trunk.find({Name: pos}).id;
    posBus.setIncrease(parseInt(900 / trunks[pos].length));
    showTrunckAgain();
    createPopUp(pos);
}

function hideTroncal(id){
    posTroncal = 0;
    document.getElementById(id).style.display = "none";
}

function moveBus(){
    pos = parseInt(this.innerText) - 1;

    var bus = document.getElementById("img-bus");
    var title = document.getElementById("trunk-name").innerText = trunks[posTroncal][pos].name;
    var image = document.getElementById("trunk-image");
    image.src = trunks[posTroncal][pos].url;
    image.alt = trunks[posTroncal][pos].name;

    var hidden = document.getElementById("aux-pos");
    hidden.value = hidden.value.substring(0, hidden.value.indexOf(":")) + ":" + pos;

    posBus.move(pos);
    bus.animate(
        [{left: posBus.getPreciousPos() + "px"}, {left: posBus.getValue() + "px"}],
        {fill: 'forwards', duration: 1000 + (100 * Math.abs(pos - posBus.getStages()))} 
    );  
}


function createPopUp(pos){
    //document.getElementById("title-troncal").innerText = infoTrunck[pos].name;
    document.getElementById("title-troncal").innerText = trunk.get(pos + 1).Name;
    document.getElementById("start-trunk").innerText = infoTrunck[pos].inicio;
    document.getElementById("end-trunk").innerText = infoTrunck[pos].fin;
    document.getElementById("length-trunk").innerText = infoTrunck[pos].longitud;
    document.getElementById("img-troncal").src = infoTrunck[pos].url;

    document.getElementById("trunk-name").innerText = trunks[pos][0].name;
    document.getElementById("trunk-image").src = trunks[pos][0].url;
    document.getElementById("trunk-image").alt = trunks[pos][0].name;
    document.getElementById("aux-pos").value = pos + ":" + 0;
    

    var line_time = document.getElementById("line-timeID");

    var stages = document.getElementById('line-time-buttons');
    while (stages.firstChild) {
        stages.removeChild(stages.firstChild);
    }
    
    for(var i = 0; i < trunks[pos].length; i++){
        var div = document.createElement('div');
        var button = document.createElement('button');
        var icon = document.createElement('i');
        icon.classList.add("material-icons");
        icon.innerText = "add_circle_outline";
        button.appendChild(icon);
        var aux = i;
        button.addEventListener('click', moveBus);
        button.innerText = i + 1;

        var titleCard = document.createElement('h2');
        titleCard.innerText = trunks[pos][i].name;
        div.appendChild(button);
        div.appendChild(titleCard);
        stages.appendChild(div);
    }
    stages.style.setProperty('grid-template-columns', `repeat(${trunks[pos].length}, 1fr)`);
    line_time.appendChild(stages);

    var first = parseInt(posBus.getMovement() / 2) - 40;

    if(first < 0){
        first = 0;
    }

    posBus.setStart(first);

    document.getElementById("img-bus").animate(
        [{left: posBus.getPreciousPos() + "px"}, {left: first + "px"}],
        {fill: 'forwards', duration: 1000 + (100 * Math.abs(pos - posBus.getStages()))} 
    );
}

function showStages(){
    document.getElementById("btn-back").style.display = "block";
    document.getElementById("show-troncal").style.display = "none";
    document.getElementById("show-stages").style.display = "inline-block";

    var parts = (document.getElementById("aux-pos").value).split(":");
    document.getElementById("title-troncal").innerText = trunks[parts[0]][parts[1]].name;
    document.getElementById("img-stage").src = trunks[parts[0]][parts[1]].url;
}

function showTrunckAgain(){
    document.getElementById("btn-back").style.display = "none";
    document.getElementById("show-troncal").style.display = "block";
    document.getElementById("show-stages").style.display = "none";

    var parts = (document.getElementById("aux-pos").value).split(":");
    if(parts[0]){
        document.getElementById("title-troncal").innerText = infoTrunck[parseInt(parts[0])].name;
    }
}

function load(){

    fillStages();

}

//función para rotar el banner
function alternar_banner(){
    document.getElementById("banner").src = array_imagen[contador].src;
    document.getElementById("title-news").innerText = array_names[contador];
    document.getElementById("link-img").href = array_url[contador];
    contador++;
    contador = contador % array_imagen.length;
    setTimeout("alternar_banner()",2000);
}

