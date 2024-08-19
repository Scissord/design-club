import * as Column from "../models/column.js";
import * as Card from "../models/card.js";
import sameColumn from "../services/column/sameColumn.js";
import differentColumns from "../services/column/differentColumns.js";

export const getBoard = async (req, res) => {
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
        price: card.price,
        client_name: card.client_name,
        source_name: card.source_name,
        column_id: card.column_id,
        created_at: card.created_at
      };
    });

    res.status(200).send({
      columns,
      cards,
      order,
    });
  } catch (err) {
    console.log("Error in getBoard boardController", err.message);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

export const getCard = async (req, res) => {
  try {
    const { card_id } = req.params;
    const card = await Card.find(card_id);

    switch (card.column_id) {
      case "27725dd5-60cd-4bd7-b419-2bec43e0c922":
        card.progress = 1;
        break;
      case "6030aa47-2ca3-471c-8f30-a823fa8f3720":
        card.progress = 2;
        break;
      case "ad133072-4936-449c-9cf2-8e811c496e43":
        card.progress = 3;
        break;
      case "3bc40a59-a534-4a23-80e7-2c0cfa077dfb":
        card.progress = 4;
        break;
      case "cedb0901-871c-4440-a3d2-0ec4e1fe5f1d":
        card.progress = 5;
        break;
      default:
        break;
    };

    res.status(200).send(card);
  } catch (err) {
    console.log("Error in getCard boardController", err.message);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

export const createCard = async (req, res) => {
  try {
    const column_id = req.params.column_id;
    const { price, source_id, client_id, products } = req.body;

    const card = await Card.create({
      price,
      source_id,
      client_id,
      column_id
    });

    const column = await Column.find(column_id);
    const cards_ids = Array.isArray(column.cards_ids) ? [...column.cards_ids, card.id] : [card.id];
    await Column.update(column.id, { cards_ids });

    res.status(200).send({ message: "ok" });
  } catch (err) {
    console.log("Error in createCard boardController", err.message);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

export const deleteCard = async (req, res) => {
  try {
    const card_id = req.params.card_id;
    const { column_id } = req.body;

    const column = await Column.find(column_id);
    const cards_ids = column.cards_ids.filter((id) => id !== card_id);
    await Column.update(column.id, { cards_ids });

    await Card.softDelete(card_id);

    res.status(200).send({ message: "ok" });
  } catch (err) {
    console.log("Error in deleteCard boardController", err.message);
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
    console.log("Error in moveCard boardController", err.message);
    res.status(400).send({ error: "Invalid request payload" });
  }
};
