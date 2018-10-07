/**
 * A generic contact model.
 */
export class Contact {

  constructor(fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (const f in fields) {
      // @ts-ignore
      this[f] = fields[f];
    }
  }

}

export interface Contact {
  [prop: string]: any;
}
