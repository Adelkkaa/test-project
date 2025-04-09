import { IItemListType } from "../model/types";

export async function fetchItemsApi(): Promise<IItemListType[]> {
  try {
    if (!process.env.API_URL) {
      throw new Error("API_URL is not defined");
    }

    const response = await fetch(`${process.env.API_URL}/items`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to fetch items:", error);
    throw error;
  }
}


export async function fetchSingleItemApi(id: string): Promise<IItemListType> {
  try {
    if (!process.env.API_URL) {
      throw new Error("API_URL is not defined");
    }

    const response = await fetch(`${process.env.API_URL}/items/${id}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to fetch items:", error);
    throw error;
  }
}

