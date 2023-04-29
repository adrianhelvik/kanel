// @generated
// This file is automatically generated by Kanel. Do not modify manually.

import { customerId } from './Customer';
import type { CustomerId } from './Customer';
import { z } from 'zod';

/** Represents the view public.customer_list */
export default interface CustomerList {
  /** Database type: pg_catalog.int4 */
  id: CustomerId;

  /** Database type: pg_catalog.text */
  name: string;

  /** Database type: pg_catalog.varchar */
  address: string;

  /** Database type: pg_catalog.varchar */
  'zip code': string;

  /** Database type: pg_catalog.varchar */
  phone: string;

  /** Database type: pg_catalog.varchar */
  city: string;

  /** Database type: pg_catalog.varchar */
  country: string;

  /** Database type: pg_catalog.text */
  notes: string;

  /** Database type: pg_catalog.int2 */
  sid: number;
}

export const customerList: z.Schema<CustomerList> = z.object({
  id: customerId,
  name: z.string(),
  address: z.string(),
  'zip code': z.string(),
  phone: z.string(),
  city: z.string(),
  country: z.string(),
  notes: z.string(),
  sid: z.number(),
}) as any;
