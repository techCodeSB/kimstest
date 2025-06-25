const detectedAndSetLocationORLanguage = async () => {
    console.log("=============================")
    console.log(process.env.NEXT_PUBLIC_CMS_API_URL)
    console.log("=============================")

    const mainUrl = new URL(window.location.href);
    const segments = mainUrl.pathname.split('/').filter(Boolean)
    const first = segments[0]
    const second = segments[1];
    let defaultLocation, defaultLang;
    let lang = { id: "", slug: "", default: "" };
    let loc = { id: "", slug: "", default: "" };

    const checkLang = async (param) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_CMS_API_URL}/i18n/locales`);
            const data = await response.json();

            const res = data.find(locale => locale.code === param);

            return res ? res : false;

        } catch (error) {
            console.log("Err:", error)
        }
    }

    const checkLoc = async (param) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_CMS_API_URL}/locations?filters[slug][$eq]=${param}`);
            const res = await response.json();

            return res.data.length > 0 ? res.data[0] : false

        } catch (error) {
            console.log("Err:", error)
        }
    }


    // Get Default Language;
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_CMS_API_URL}/i18n/locales`);
        const data = await response.json();

        const res = data.find(locale => locale.isDefault === true);

        defaultLang = res;

    } catch (error) {
        console.log("Err:", error)
    }


    // Get Default location;
    try {
        const req = await fetch(`${process.env.NEXT_PUBLIC_CMS_API_URL}/locations?filters[isDefault][$eq]=true`)
        const res = await req.json();

        defaultLocation = res.data[0];

    } catch (error) {
        console.log("Err:", error);
    }


    if (first === undefined) {
        lang = { id: defaultLang.code, slug: defaultLang.code, default: defaultLang.isDefault }
        loc = { id: defaultLocation.id, slug: defaultLocation.slug, default: defaultLocation.isDefault }
    }
    else if (second == undefined) {
        let checkL = await checkLang(first);
        if (checkL !== false) {
            lang = { id: checkL.code, slug: checkL.code, default: checkL.isDefault };
            loc = { id: defaultLocation.id, slug: defaultLocation.slug, default: defaultLocation.isDefault };
        } else {
            checkL = await checkLoc(first);
            if (checkL !== false) {
                lang = { id: defaultLang.code, slug: defaultLang.code, default: defaultLang.isDefault };
                loc = { id: checkL.id, slug: checkL.slug, default: checkL.isDefault }
            } else {
                lang = { id: defaultLang.code, slug: defaultLang.code, default: defaultLang.isDefault };
                loc = { id: defaultLocation.id, slug: defaultLocation.slug, default: defaultLocation.isDefault };
            }
        }
    }
    else {
        let checkL = await checkLang(first);
        if (checkL !== false) {
            lang = { id: checkL.code, slug: checkL.code, default: checkL.isDefault };;
            loc = { id: defaultLocation.id, slug: defaultLocation.slug, default: defaultLocation.isDefault };
        } else {
            checkL = await checkLoc(first);
            if (checkL !== false) {
                lang = { id: defaultLang.code, slug: defaultLang.code, default: defaultLang.isDefault };
                loc = { id: checkL.id, slug: checkL.slug, default: checkL.isDefault }
            } else {
                lang = { id: defaultLang.code, slug: defaultLang.code, default: defaultLang.isDefault };
                loc = { id: defaultLocation.id, slug: defaultLocation.slug, default: defaultLocation.isDefault };
            }
        }

        checkL = await checkLoc(second);
        if (checkL !== false) {
            loc = { id: checkL.id, slug: checkL.slug, default: checkL.isDefault }
        } else {
            loc = { id: defaultLocation.id, slug: defaultLocation.slug, default: defaultLocation.isDefault };
        }
    }

    // console.log("===============================")
    // console.log(`Location ${JSON.stringify(loc)}, Lang: ${JSON.stringify(lang)}`)
    // console.log("===============================")

    localStorage.setItem("systemLang", JSON.stringify(lang));
    localStorage.setItem("systemLocation", JSON.stringify(loc));

}


export default detectedAndSetLocationORLanguage;

