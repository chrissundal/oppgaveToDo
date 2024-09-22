updateView();
function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/`
    <table>
        <tr>
            <th class="header">Oppgave</th>
            <th class="header">Deadline dato</th>
            <th class="header">Ferdig dato</th>
            <th class="header">Hvem</th>
            <th class="header">Ferdig?</th>
            <th class="header">Endre</th>
        </tr>
        ${createTable()}
        </table>
        <div class="addChoreBtn">${createAddTask()}</div>
        <div class="showEditChore">${editTaskText}</div><br>
        `;
    editTaskText = '';

}

function createAddTask() {
    if (isOpen == false) return `<button onclick="openAdd()">Legg til ny oppgave</button>`;
    return `
    <table>
        <tr>
            <th class="header">Hva skal gjøres?</th>
            <th class="header">Når er deadline?</th>
            <th class="header">Hvem skal gjøre oppgaven?</th>
            <th class="header"></th>
        </tr>
        <tr>
        <td><input type="text" placeholder="Skriv tekst..." oninput="getChore=this.value"/></td>
        <td><input type="date" oninput="getDeadlineDate=this.value"/></td>
        <td><select onchange="getName=this.value">
            <option ${getName == null ? 'selected' : ''}></option>
            <option value="Lisa" ${getName == 'Lisa' ? 'selected' : ''}>Lisa</option>
            <option value="Frank" ${getName == 'Frank' ? 'selected' : ''}>Frank</option>
            <option value="Anne" ${getName == 'Anne' ? 'selected' : ''}>Anne</option>
            <option value="Bjarne" ${getName == 'Bjarne' ? 'selected' : ''}>Bjarne</option>
        </select></td>
        <td>
            <button onclick="addChore()">Legg til oppgave</button>
            <button onclick="cancelChore()">Avbryt</button>
        </td>
    </tr>
    </table>
        `;
}
function createTable() {
    let html = '';
    for (let index = 0; index < chores.length; index++) {
        const checkedHtml = chores[index].isChecked ? 'checked="checked"' : '';
        const dateHtml = chores[index].isChecked ? chores[index].date : '';
        html += /*HTML*/`
        <tr>
            <td>${chores[index].task}</td>
            <td><input type="date" value="${chores[index].deadLine}" disabled></td>
            <td><input type="date" value="${dateHtml}" disabled></td>
            <td class="header">${chores[index].name}</td>
            <td class="header"><input class="checkB" type="checkbox" onchange="changeIsDone(this, ${index})" ${checkedHtml}></td>
            <td class="header"><button onclick="editTask(${index})">Endre</button></td>
        </tr>
        `;
    }
    return html;
}
function editTask(index) {
    getCheck = '';
    getChore = '';
    getName = '';
    editTaskText = `
    <table>
        <tr>
            <th class="header">Endre hva</th>
            <th class="header">Endre deadline</th>
            <th class="header">Endre hvem</th>
            <th class="header"></th>
        </tr>
        <tr>
            <td><input type="text" oninput="getChore=this.value" value="${chores[index].task}"/></td>
            <td><input type="date" oninput="getDeadlineDate=this.value"/></td>
            <td><select onchange="getName=this.value">
                <option ${getName == null ? 'selected' : ''}></option>
                <option value="Lisa" ${getName == 'Lisa' ? 'selected' : ''}>Lisa</option>
                <option value="Frank" ${getName == 'Frank' ? 'selected' : ''}>Frank</option>
                <option value="Anne" ${getName == 'Anne' ? 'selected' : ''}>Anne</option>
                <option value="Bjarne" ${getName == 'Bjarne' ? 'selected' : ''}>Bjarne</option>
            </select></td>
            <td>
                <button onclick="saveChore(${index})">Lagre</button>
                <button onclick="updateView()">Avbryt</button>
                <button onclick="deleteChore(${index})">Slett</button>
            </td>
        </tr>
    </table>
        `;
    updateView();
}

