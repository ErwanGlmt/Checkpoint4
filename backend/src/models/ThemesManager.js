const AbstractManager = require("./AbstractManager");

class ThemesManager extends AbstractManager {
  static table = "themes";

  insert(item) {
    return this.connection.query(
      `insert into ${ThemesManager.table} (theme) values (?)`,
      [item.theme]
    );
  }
}

module.exports = ThemesManager;
