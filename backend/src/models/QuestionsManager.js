const AbstractManager = require("./AbstractManager");

class QuestionsManager extends AbstractManager {
  static table = "questions";

  insert(item) {
    return this.connection.query(
      `insert into ${QuestionsManager.table} (question, category) values (?, ?)`,
      [item.question, item.category]
    );
  }
}

module.exports = QuestionsManager;
