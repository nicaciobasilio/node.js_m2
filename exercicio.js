// Exercício 1
const cars = [
    {
        placa: "HPV-2885",
        modelo: "Chevrolet Onix",
        ano: 2012,
    },
    {
        placa: "HNK-7693",
        modelo: "Renault Sandero",
        ano: 2007,
    },
    {
        placa: "JQQ-1692",
        modelo: "Ford Fiesta",
        ano: 2015,
    },
    {
        placa: "MUA-8882",
        modelo: "Toyota Hilux",
        ano: 2023,
    }
]

// Exercício 2
const newModel = {
    placa: "DCF-3343",
    modelo: "T-cross",
    ano: 2022,
}

const carsList = cars.push(newModel)

// Exercício 3
cars.sort((a, b) => {
    if (a.modelo < b.modelo) {
        return -1;
    } else if (a.modelo > b.modelo) {
        return 1;
    } else {
        return 0;
    }
});

console.log(cars);

// // Exercício 4
function getCarrosRodizio(diaSemana, listaCarros) {
    let finalPlacas = [];
    switch (diaSemana) {
        case 'Segunda':
            finalPlacas = ['1', '2'];
            break;
        case 'Terça':
            finalPlacas = ['3', '4'];
            break;
        case 'Quarta':
            finalPlacas = ['5', '6'];
            break;
        case 'Quinta':
            finalPlacas = ['7', '8'];
            break;
        case 'Sexta':
            finalPlacas = ['9', '0'];
            break;
        default:
            return 'Não há carros disponíveis neste dia!';
    }

    const carrosRodizio = listaCarros.filter((carro) =>
        finalPlacas.includes(carro.placa.substr(carro.placa.length - 1))
    );

    return carrosRodizio;
}

console.log(getCarrosRodizio('Terça', cars));

// Exercício 5

const diasSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
let i = 0;

while (i < diasSemana.length) {
    let modelos = '';
    if (diasSemana[i] === 'Sábado' || diasSemana[i] === 'Domingo') {
        console.log(`Não há carros disponíveis no sábado e domingo.`);
    } else {
        const carrosDisponiveis = getCarrosRodizio(diasSemana[i], cars);
        for (let j = 0; j < carrosDisponiveis.length; j++) {
            modelos += carrosDisponiveis[j].modelo;
            if (j !== carrosDisponiveis.length - 1) {
                modelos += ', ';
            }
        }
        console.log(`Os carros disponíveis na ${diasSemana[i]} são os modelos: ${modelos}.`);
    }
    i++;
}
