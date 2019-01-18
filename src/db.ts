class Database {
  hash: string;

  constructor(hash: string) {
    this.hash = hash;
  }

  getItem<T>(key: string, defaultValue?: T) {
    try {
      const result = localStorage.getItem(`${this.hash}:${key}`);
      return result ? (JSON.parse(result) as T) : defaultValue;
    } catch (error) {
      console.log(`failed to fetch storage key ${key}:`, error);
      return defaultValue;
    }
  }

  setItem<T>(key: string, value: T) {
    localStorage.setItem(`${this.hash}:${key}`, JSON.stringify(value));
  }
}
