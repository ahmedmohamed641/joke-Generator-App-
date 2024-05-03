const loaderContainer = document.querySelector('.loader-container');

const displayLoading = () => {
    loaderContainer.style.display = 'block';
};

const hideLoading = () => {
    loaderContainer.style.display = 'none';
};

// do not export like this, if you have multiple functions to export use object exporting, like this:
/**
export {displayLoading, hideLoading}
**/
export {displayLoading};
export {hideLoading}


