/** Composante Cache de TimTools */
export default class Cache {
  static set(key, value, force) {
    if (key === undefined) {
      console.error("Vous n'avez pas fourni de clef pour le localstorage");
    } else if (value === undefined) {
      console.error("Vous n'avez pas fourni de valeur pour le localstorage");
    } else if (Cache.isLocalStorageAvailable()) {
      if (!Cache.get(key) || force === true) {
        key = `TT_${key}`;
        localStorage.setItem(key, value);
      } else {
        console.error('La clef que vous avez fourni est déjà utiliser. Forcer au besoin.');
      }
    }
  }

  static get(key, defaultValue) {
    if (key === undefined) {
      console.error("Vous n'avez pas fourni de clef pour le localstorage");
    } else if (Cache.isLocalStorageAvailable()) {
      key = `TT_${key}`;
      return localStorage.getItem(key) ? localStorage.getItem(key) : defaultValue;
    }
  }

  static remove(key) {
    if (key === undefined) {
      console.error("Vous n'avez pas fourni de clef pour le localstorage");
    } else if (Cache.isLocalStorageAvailable()) {
      key = `TT_${key}`;
      localStorage.removeItem(key);
    }
  }

  static isLocalStorageAvailable() {
    const test = '__timTools__';

    try {
      window.localStorage.setItem(test, test);
      window.localStorage.removeItem(test);
      return true;
    } catch (error) {
      console.error('LocalStorage n<est pas disponible sur votre navigateur');
    }
  }
}
