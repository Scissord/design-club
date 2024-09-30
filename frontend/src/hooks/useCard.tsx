import axios from "@axios";
import { ICard } from "@interfaces";
import { useEffect, useState } from "react";

export const useCard = (id: string) => {
  const [data, setData] = useState<ICard>({
    id: null,
    price: 0,
    client_name: "",
    source_name: "",
    column_id: null,
    created_at: null,
    avatar: "",
    creator_name: "",
    progress: 0,
    items: []
  });

  useEffect(() => {
    if(id) fetch();
  }, [id])

  const fetch = async () => {
    await axios({
      method: 'GET',
      url: `/cards/${id}`,
    }).then((res) => {
      setData(res.data);
    }).catch((err) => {
      console.log(err);
    })
  };

  const handleUpdateCardItem = async (card_item_id: number, progress: number) => {
    await axios({
      method: 'PATCH',
      url: `/cardItems/${card_item_id}`,
      data: { progress },
    }).then(() => {
      fetch();
    }).catch((err) => {
      console.log(err)
    })
  };

  return {
    data,
    handleUpdateCardItem
  };
};
