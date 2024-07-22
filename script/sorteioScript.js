
document.addEventListener('DOMContentLoaded', function() {
    const quantityForm = document.getElementById('quantity-form');
    const nameForm = document.getElementById('name-form');
    const namesModal = new bootstrap.Modal(document.getElementById('namesModal'));
    const saveNameButton = document.getElementById('save-name');

    let totalNames;
    let currentNameIndex = 0;
    const names = [
        { name: 'Smith', gender: 'male' },
        { name: 'Nicolas', gender: 'male' }
    ];

    quantityForm.addEventListener('submit', function(event) {
        event.preventDefault();
        totalNames = parseInt(document.getElementById('quantity').value);
        currentNameIndex = 0;
        showNextModal();
    });

    const showNextModal = () => {
        if (currentNameIndex < totalNames) {
            nameForm.reset(); // Clear the form fields
            namesModal.show();
        } else {
            sortTeams(names);
        }
    };

    saveNameButton.addEventListener('click', function() {
        const name = document.getElementById('name').value;
        const gender = document.getElementById('gender').value;
        if (name && gender) {
            names.push({ name, gender });
            currentNameIndex++;
            namesModal.hide();
            setTimeout(showNextModal, 500); // Show the next modal after a short delay
        }
    });

    const sortTeams = (names) => {
        const males = names.filter(n => n.gender === 'male');
        const females = names.filter(n => n.gender === 'female');
        const teams = [];

        while (females.length > 0 && males.length > 0) {
            teams.push([females.pop(), males.pop()]);
        }
        while (males.length > 1) {
            teams.push([males.pop(), males.pop()]);
        }

        displayTeams(teams);
    };

    const displayTeams = (teams) => {
        const resultContainer = document.createElement('div');
        resultContainer.className = 'container mt-5';
        resultContainer.innerHTML = '<h2 class="text-center">Duplas Sorteadas</h2>';
        const table = document.createElement('table');
        table.className = 'table table-bordered';
        const tbody = document.createElement('tbody');
        teams.forEach((team, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>Dupla ${index + 1}</td><td>${team[0].name} & ${team[1].name} (${team[0].gender === 'female' || team[1].gender === 'female' ? 'Dupla Mista' : 'Dupla Masculina'})</td>`;
            tbody.appendChild(row);
        });
        table.appendChild(tbody);
        resultContainer.appendChild(table);
        document.body.appendChild(resultContainer);
    };
});