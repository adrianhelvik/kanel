// @generated
// This file is automatically generated by Kanel. Do not modify manually.

import { filmId } from './Film';
import type { FilmId } from './Film';
import { mpaaRating } from './MpaaRating';
import type MpaaRating from './MpaaRating';
import { z } from 'zod';

/** Represents the view public.film_list */
export default interface FilmList {
  /** Database type: pg_catalog.int4 */
  fid: FilmId;

  /** Database type: pg_catalog.varchar */
  title: string;

  /** Database type: pg_catalog.text */
  description: string;

  /** Database type: pg_catalog.varchar */
  category: string;

  /** Database type: pg_catalog.numeric */
  price: string;

  /** Database type: pg_catalog.int2 */
  length: number;

  /** Database type: public.mpaa_rating */
  rating: MpaaRating;

  /** Database type: pg_catalog.text */
  actors: string;
}

export const filmList: z.Schema<FilmList> = z.object({
  fid: filmId,
  title: z.string(),
  description: z.string(),
  category: z.string(),
  price: z.string(),
  length: z.number(),
  rating: mpaaRating,
  actors: z.string(),
}) as any;
