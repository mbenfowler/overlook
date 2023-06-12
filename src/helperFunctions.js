const getRandomIndex = (array) => {
    return Math.floor(Math.random() * array.length);
}

const toggleBtns = elements => {
    elements.forEach(element => {
      element.classList.toggle('selected-view')
      element.classList.toggle('unselected-view')
    })
}

export { getRandomIndex, toggleBtns }
