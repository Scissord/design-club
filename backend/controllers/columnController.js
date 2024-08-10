import * as Column from "../models/column.js";
import * as Card from "../models/card.js";
import sameColumn from "../services/column/sameColumn.js";
import differentColumns from "../services/column/differentColumns.js";

export const get = async (req, res) => {
  try {
    const columnsFromDb = await Column.get();
    const cardsFromDb = await Card.get();

    const columns = {};
    const cards = {};
    const order = [];

    columnsFromDb.forEach(column => {
      columns[column.id] = {
        id: column.id,
        title: column.title,
        cardsIds: column.cards_ids,
      };
      order.push(column.id);
    });

    cardsFromDb.forEach(card => {
      cards[card.id] = {
        id: card.id,
        content: card.content,
      };
    });

    res.status(200).send({
      columns,
      cards,
      order,
    });
  } catch (err) {
    console.log("Error in get column controller", err.message);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

export const moveCard = async (req, res) => {
  const { cardId, sourceColumnId, destinationColumnId, sourceIndex, destinationIndex } = req.body;

  try {
    const sourceColumn = await Column.find(sourceColumnId);
    const destinationColumn = await Column.find(destinationColumnId);

    if (!sourceColumn || !destinationColumn) {
      return res.status(404).send({ error: 'Column not found' });
    }

    if (sourceColumnId === destinationColumnId) {
      sameColumn(
        sourceColumn,
        sourceIndex,
        destinationIndex,
        cardId,
        sourceColumnId
      );
    } else {
      differentColumns(
        sourceColumn,
        sourceIndex,
        sourceColumnId,
        destinationColumn,
        destinationIndex,
        cardId,
        destinationColumnId
      );
    }

    res.status(200).send({ message: "Card moved successfully" });
  } catch (err) {
    console.log("Error in moveCard column controller", err.message);
    res.status(400).send({ error: "Invalid request payload" });
  }
};
