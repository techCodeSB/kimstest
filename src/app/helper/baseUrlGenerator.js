const baseUrlGenerator = (lang = false, loc = false) => {
    let baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const langFromLocalStorage = JSON.parse(localStorage.getItem("systemLang"))
    const locationFromLocalStorage = JSON.parse(localStorage.getItem("systemLocation"));

    if (lang && langFromLocalStorage.default === false) {
        baseUrl = baseUrl + "/" + langFromLocalStorage.slug;
    }

    if(loc && locationFromLocalStorage.default === false){
        baseUrl = baseUrl + "/" + locationFromLocalStorage.slug;
    }

    return baseUrl;

}

export default baseUrlGenerator;
