import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { images } from "@/data/restaurants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

export const getRandomDate = () => {
  // Definimos un rango, por ejemplo, los últimos 50 años desde hoy.
  const hoy = new Date(); // Viernes, 9 de Mayo de 2025
  const fechaFin = new Date(hoy); // Copia de la fecha actual como límite superior

  const fechaInicio = new Date(hoy);
  fechaInicio.setFullYear(hoy.getFullYear() - 50); // Restamos 50 años

  // Obtener los timestamps (milisegundos desde la época Unix)
  const timestampInicio = fechaInicio.getTime();
  const timestampFin = fechaFin.getTime();

  // Generar un timestamp aleatorio entre el inicio y el fin
  const timestampAleatorio =
    timestampInicio + Math.random() * (timestampFin - timestampInicio);

  // Crear un nuevo objeto Date a partir del timestamp aleatorio
  return new Date(timestampAleatorio).toDateString();
};
