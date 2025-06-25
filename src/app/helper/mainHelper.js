const mainHelper = {
    //Get all locations
    getLocations: async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_CMS_API_URL}/locations?filters[isDefault][$eq]=false`)
            const res = await response.json();

            return res.data;

        } catch (error) {
            console.log("Err:", error)
        }
    },


    // Get all languages;
    getLanguages: async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_CMS_API_URL}/i18n/locales`);
            const res = await response.json();

            return res;

        } catch (error) {
            console.log("Err:", error)
        }
    },


    // Get language from LocalStorege
    getLangAndLoc: (type) => {
        let data;

        if (type === "lang") {
            data = JSON.parse(localStorage.getItem("systemLang"));
        }
        else if (type === "loc") {
            data = JSON.parse(localStorage.getItem("systemLocation"));
        }

        return data;

    }


}


export default mainHelper;
