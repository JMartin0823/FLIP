export var PersistanceKeys;
(function (PersistanceKeys) {
    PersistanceKeys["STORE"] = "STORE";
})(PersistanceKeys || (PersistanceKeys = {}));
const get = ({ key, defaultValue, }) => {
    const value = localStorage.getItem(key) || sessionStorage.getItem(key);
    return value ? JSON.parse(value) : defaultValue;
};
const set = ({ key, value, session = false, }) => {
    const storage = session ? sessionStorage : localStorage;
    const parsed = JSON.stringify(value);
    storage.setItem(key, parsed);
};
export default {
    get,
    set,
};
