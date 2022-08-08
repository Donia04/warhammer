const app = document.getElementById('app');

const datasheets = [
    {
        id: 1,
        name: 'GRANDMASTER in NEMESIS DREADKNIGHT',
        src: 'gm_in_dk.jpeg',
        role: 'HQ',
        stats: ['9"', '2+', '2+', '6', '6', '13', '6', '9', '2+']
    },
    {
        id: 2,
        name: 'BROTHERHOOD CHAMPION',
        src: 'champion.jpeg',
        role: 'HQ',
        stats: ['6"', '2+', '2+', '4', '4', '14', '6', '9', '2+']
    },
    {
        id: 4,
        name: 'STRIKE SQUAD',
        src: 'champion.jpeg',
        role: 'Troop',
        stats: ['6"', '3+', '3+', '4', '4', '2', '3', '8', '3+']
    }
]

// Tidy
function fillGrid() {
    while (app.firstChild) {
        app.removeChild(app.firstChild);
    }

    app.className = 'grid';
    for (let sheet of datasheets) {
        let unit = document.createElement('div');
        unit.className = 'card';
        unit.innerHTML = `<p>${sheet.name}</p><img src="../resources/images/${sheet.src}" />`;

        unit.addEventListener('click', () => {
            fillDatasheet(sheet.id)
        })
        app.append(unit);
    }
}

fillGrid();

function fillDatasheet(sheetId) {
    let data;
    datasheets.forEach(datasheet => {
        if (datasheet.id === sheetId) {
            data = datasheet
        }
    })

    while (app.firstChild) {
        app.removeChild(app.firstChild);
    }
    app.className = 'datasheet';

    const template = document.querySelector('template');
    let datasheet = template.content.cloneNode(true);

    datasheet.querySelector('button').onclick = fillGrid;

    datasheet.querySelector('img').src = `../resources/images/${data.src}`;
    datasheet.querySelector('h3').textContent = data.name;

    let stats = datasheet.querySelector('.values').children
    for (let i = 0; i < 9; i++) {
        stats[i].textContent = data.stats[i];
    }

    //datasheet.button
    app.append(datasheet);
}