function addChore() {
    chores.push({
        task: `${getChore}`,
        isChecked: false,
        name: `${getName}`,
        date: '',
        deadLine: `${getDeadlineDate}`
    })
    isOpen = false;
    updateView();
}
function changeIsDone(checkbox, index){
    const isChecked = checkbox.checked;
    chores[index].isChecked = isChecked;
    if ('on') {chores[index].date = `${getDate()}`;}
updateView();
}
function getDate() {
    let thisDate = new Date().toISOString().substr(0, 10)
    return thisDate;
}
function saveChore(index) {
if (getName == '' || null) { getName = chores[index].name }
else { chores[index].name = getName; }
if (getChore == '') { getCheck = chores[index].task }
else { chores[index].task = getChore; }
if (getDeadlineDate == '') { getDeadlineDate = chores[index].deadLine }
else { chores[index].deadLine = getDeadlineDate; }
updateView();
}
function cancelChore() {
    isOpen = false;
    updateView();
}
function deleteChore(index) {
    chores.splice(index, 1)
    updateView();
}
function openAdd() {
    isOpen = true;
    updateView();
}