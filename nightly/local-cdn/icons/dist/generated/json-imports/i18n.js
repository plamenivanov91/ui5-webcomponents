// @ts-nocheck
import { registerI18nLoader } from "@ui5/webcomponents-base/dist/asset-registries/i18n.js";
const importMessageBundle = async (localeId) => {
    switch (localeId) {
        case "ar": return (await import(/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-ar" */ "../assets/i18n/messagebundle_ar.json")).default;
        case "bg": return (await import(/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-bg" */ "../assets/i18n/messagebundle_bg.json")).default;
        case "ca": return (await import(/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-ca" */ "../assets/i18n/messagebundle_ca.json")).default;
        case "cnr": return (await import(/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-cnr" */ "../assets/i18n/messagebundle_cnr.json")).default;
        case "cs": return (await import(/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-cs" */ "../assets/i18n/messagebundle_cs.json")).default;
        case "cy": return (await import(/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-cy" */ "../assets/i18n/messagebundle_cy.json")).default;
        case "da": return (await import(/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-da" */ "../assets/i18n/messagebundle_da.json")).default;
        case "de": return (await import(/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-de" */ "../assets/i18n/messagebundle_de.json")).default;
        case "el": return (await import(/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-el" */ "../assets/i18n/messagebundle_el.json")).default;
        case "en": return (await import(/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-en" */ "../assets/i18n/messagebundle_en.json")).default;
        case "en_GB": return (await import(/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-en_GB" */ "../assets/i18n/messagebundle_en_GB.json")).default;
        case "en_US_sappsd": return (await import(/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-en_US_sappsd" */ "../assets/i18n/messagebundle_en_US_sappsd.json")).default;
        case "en_US_saprigi": return (await import(/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-en_US_saprigi" */ "../assets/i18n/messagebundle_en_US_saprigi.json")).default;
        case "en_US_saptrc": return (await import(/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-en_US_saptrc" */ "../assets/i18n/messagebundle_en_US_saptrc.json")).default;
        case "es": return (await import(/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-es" */ "../assets/i18n/messagebundle_es.json")).default;
        case "es_MX": return (await import(/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-es_MX" */ "../assets/i18n/messagebundle_es_MX.json")).default;
        case "et": return (await import(/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-et" */ "../assets/i18n/messagebundle_et.json")).default;
        case "fi": return (await import(/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-fi" */ "../assets/i18n/messagebundle_fi.json")).default;
        case "fr": return (await import(/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-fr" */ "../assets/i18n/messagebundle_fr.json")).default;
        case "fr_CA": return (await import(/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-fr_CA" */ "../assets/i18n/messagebundle_fr_CA.json")).default;
        case "hi": return (await import(/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-hi" */ "../assets/i18n/messagebundle_hi.json")).default;
        case "hr": return (await import(/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-hr" */ "../assets/i18n/messagebundle_hr.json")).default;
        case "hu": return (await import(/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-hu" */ "../assets/i18n/messagebundle_hu.json")).default;
        case "in": return (await import(/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-in" */ "../assets/i18n/messagebundle_in.json")).default;
        case "it": return (await import(/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-it" */ "../assets/i18n/messagebundle_it.json")).default;
        case "iw": return (await import(/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-iw" */ "../assets/i18n/messagebundle_iw.json")).default;
        case "ja": return (await import(/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-ja" */ "../assets/i18n/messagebundle_ja.json")).default;
        case "kk": return (await import(/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-kk" */ "../assets/i18n/messagebundle_kk.json")).default;
        case "ko": return (await import(/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-ko" */ "../assets/i18n/messagebundle_ko.json")).default;
        case "lt": return (await import(/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-lt" */ "../assets/i18n/messagebundle_lt.json")).default;
        case "lv": return (await import(/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-lv" */ "../assets/i18n/messagebundle_lv.json")).default;
        case "mk": return (await import(/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-mk" */ "../assets/i18n/messagebundle_mk.json")).default;
        case "ms": return (await import(/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-ms" */ "../assets/i18n/messagebundle_ms.json")).default;
        case "nl": return (await import(/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-nl" */ "../assets/i18n/messagebundle_nl.json")).default;
        case "no": return (await import(/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-no" */ "../assets/i18n/messagebundle_no.json")).default;
        case "pl": return (await import(/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-pl" */ "../assets/i18n/messagebundle_pl.json")).default;
        case "pt": return (await import(/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-pt" */ "../assets/i18n/messagebundle_pt.json")).default;
        case "pt_PT": return (await import(/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-pt_PT" */ "../assets/i18n/messagebundle_pt_PT.json")).default;
        case "ro": return (await import(/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-ro" */ "../assets/i18n/messagebundle_ro.json")).default;
        case "ru": return (await import(/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-ru" */ "../assets/i18n/messagebundle_ru.json")).default;
        case "sh": return (await import(/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-sh" */ "../assets/i18n/messagebundle_sh.json")).default;
        case "sk": return (await import(/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-sk" */ "../assets/i18n/messagebundle_sk.json")).default;
        case "sl": return (await import(/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-sl" */ "../assets/i18n/messagebundle_sl.json")).default;
        case "sr": return (await import(/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-sr" */ "../assets/i18n/messagebundle_sr.json")).default;
        case "sv": return (await import(/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-sv" */ "../assets/i18n/messagebundle_sv.json")).default;
        case "th": return (await import(/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-th" */ "../assets/i18n/messagebundle_th.json")).default;
        case "tr": return (await import(/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-tr" */ "../assets/i18n/messagebundle_tr.json")).default;
        case "uk": return (await import(/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-uk" */ "../assets/i18n/messagebundle_uk.json")).default;
        case "vi": return (await import(/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-vi" */ "../assets/i18n/messagebundle_vi.json")).default;
        case "zh_CN": return (await import(/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-zh_CN" */ "../assets/i18n/messagebundle_zh_CN.json")).default;
        case "zh_TW": return (await import(/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-zh_TW" */ "../assets/i18n/messagebundle_zh_TW.json")).default;
        default: throw "unknown locale";
    }
};
const importAndCheck = async (localeId) => {
    const data = await importMessageBundle(localeId);
    if (typeof data === "string" && data.endsWith(".json")) {
        throw new Error(`[i18n] Invalid bundling detected - dynamic JSON imports bundled as URLs. Switch to inlining JSON files from the build or use 'import ".../Assets-static.js"'. Check the "Assets" documentation for more information.`);
    }
    return data;
};
const localeIds = ["ar",
    "bg",
    "ca",
    "cnr",
    "cs",
    "cy",
    "da",
    "de",
    "el",
    "en",
    "en_GB",
    "en_US_sappsd",
    "en_US_saprigi",
    "en_US_saptrc",
    "es",
    "es_MX",
    "et",
    "fi",
    "fr",
    "fr_CA",
    "hi",
    "hr",
    "hu",
    "in",
    "it",
    "iw",
    "ja",
    "kk",
    "ko",
    "lt",
    "lv",
    "mk",
    "ms",
    "nl",
    "no",
    "pl",
    "pt",
    "pt_PT",
    "ro",
    "ru",
    "sh",
    "sk",
    "sl",
    "sr",
    "sv",
    "th",
    "tr",
    "uk",
    "vi",
    "zh_CN",
    "zh_TW",];
localeIds.forEach(localeId => {
    registerI18nLoader("@ui5/webcomponents-icons", localeId, importAndCheck);
});
//# sourceMappingURL=i18n.js.map