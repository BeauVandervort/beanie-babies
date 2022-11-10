export function renderBeanie(beanie) {
    // create a list item for each beanie with a class of card
    const li = document.createElement('li');
    li.classList.add('card');

    // display img
    const img = document.createElement('img');
    img.src = beanie.image;
    img.alt = beanie.title;

    // create a div element with a class of content
    const content = document.createElement('div');
    content.classList.add('content');

    // create h2
    const h2 = document.createElement('h2');
    h2.textContent = beanie.title;

    // create p element with class of attributes to hold info
    const attributes = document.createElement('p');
    attributes.classList.add('attributes');

    // spans for animal and astroSign
    const animal = document.createElement('span');
    animal.textContent = beanie.animal;
    // remove subTheme
    const astroSign = document.createElement('span');
    astroSign.textContent = beanie.astroSign;
    // append to attributes class
    attributes.append(animal, astroSign);

    // create p element for released
    const released = document.createElement('p');
    released.classList.add('released');
    released.textContent = `Released ${beanie.releaseYear}`;

    // style h2, attributes, and released with .content
    content.append(h2, attributes, released);

    // append img and content to li
    li.append(img, content);

    return li;
}

export function renderAstroSign(astroSign) {
    const option = document.createElement('option');
    option.value = astroSign.name;
    option.textContent = astroSign.name;
    return option;
}
