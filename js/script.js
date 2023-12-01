const dynamicLists = Array.from(document.querySelectorAll('.populate'));

dynamicLists.forEach(list => {
    const parent = document.querySelector(`#${list.getAttribute('data-parent')}`);
    
    parent.addEventListener('change', (currentList => {
        return () => {
            populateList(currentList, parent.value);
        }
    })(list))
});

function populateList(list, value){
    options = Array.from(list.querySelectorAll('option'));
    options.forEach(option => {
        option.removeAttribute('selected');
        if(option.getAttribute('data-parent-value') == value){
            option.classList.remove('inactive');
        } else {
            option.classList.add('inactive');
        }
    })
    list.value = "";
    list.dispatchEvent(new Event('change'));
}